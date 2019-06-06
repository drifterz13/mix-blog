---
layout: blog
title: Javascript for React | Closure
description: มาทำความรู้จัก Javascript Closure และตัวอย่างการใช้งานใน React
date: "2019-06-05T16:33:35.992Z"
tags: ["react", "javascript"]
thumbnail: /javascript-closure.png
thumbnail_credit: "codenothing"
thumbnail_credit_link: "https://www.facebook.com/codenothing13/"
---

สวัสดีครับเพื่อนๆหลังจากห่างหายไปนาน วันนี้ **Codenothing** กลับมาอีกครั้งกับบทความชุด [Javascript for React]() ซึ่งนับเป็นตอนที่ 2 ของซีรี่ย์ชุดนี้นะครับ หากใครยังไม่เคยอ่านตอนแรกเกี่ยวกับ [this keyword]() สามารถเข้าไปอ่านกันได้เลย :zap:

เอาละ! สำหรับบทความนี้เราจะมาทำความรู้จัก **Closure** กันครับ **Closure** เป็นอีกเรื่องหนึ่งที่ค่อนข้างยากสำหรับ Javascript developer อย่างเราเป็นอย่างมาก แต่เพื่อนๆรู้ไหมครับว่าเจ้า **Closure** เนี่ยแทรกซึมอยู่ในโค้ดที่เราเขียนกันทุกวันโดยที่เราไม่รู้ตัวเลย
ถึงตอนนี้เพื่อนๆคงสังสัยแล้วว่ามันเป็นมายังไงกันแน่ ดังนั้นเราจะไปลุยกันเลยครับ :fire:

# WTH is Closure ?

คำถามแรกที่อยู่ในใจใครหลายๆคนก็คือ _"Closure คือ อะไร ?"_ มีผู้เชี่ยวชาญ Javascript คนหนึ่งที่เขียนหนังสือ _You don't know js_ ได้กล่าวไว้ว่า..

> Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

หรือถ้าแปลบ้านๆ แบบผมจะได้ความหมายดังนี้ **Closure คือการที่เวลา function ถูก execute แล้วสามารถเข้าถึง scope ชั้นนอกได้ (lexical scope)**

เราสามารถพบเห็น Closure ได้บ่อยๆใน function ที่มีการ return function ตามตัวอย่างด้านล่าง

```js
function outer() {
  let a = 5
  function inner() {
    console.log(a)
  }

  return inner
}

const myInner = outer() // -> fn inner
myInner() // -> 5
```

เพื่อนๆจะเห็นได้ว่าแม้ฟังก์ชัน outer จะถูก execute เป็นที่เรียบร้อยแล้ว แต่ฟังก์ชัน inner ก็ยังสามารถเอาค่า **a** จาก scope ด้านนอกมาใช้ได้ด้วยความสามารถของ **Closure** นั่นเอง

แม้แต่ function ธรรมดาที่ถูก excecute ใน function อีกทีก็สามารถเข้าถ๊งค่า variable ต่างๆของ function ภายนอกได้ดังนี้

```js
function outer() {
  const b = 1
  function inner() {
    const a = 2
    console.log(b)
    debugger // // use this line to inspect Closure
  }
  inner()
}

outer()
```

เราได้ใช้ `debugger` ในการดู Closure ของฟังก์ชัน inner ซึ่งแสดงอยู่ใน `console` โดยค่าที่อยู่ใน Closure ของฟังก์ชัน inner คือ `b = 1` นั่นเอง

สำหรับหัวข้อต่อไปเราจะมาทำความเข้าใจ Closure กันให้มากยิ่งขึ้นไปอีก พร้อมแล้ว 1..2..3 GO! :zap:

# Use Closure to manage STATE :fire:

เคยคิดเล่นๆไหมครับว่าถ้าเราอยากเขียน Javascript ให้สามารถเก็บ **state** ได้เราจะทำยังไง ? บางคนก็บอกว่าประกาศตัวแปรไว้ที่ Global scope ดังนี้

```js
let counter = 0

function increment() {
  counter += 1
}

function decrement() {
  counter -= 1
}

increment() // -> counter = 1
increment() // -> counter = 2
decrement() // -> counter = 1
```

การใช้วิธีดังกล่าวอาจไม่ค่อยดีนักในบางกรณี ดังนั้นเราจะมาใช้ **Closure** ที่เราพึ่งเรียนมามาประยุกต์ใช้จัดการกับ **state** กันครับ

```js
function counterHelper() {
  let counter = 0

  function increment() {
    counter += 1
  }
  function decrement() {
    counter -= 1
  }
  function getValue() {
    console.log(counter)
  }

  return {
    increment: increment,
    decrement: decrement,
    getValue: getValue,
  }
}

const myCounter = counterHelper()
myCounter.increment() // -> counter = 1
myCounter.increment() // -> counter = 2
myCounter.decrement() // -> counter = 1

myCounter.getValue() // -> counter = 1
```

จากตัวอย่างด้านบนเราได้สร้าง `counterHelper` ที่เก็บค่า `counter` และ return ฟังก์ชัน `increment` และ `decrement` ที่ใช้สำหรับ เพิ่ม/ลด ค่า `counter` ซึ่งอยู่ใน scope ภายนอก ด้วยความสามารถของ **Closure** เราจึงสามารถเข้าถึง และเก็บค่าของ `counter` ที่ถูกเปลี่ยนแปลงได้นั่นเอง

# Closure in React

สำหรับหัวข้อนี้เราจะมาลองดูตัวอย่าง Closure ใน React กันครับ

**ตัวอย่าง 1**

```jsx
import React, { useState, useEffect } from "react"

function DogPhoto() {
  const [dogImageUrl, setDogImage] = useState(null)
  useEffect(() => {
    const fetchDogImage = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(({ message }) => {
          debugger // use this line to inspect Closure
          setDogImage(message)
        })
    }
    fetchDogImage()
  }, [])

  return (
    <div>
      <img src={dogImageUrl} alt="cute dog" />
    </div>
  )
}
```

จากตัวอย่างด้านบนเรามี React Component ที่ใช้ **React Hook** ในการจัดการกับ state และ lifecycle สำหรับที่ใครที่ยังไม่คุ้นเคยกับ **React Hook** สามารถหาอ่านได้จาก[บทความนี้](https://www.codenothing.co/blogs/react-hook-in-3-minutes/)ได้เลย

ตัวอย่างนี้เราได้สร้างฟังก์ชัน `fetchDogImage` ซึ่งทำหน้าที่ fetch รูปสุนัขมาแสดงนั่นเอง เราจะสังเกตได้ว่าฟังก์ขันนี้ถูก execute ใน callback ของ `useEffect` และยังอยู่ใน `DogPhoto` ซึงเป็น functional component อีกที แต่เพื่อนๆจะสังเกตได้ว่าเราสามารถใช้งานฟังก์ชัน `setDogImage` ได้เพราะฟังก์ชันนี้อยู่ใน Closure ของฟังก์ชัน `fetchDogImage` นั่นเอง

**ตัวอย่าง 2**

```js
function Counter() {
  const handleClick = value => e => {
    debugger // use this line to inspect Closure
    console.log(value)
  }

  return (
    <div>
      <button onClick={handleClick(10)}>Sample Button</button>
    </div>
  )
}
```

จากตัวอย่างข้างต้นเรามี React Component ที่ทำหน้าที่แสดงปุ่มๆหนึ่งที่จะส่งค่าไปยังฟังก์ชัน `handleClick` ทุกครั้งที่มีการ click เกิดขึ้น เมื่อเราทำการ click ปุ่มนี้เราจะพบว่า Closure ของฟังก์ชัน `handleClick` ก็คือ `value` นั่นเองครับ

# Recap :fire:

เราสามารถสรุปเรื่องที่เราเรียนรู้มาทั้งหมดได้สั้นๆ ดังนี้ครับ

- **Closure** เกิดขึ้นเมื่อมีการ **execute** ฟังก์ขันภายใน scope ภายนอก **(lexical scope)**
- ฟังก์ชันภายในที่ถูก **execute** สามารถจดจำและเข้าถึงค่าต่างๆจาก scope ภายนอก **(lexical scope)** ได้

# สรุปปิดท้าย :zap:

ผ่านไปสำหรับเนื้อหาอันหนักแน่นของเรา หวังว่าเพื่อนๆจะเข้าใจ Closure กันมากขึ้นนะครับ สำหรับใครที่ชอบและเห็นว่าบทความนี้เป็นประโยชน์ รบกวนฝากแชร์ให้เพื่อนชาว developer ท่านอื่นได้อ่านกันต่อด้วยนะครับ ขอบคุณสำหรับการติดตาม **Happy Coding** เช่นเคยครับ :pray:
