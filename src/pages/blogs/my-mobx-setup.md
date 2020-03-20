---
layout: blog
title: My current MobX setup.
description: วิธีล่าสุดที่ผมใช้ MobX ในโปรเจ็ค React
date: "2020-03-20T11:40:45.140Z"
tags: ["react", "javascript"]
thumbnail: /my-mobx-setup.png
thumbnail_credit: "Joshua Newton"
thumbnail_credit_link: "https://unsplash.com/@joshuanewton"
---

ปัจจุบันผู้คนเริ่มให้ความสนใจกับ state management library ทางเลือกนอกเหนือจาก `Redux` มากขึ้น หนึ่งในนั้นที่จะไม่พูดถึงเลยไม่ได้ก็คือ `MobX` ซึ่งปัจจุบันเจ้าของก็ถูกเชิญไปทำงานกับทาง facebook เป็นที่เรียบร้อย 😂 ในบทความนี้ผมก็จะมาพูดถึงวิธีปัจจุบันที่ผมใช้ `MobX` ซึ่งผมคิดว่าง่ายและยุ่งยากน้อยที่สุด ก่อนหน้านี้ผมเคยพูดถึง `MobX` ไว้ใน[บทความนี้](https://www.codenothing.co/blogs/my-mobx-journey/) แต่ผมคิดว่ามันดูยุ่งยากเกินไปหน่อย วันนี้เลยกลับมาเขียนใหม่อีกที ยังไงถ้าใครสนใจก็ไปตามอ่านย้อนหลังกันได้นะครับ เพื่อไม่เป็นการเสียเวลาเรามาเริ่มกันเลยครับ ⚡️

ก่อนอื่นเลยเราต้อง install package ที่ขาดไม่ได้เลยก็คือ `mobx` กับ `mobx-react-lite` ที่เราจะมาใช้ร่วมกับ React hook ครับ

```
yarn add mobx mobx-react-lite
```

สำหรับบทความนี้ผมจะยกตัวอย่างง่ายๆ เพื่อความกระชับและรวดเร็ว เอาละไปต่อกันเลย 👨🏿‍💻

**context.js**

```jsx
import React from "react"
import { useLocalStore } from "mobx-react-lite"

export const counterContext = React.createContext({
  count: 0,
  foo: {
    bar: "baz",
  },
})

export default function CounterContextProvider(props) {
  const counterState = useLocalStore(() => ({
    count: 0,
    foo: { bar: null },
  }))

  return (
    <counterContext.Provider value={counterState}>
      {props.children}
    </counterContext.Provider>
  )
}
```

จากโค้ดด้านบนจะมี highlight หลักๆ 2 เรื่อง คือ การใช้ `useLocalStore` เพื่อสร้าง `state` ที่เราสามารถทำการติดตามการเปลี่ยนแปลงของค่าเหล่านี้ได้ โดยใช้ `useObserver` ซึ่งผมจะกล่าวต่อไปในภายหลังนะครับ และการใช้ `React context` เพื่อส่งผ่าน `state` ก้อนนี้ให้ component อื่นได้อย่างสะดวกรวดเร็วนั่นเอง ⚡️

**App.js**

```jsx
import React from "react"
import CounterContextProvider from "./context"
import NormalCount from "./NormalCount"
import SpecialCount from "./SpecialCount"

export default function App() {
  return (
    <CounterContextProvider>
      <NormalCount />
      <SpecialCount />
    </CounterContextProvider>
  )
}
```

สำหรับในไฟล์ `App.js` นี้จะมีการใช้ `CounterContextProvider` ในการครอบ component ที่เราต้องการให้สามารถเข้าถึงค่าใน `context` ดังกล่าวได้ครับ

**NormalCount.js**

```jsx
import React, { useContext } from "react"
import { useObserver } from "mobx-react-lite"
import { counterContext } from "./context"

export default function NormalCount() {
  const counterState = useContext(counterContext)

  return useObserver(() => (
    <div>
      <h2>Total count: {counterState.count}</h2>
      <button
        type="button"
        onClick={() => {
          counterState.count = counterState.count + 1
        }}
      >
        + 1 count
      </button>
    </div>
  ))
}
```

ในที่นี้ผมสร้าง component ชื่อ `<NormalCount />` ขึ้นมา ซึ่งภายใน component นี้ผมใช้ `useContext` กับ `counterCounterContext` เพื่อทำการเข้าถึง `mobx state` ที่เราได้ประกาศไว้ก่อนหน้านี้ หากใครยังไม่เคยใช้ `useContext` ให้ลองกลับไปอ่าน[บทความนี้](https://www.codenothing.co/blogs/react-hook-in-3-minutes/)ก่อนนะครับ 😸 นอกจากนี้ผมได้ทำการใช้ `useObserver` เพื่อให้ component ที่ถูกครอบสามารถ update ค่าตาม `state` ที่เปลี่ยนไปได้ครับ อารมณ์มันจะคล้ายๆกับ `mapStateToProps` ใน `redux` นั่นเอง

**SpecialCount.js**

```jsx
import React, { useContext } from "react"
import { counterContext } from "./context"
import { useObserver } from "mobx-react-lite"

export default React.memo(() => {
  const counterState = useContext(counterContext)

  return useObserver(() => (
    <div>
      <pre>{JSON.stringify(counterState.foo)}</pre>
      <button
        type="button"
        onClick={() => {
          counterState.foo.bar = Math.floor(Math.random(0, 10) * 10)
        }}
      >
        update special count
      </button>
    </div>
  ))
})
```

สำหรับไฟล์นี้ก็ทำในลักษณะเดียวกับ `<NormalCount />` คือการเข้าถึง `state` ผ่าน `useContext` กับการใช้ `useObserver` ในการ update ข้อมูลนั่นเอง

แต่มีสองจุดที่ผมอยาก highlight ก็คือ เราสามารถทำการ update `counterState.foo.bar` ได้โดยตรง โดยไม่ต้องทำการประกาศ object ใหม่ หรือใช้ `spread operation` เลย 🙀นอกจากนี้ผมได้ใช้ `React.memo` ครอบ component นี้ไว้เพื่อป้องกันการ re-render ที่ไม่จำเป็นของ component นี้เวลา state อื่นที่เราไม่สนใจเกิดการ update ขึ้น เช่น ถ้า `counterState.count` เกิดการ update ขึ้น component นี้จะไม่ re-render นั่นเอง เพื่อนๆสามารถลองทดสอบเล่นๆ โดยการเอา `React.memo` ออกแล้วใส่ `console.log` ไว้เช็คได้เลยครับ 🔥

## สรุปปิดท้าย 🐥

ทั้งหมดนี้ก็คือการ setup โปรเจ็ค react โดยใช้ `MobX` ที่ผมคิดว่าง่าย และสะดวกมากๆ เพื่อนๆคนไหนได้ลองใช้แล้วดีไม่ดีก็มาบอกกันได้นะครับ ยังไงหวังว่าเพื่อนๆจะได้ประโยชน์จากบทความนี้ไม่มากก็น้อย ขอบคุณสำหรับการติดตามครับ 🙏
