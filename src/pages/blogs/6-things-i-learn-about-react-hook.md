---
layout: blog
title: 6 things I've learned about React Hook
description: เรื่องราวต่างที่ผมได้เรียนรู้เกี่ยวกับ React Hook หลังจากใช้งานมาซักพัก
date: "2019-07-01T14:57:05.560Z"
tags: ["react", "javascript"]
thumbnail: /hook.jpg
thumbnail_credit: "wallpaperflare"
thumbnail_credit_link: "https://www.wallpaperflare.com/dota-2-pudge-illustration-hook-art-vector-cartoon-characters-wallpaper-sqda"
---

สวัสดีครับเพื่อนๆทุกคน **codenothing** กลับมาอีกครั้งตามคำเรียกร้องของทางบ้าน :sweat: วันนี้ผมจะมาพูดถึงความรู้ และความรู้สึกต่างๆที่ผมได้เรียนรู้จากการใช้งาน **React Hook** ในช่วงที่ผ่านมากันครับ ก่อนหน้านี้ผมเคยเขียนเกี่ยวกับ **React Hook** ไว้คร่าวๆแล้ว หากเพื่อนๆสนใจก็ตาม[ลิงค์นี้](https://www.codenothing.co/blogs/react-hook-in-3-minutes/)ไปได้เลยครับ เอาละเพื่อไม่เป็นการเสียเวลาเราจะมาเริ่มกันเลยครับ :fire::fire:

# 1. useState :muscle:

การมาของ **useState** ทำให้ผมไม่จำเป็นต้องเขียน **Class Component** เพื่อจัดการกับ `state` อีกต่อไป โดยส่วนตัวแล้วผมไม่คุ้นเคยกับ **class** มากนัก ด้วยความที่ผมไม่เคยเรียนภาษา **java** หรือ **c** มาก่อน และภาษาเดียวที่ผมใช้อยู่ทุกวันนี้ก็คือ **javascript** ดังนั้นการเปลี่ยนจาก **class** มาเป็น **function** แบบเพียวๆเลยทำให้ผมรู้สึกถูกใจขึ้นมากเลยครับ :sweat_smile: โอเคเรามาดูตัวอย่างการใช้งานกันครับสำหรับคนที่ยังไม่คุ้นเคยกับ React Hook มากนัก

```jsx
// example-01.jsx
import React, { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Total count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  )
}
```

# 2. useEffect :boom:

ผมใช้ **useEffect** ทดแทน **lifecycle** ของ React ที่มีอยู่ทั้งหมดเลยครับ มุมมองของ React ของผมจากการใช้ React Hook จะเปลี่ยนไปพอสมควรเลยครับ ช่วงแรกๆที่ผมใช้ **useEffect** ผมจะคิดก่อนว่า _"เอ..เราจะแทน lifecycle นี้ยังไงด้วย `useEffect` ดีนะ ?"_ พอใช้มาซักพักผมก็ได้ความคิดใหม่ขึ้นมา คือ เราไม่จำเป็นต้องสนใจเรื่อง **lifecycle** อีกต่อไปแล้ว เรามาโฟกัสแค่ **data flow** ของ **component** เราก็พอ แล้วนั่นก็จริงครับเพราะเวลาเราใช้ **useEffect** เราสามารถใส่ dependency ที่เราต้องการให้ **useEffect** ของเรา react ต่อการเปลี่ยนแปลงของมันได้ สำหรับใครที่ยังไม่เห็นภาพ เรามาดูตัวอย่างกันครับ :zap:

```jsx
// example-02.jsx

function View({ count }) {
  useEffect(() => {
    console.log(`Effect Happen!`)
  }, [count])

  return <h1>{count}</h1>
}
```

จากตัวอย่างด้านบน เราสามารถอธิบายการทำงานของ component นี้ได้ว่า component นี้รับ `props` ชื่อ `count` และจะมี **effect** เกิดขึ้นทุกครั้งที่ `props` นี้มีการเปลี่ยนแปลง

# 3. useCallback & useMemo :wolf:

API 2 ตัวนี้ของ React Hook ค่อนข้าง tricky มากครับ
ช่วงแรกที่ทำความเข้าใจถึงการใช้งานและความแตกต่างของมันนี่ทำเอาผมมึนมากๆ :joy: แต่ตอนนี้พอเข้าใจขึ้นมากและพร้อมที่จะแชร์ให้เพื่อนๆ อ่านแล้วครับ หากเพื่อนๆ ได้ติดตาม[เพจของผม](https://www.facebook.com/codenothing13) เพื่อนๆจะเห็น pin post ที่เขียนถึง React Hook และรวมถึง **useCallback** และ **useMemo** ด้วย ตอนนนั้นผมบอกไว้ประมาณว่า **useCallback** ใช้ป้องกันการ re-render โดยไม่จำเป็นเวลาใช้ inline function ใช่ไหมครับ จริงๆแล้ว React นั้นไวมากๆ อยู่แล้วเราไม่จำเป็นต้องเอา **useCallback** ไปครอบทุก function ที่เราจะใช้งานก็ได้ ส่วน **useMemo** นั้นเราก็ไม่จำเป็นต้องเอาไปครอบกับทุก function ที่มีการ compute ก็ได้ ถึงตอนนี้เพื่อนๆคงสงสัยว่า _"แล้วยังงั้นเราจะใช้ 2 API นี้ตอนไหน ?"_

เราจะมี use case ที่สำคัญๆ ซึ่งเราจะเลือกใช้ 2 API นี้มาใช้ก็คือเมื่อ dependency ใน **useEffect** ของเราไม่ใช่ primitive value (object/array/function/etc.)

```jsx
// example-03.jsx

function Counter() {
  const [count, setCount] = useState(0)
  //highlight-next-line
  const fn1 = () => console.log("Hello")
  const fn2 = () => {
    const result = doHundredOperation() // do expensive operation
    return result
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      <Sample fn1={fn1} fn2={fn2} />
    </div>
  )
}

function Sample({ fn1, fn2 }) {
  useEffect(() => {
    console.log(`Effect Happen`)
  }, [fn1, fn2])

  return <div />
}
```

จากตัวอย่างด้านบนถ้าผมคลิก **+1** parent component ของเราจะ re-render แล้ว **useEffect** ใน child component ของเราจะทำงาน แม้ว่าค่าของ `f1` หรือ `f2` ของเราจะไม่ได้ถูกเปลี่ยนแปลงแต่อย่างไร เราสามารถใช้ **useCallback** แลพ **useMemo** มาใช้แก้ปัญหานี้ได้ ดังนี้

```jsx
const fn = useCallback(() => console.log("Hello"), [])
const fn2 = useMemo(() => {
  const result = doHundredOperation() // do expensive operation
  return result
}, [])
```

เพียงเท่านี้ **useEffect** ของเราก็จะไม่ทำงานผิดพลาดแล้วครับ นอกจากนี้การใช้ **useMemo** ยังเป็นการ memoization ผลลัพธ์ของ function นั้นๆ ทำให้ function นั้นไม่ต้องถูกเรียกใช้ซ้ำทุกครั้งที่มีการ re-render เกิดขึ้นอีกด้วย

# 4. useContext :metal:

**useContext** นั้นเป็นการจับ Context API ของ React มา simplify ให้ใช้งานได้กับ functional component เช่นเดียวกับ **useState** ครับ สำหรับ **useContext** นั้นก็เป็นอีก API หนึ่งของ React Hook ที่ผมว่าดีมากๆ เพราะความง่ายในการใช้งานของมันนั่นเอง เท่าที่ผมทราบมาบางคนก็ตัดสินใจใช้ React Context แทน redux แล้วเพราะไม่ชอบ boilerplate ที่มากมายหลายขั้นตอนของ redux นั่นเอง เราจะมาดูตัวอย่างการใช้งาน **useContext** เพื่อความเข้าใจที่มากขึ้นกันครับ :fire:

```jsx
// example-04.jsx

const counterContext = React.createContext()

function CounterProvider({ children }) {
  const [count, setCount] = useState(0)
  const plusOne = () => setCount(count + 1)
  return (
    <counterContext.Provider value={{ count, plusOne }}>
      {children}
    </counterContext.Provider>
  )
}

function App() {
  return (
    <CounterProvider>
      <Component1 />
      <Component2 />
    </CounterProvider>
  )
}

function Component1() {
  const { count, plusOne } = useContext(counterContext)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => plusOne()}>+ 1</button>
    </>
  )
}

function Component2() {
  // ...
}
```

ตัวอย่างด้านบนเป็นการใช้ **useContext** แบบง่ายๆ โดยผมได้สร้าง `CounterProvider` ที่เอาไว้ครอบ component ที่จำเป็นต้องรู้จักค่าต่างๆจาก context จากนั้น component ต่างๆสามารถเข้าถึง context นี้ได้โดยใช้ **useContext** นั่นเอง

# 5. useRef :notes:

ตอนแรกผมคิดว่า **useRef** คงเอาไว้ใช้ได้แค่เป็น reference ใน HTML element แต่จริงๆแล้ว **useRef** นั้นสามารถใช้เป็น mutable object ใน component ของเราได้ หากเพื่อนๆเตยประสบปัญหาอยากเก็บค่าตัวแปรที่ไม่เปลี่ยนแปลงไปตามกาลเวลาแม้ว่า component ของเราจะ re-render ซ้ำแล้วซ้ำอีก ... **useRef** ช่วยเราได้ครับ :grin: เรามาลองดูตัวอย่างกันครับ

```jsx
// example-05.jsx

function Component1() {
  // highlight-next-line
  let myCount = 0
  myCount++
  console.log(myCount) // => always log 1

  const { count, plusOne } = useContext(counterContext)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => plusOne()}>+ 1</button>
    </>
  )
}
```

สมมติว่าผมอยากเก็บค่าตัวแปร `myCount` ที่จะเพิ่มทุกครั้งที่ component เรามีการ re-render ผมเลือกใช้ `let` แบบสามัญชนที่ไม่รู้ตาสีตาสา ผลปรากฏว่าค่าที่ได้จาก log นั้นเป็น 1 ตลอด :cry: คราวนี้เปลี่ยนใหม่ เราจะมาลองใช้ **useREf** กัน :fire:

```jsx
const myCount = useRef(0)
myCount.current++
console.log(myCount.current) // => log 1, 2, 3, .. times component render
```

# Conclusion :panda_face:

ทั้งหมดนี้ก็คือสิ่งที่ผมได้เรียนรู้มาตลอดเกี่ยวกับ React Hook ครับ ไม่รู้ว่าเพื่อนๆได้ลองใช้ React Hook ไปกันบ้างหรือยัง หากใครยังไม่เคยผมแนะนำให้ลองใช้ดูครับ ส่วนตัวแล้วผมคิดว่ามันช่วยให้เราเขียน code ได้ง่ายกว่าเดิมขึ้นพอสมควรเลย สำหรับบทความนี้ก็ขอฝากไว้แต่เพียงเท่านี้ ขอบคุณที่ติดตามกันมาโดยตลอด **Happy Coding** ครับ :wolf:
