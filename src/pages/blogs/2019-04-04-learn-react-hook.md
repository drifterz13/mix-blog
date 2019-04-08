---
layout: blog
title: React Hook in 3 minutes.
description: อัพเกรด React component ของคุณด้วย React Hook
date: 2019-04-04T16:33:18.499Z
tags: ["react", "javascript"]
---

ในตอนนี้เราต้องยอมรับเลยว่ากระแส **React Hook** นั้นมาแรงมากๆครับ การมาของ **React Hook** นั้นทำให้เราสามารถเปลี่ยน **Class component** ของเราเป็น **Functional component** ได้แบบง่ายๆ และนอกจากนี้ **React Hook** ยังทำให้เกิดรูปแบบการเขียน React แบบใหม่ขึ้นมาอีกมากมายครับ ซึ่งเราจะได้เห็นตัวอย่างจากบทความนี้เช่นกันครับ :blush:

#เนื้อหา

- Unlearn setState and useState
- Unlearn Lifecycle and useEffect
- Make custom hook

#สิ่งที่จะได้รับจากบทความนี้

- Basic knowledge of React Hook.
- How to replace setState with useState.
- How to replace some React lifecycle with useEffect.

##Unlearn setState and useState :fire:

เราจะเริ่มทำความรู้จักกับ **useState** กันก่อนเลย โดย Hook API ตัวนี้ทำหน้าที่เหมือน **setState** ที่เราคุ้นเคยกันนั่นเอง แต่ด้วยคุณสมบัติของ **useState** ทำให้ Functional component ของเราสามารถมี **state** ในตัวได้ ดูตัวอย่างจากโค้ดด้านล่างได้เลย

```jsx
import React from "react"

const Car = () => {
  // highlight-next-line
  const [speed, setSpeed] = React.useState(0)

  return (
    <div>
      <h1>speed: {speed} km/hr</h1>
      <button onClick={() => setSpeed(speed + 10)}>+10 speed</button>
    </div>
  )
}
```

##Unlearn Lifecycle and useEffect :fire:
สำหรับ Lifecycle ที่แต่เดิมมีอยู่แค่ใน Class component ตอนนี้เราสามารถทำให้ Functional component ของเรามี Lifecycle ในตัวได้ โดยการใช้ **useEffect** นั่นเอง

ก่อนที่เราจะแทนที่ Lifecycle เดิมด้วย **useEffect** นั้น เราอยากให้ทุกคนมองทุกอย่างเป็น **effect** โดยการเปลี่ยนแปลงที่เกิดขึ้นใน Component ของเราล้วนเป็น **effect** ทั้งสิ้น

### Replace componentDidMount

เราจะมาประเดิมเปลี่ยน **componentDidMount** ของเราโดยใช้ **useEffect** กันครับ

```jsx
// Car.js

import React, { useEffect } from "react"

function mockFetch() {
  return new Promise(resolve => {
    return setTimeout(() => {
      return resolve(40)
    }, 300)
  })
}

const Car = () => {
  const [speed, setSpeed] = React.useState(0)
  // highlight-next-line
  useEffect(() => {
    const getInitialSpeed = async () => {
      const result = await mockFetch()
      setSpeed(result)
    }
    getInitialSpeed()
    // highlight-next-line
  }, [])

  return (
    <div>
      <h1>speed: {speed} km/hr</h1>
      <button onClick={() => setSpeed(speed + 10)}>+10 speed</button>
    </div>
  )
}
```

`useEffect` จะมีสองส่วนหลักๆ คือ **callback** ที่จะทำงานทุกครั้งเมื่อเกิดการเปลี่ยนแปลง (effect) ขึ้นใน component ของเรา และ **array** ที่เก็บลิสต์ของ `props` หรือ `state` ที่เราใช้ check เพื่อ update component ของเราครับ ในที่นี้เราใช้ `[]` ซึ่งหมายความว่า **effect** จะเกิดขึ้นครั้งเดียวตอน render ครั้งแรกครับ

หากเราต้องการให้เกิดการ update หลังจาก render แล้ว เราสามารถกำหนดค่าที่ **useEffect** จะใช้ track ได้เช่น `[props.a]` ซึ่งหมายความว่าทุกครั้งที่ `props.a` มีการเปลี่ยนแปลง callback ของ **useEffect** จะทำงานนั่นเอง

### Replace componentDidUpdate

เราสามารถใช้ **useEffect** ในการแทนที่การทำงานของ **componentDidUpdate** ให้แก่ Functional component ของเราได้เช่นกัน โดยเราสามารถกำหนด `props` หรือ `state` ที่เราจะให้ **useEffect** คอย track การเปลี่ยนแปลงตามที่ได้กล่าวไปแล้วครับ

```jsx
// CarEngine.js

const CarEngine = () => {
  const [gas, setGas] = React.useState(100)
  return (
    <div>
      <button onClick={() => setGas(gas + 25)}>+ gas 25</button>
      <button onClick={() => setGas(gas - 25)}>- gas 25</button>
      <Car gas={gas} />
    </div>
  )
}
```

```jsx
const Car = ({ gas }) => {
  // ...
  useEffect(() => {
    if (gas <= 0) {
      setSpeed(0)
    }
    // highlight-next-line
  }, [])

  return (
    <div>
      <h2>speed: {speed} km/hr</h2>
      <h2>gas: {gas} %</h2>
      <button onClick={() => setSpeed(speed + 10)}>+10 speed</button>
    </div>
  )
}
```

จากโค้ดด้านบนเราได้ส่ง `props` ชื่อ **gas** ให้กับ component Car แต่จะสังเกตได้ว่าในกรณีนี้หากเราคลิกปุ่ม `- gas 25` จน gas เหลือ 0 ค่าของ **speed** ที่ควรจะถูก set เป็น 0 กลับไม่ถูกเปลี่ยนเพราะเราไม่ได้กำหนดค่าที่จะให้ **useEffect** ใช้ track การเปลี่ยนแปลงนั่นเอง

<iframe src="https://giphy.com/embed/2kTIBd9BjgppUshNsc" width="380" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/2kTIBd9BjgppUshNsc"></a></p>

วิธีที่ถูกต้องก็คือ กำหนดค่าของ `props` ที่เราต้องการให้เกิด **effect** ดังนี้ :fire:

```jsx
// ...
useEffect(() => {
  if (gas <= 0) {
    setSpeed(0)
  }
  // highlight-next-line
}, [gas])
```

<iframe src="https://giphy.com/embed/2kNxjHAzuh9EgIn5wB" width="380" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/2kNxjHAzuh9EgIn5wB"></a></p>

## Make custom hook :fire:

จากหัวข้อที่ผ่านมาเราได้ทำให้ Functional component ของเราใช้ state และ lifecycle ที่ก่อนหน้านี้สามารทำได้แต่ใน Class component ได้โดยใช้ความสามารถของ React Hook แต่เรายังสามารถทำการ refactor ออกมาเป็นฟังก์ชัน `useCarController` ซึ่งสามารถนำไปใช้กับ component อื่นๆ ได้อีกด้วยครับ

```jsx
function useCarController(gas) {
  const [speed, setSpeed] = React.useState(0)

  useEffect(() => {
    const getInitialSpeed = async () => {
      const result = await mockFetch()
      setSpeed(result)
    }
    getInitialSpeed()
  }, [])

  useEffect(() => {
    if (gas <= 0) {
      setSpeed(0)
    }
  }, [gas])

  return { speed, setSpeed }
}
```

```jsx
const Car = ({ gas }) => {
  const { speed, setSpeed } = useCarController(gas)
  return (
    <div>
      <h2>speed: {speed} km/hr</h2>
      <h2>gas: {gas} %</h2>
      <button onClick={() => setSpeed(speed + 10)}>+10 speed</button>
    </div>
  )
}
```

ดูตัวอย่างโค้ดทั้งหมดได้[ที่นี่](https://codesandbox.io/s/2rj04xpxy)

#สรุปปิดท้าย
ทั้งหมดนี้คือสิ่งที่ผมได้จากการลองใช้ **React Hook** มาคร่าวๆ ส่วนตัวผมมองว่า **React Hook** ทำให้การเขียน React ง่าย และมีประสิทธิภาพมากยิ่งขึ้น จากการลดการใช้งาน Class component แล้วเปลี่ยนมาใช้ Functional component อย่างไรก็ตาม **React Hook** ยังมีอีกหลาย api ที่น่าสนใจ เช่น **useReducer**, **useMemo** เป็นต้น หากใครสนใจศึกษาเพิ่มเติมสามารถหาอ่านได้จากเว็บไซต์ของ React ได้โดยตรงเลยครับ

สุดท้ายนี้หากมีข้อผิดพลาดตรงไหนก็ขออภัยเป็นอย่างสูง น้อมรับคำติชมด้วยความยินดีครับ :sob: หวังว่าทุกคนจะได้ความรู้จากบทความนี้ไม่มากก็น้อย ขอบคุณทุกท่านที่ติดตามครับ :pray:
