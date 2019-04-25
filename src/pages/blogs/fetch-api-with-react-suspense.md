---
layout: blog
title: Fetch Data ด้วย React Suspense
description: ทำความรู้จัก React Suspense และการทำ Data Fetching
date: "2019-04-24T14:14:02.866Z"
tags: ["react", "javascript"]
thumbnail: /01-react-suspense.png
thumbnail_credit: "Michael Glass"
thumbnail_credit_link: "https://unsplash.com/@the_odyssey_image"
---

กลับมาอีกครั้งกลับบทความจาก **codenothing** ครับ ไม่กี่วันมานี้ผมได้ลองอ่านบทความ [React Suspense with the Fetch Api](https://medium.com/@Charles_Stover/react-suspense-with-the-fetch-api-a1b7369b0469) แล้วรู้สึกว่าได้ความรู้เกี่ยวกับ **React Suspense** มากๆ ดังนั้น วันนี้ผมเลยอยากจะเอาสิ่งที่ได้มาแชร์กับเพื่อนๆครับ

# Outline

- React Suspense คืออะไร ?
- สร้าง useFetch สำหรับทำงานกับ Suspense
- Resource
- สรุปปิดท้าย

# React Suspense คืออะไร ?

ถ้าเราลองเปิดดู Doc ของเว็บ React ดูโดยตรงเลยเราจะพบว่าเจ้า **Suspense** เนี่ยใช้สำหรับทำ **Code Splitting** นั่นเองครับ มาดูตัวอย่างกันครับ

```jsx
import React, { Suspense } from "react"

const LazyChild = React.lazy(() => import("./Child"))

const Parent = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <LazyChild />
    </Suspense>
  )
}
```

component ที่ถูก import โดยการใช้ **React.lazy** จะไม่ถูกรวมเข้ากับ **javascript bundle** หลักของเรา แต่จะถูกโหลดแยกเมื่อมีการใช้งานจริงเท่านั้นครับ ส่วน **Suspense** จะช่วย render fallback ให้ในขณะที่ component นั้นยังโหลดไม่เสร็จ

แต่แค่นี้ยังธรรมดาไปครับ เรายังสามารถใช้งาน **Suspense** กับการ fetching data ได้อีกด้วย ซึ่งนั่นหมายความว่าในขณะที่เรา fetching, **Suspense** จะ render fallback ให้เรา จากนั้นพอเราได้ data มาเรียบร้อยก็จะกลับมา render component หลักอีกที โดยที่เราไม่ต้องจัดการกับ **state** เองเลยครับ

**_ตัวอย่าง Suspense_**

```jsx
class Suspense extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      promise: null,
    }
  }

  componentDidCatch(e) {
    if (e instanceof Error) {
      throw e
    }

    if (e instanceof Promise) {
      this.setState({ promise: e }, () => {
        e.then(() => {
          this.setState({ promise: null })
        })
      })
    } else {
      throw e
    }
  }

  render() {
    if (this.state.promise) {
      return this.props.fallback
    }

    return this.props.children
  }
}
```

ใจความสำคัญของโค้ดด้านบนก็คือ หากเกิดการ throw ขึ้นใน children, **componentDidCatch** จะรับค่าที่ throw มาใช้ตัดสินใจว่าจะ render fallback หรือ children หากค่าที่ throw มาเป็น promise, **Suspense** จะรอให้ promise นั้น resolve แล้วจึงกลับมา render children

# สร้าง useFetch สำหรับทำงานกับ Suspense

ก่อนหน้านี้ทีม facebook/react ได้เคยสร้าง [library](https://www.npmjs.com/package/react-cache) ที่ช่วยให้การ fetching data ทำงานร่วมกับ **React Suspense** ได้ แต่ตอนผมเริ่มค้นคว้าเรื่องนี้ก็ดันหา Doc ไม่เจอซะแล้ว 55+

ดังนั้นใน community จึงมีการสร้าง **useFetch** ขึ้นมา เพื่อใช้งานกับ **Suspense** ครับ

```jsx
import deepEqual from "deep-equal"

const fetchCaches = []

export const useFetch = (input, init) => {
  for (const fetchCache of fetchCaches) {
    // เช็คว่าช้อมูลถูก cache ไว้หรือยัง
    if (
      deepEqual(input, fetchCache.input) &&
      deepEqual(init, fetchCache.init)
    ) {
      // หากมี Error ให้ทำการ throw
      if (Object.prototype.hasOwnProperty.call(fetchCache, "error")) {
        throw fetchCache.error
      }
      // หากข้อมูลเคยถูก resolve แล้วให้ return ข้อมูลนั้น
      if (Object.prototype.hasOwnProperty.call(fetchCache, "response")) {
        return fetchCache.response
      }

      // throw promise ให้ componentDidCatch จัดการ, เมื่อ promise นี้ resolve componentDidCatch จะ render children
      throw fetchCache.fetch
    }
  }

  // cache ที่มี type ดังนี้ { fetch: Promise<void>, input: RequestInfo, init: RequestInit | undefined, response?: any, error?: any }
  const fetchCache = {
    fetch: fetch(input, init)
      .then(response => {
        // เช็คว่า response เป็น json หรือไม่
        if (
          response.headers.get("Content-type") &&
          response.headers.get("Content-type").indexOf("application/json") !==
            -1
        ) {
          return response.json()
        }
        return response.text()
      })
      .then(response => {
        fetchCache.response = response
      })
      .catch(e => {
        // หากเกิด error ให้ set ค่าไว้สำหรับ throw error ใน Suspense
        fetchCache.error = e
      }),
    init,
    input,
  }

  fetchCaches.push(fetchCache)

  throw fetchCache.fetch
}
```

จากนั้นเราสามารถนำ **useFetch** ที่เราสร้างมาใช้ร่วมกับ **Suspense** ของเราได้เลย ดังนี้

```jsx
const DataFetching = () => {
  const posts = useFetch("https://jsonplaceholder.typicode.com/photos", {
    method: "GET",
  })

  return (
    <div>
      {posts.map(post => (
        <p key={post.id}>
          {post.id} - {post.title}
        </p>
      ))}
    </div>
  )
}
```

เราจะเห็นว่าการทำ data fetching ไม่จำเป็นต้องทำการจัดการกับ **state** ให้ยุ่งยากอีกต่อไป เพราะความสามารถของ **Suspense** และ **useFetch**

ดูตัวอย่างโค้ดได้[ที่นี่](https://codesandbox.io/s/6y188mzx63)

# Resoures

- [React Code-splitting](https://reactjs.org/docs/code-splitting.html)
- [บทความต้นฉบับ - React Suspense with the Fetch Api](https://medium.com/@Charles_Stover/react-suspense-with-the-fetch-api-a1b7369b0469)

# สรุปปิดท้าย

**React Suspense** ช่วยให้เราทำ **Code Splitting** และ **Data Fetching** ได้ง่าย และมีประสิทธิภาพมากยิ่งขึ้นครับ อย่างไรก็ตาม React ยังไม่ได้สร้าง Api ที่รองรับการทำ **Data Fetching** ใน **Suspense** ให้เรา ดังนั้นตัวอย่างนี้จึงเหมาะสำหรับเป็น case study ที่น่าศึกษาสำหรับผู้ที่สนใจการทำงานของ **Suspense** ครับ สุดท้ายนี้ขอบคุณสำหรับการติดตาม **Happy Coding** ครับ :pray:
