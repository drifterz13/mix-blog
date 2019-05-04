---
layout: blog
title: React from the ground
description: เรียนรู้พื้นฐานของ React จาก Javascript (no JSX)
date: "2019-05-04T00:41:23.278Z"
tags: ["react", "javascript"]
thumbnail: /react-from-the-ground.png
thumbnail_credit: "Viktor Jakovlev"
thumbnail_credit_link: "https://unsplash.com/@apviktor"
---

สวัสดีครับวันนี้ผมจะมาพูดถึงพื้นฐานของ React ในรูปแบบของ Javscript ทั่วไปที่เพื่อนๆ น่าจะเข้าใจกันได้ไม่ยากครับ จริงๆ แล้วพื้นฐานเรื่องต่างๆ เป็นสิ่งสำคัญเพราะมันช่วยทำให้เราสามารถทำงานในสิ่งนั้นๆ ได้ดีขึ้น เหมือนกับก่อนที่เราจะบวกเลขได้ เราก็ต้องนับเลขให้เป็นก่อน หากเรายังนับเลขได้ไม่ดี เราก็จะบวกเลขพลาดบ่อยๆ :cry: ดังนั้น บทความนี้ผมจะมาลองเขียน React โดยใช้ Javascript ธรรมดา เพื่อให้ทุกคนได้เห็นถึงความเป็นมาของโค้ดที่เราเขียนกันอยู่ทุกวันครับ :triumph:

# React from the ground

จริงๆ แล้ว React ที่เราใช้กันอยู่ทุกวันก็คือ Javascript สุดแสนธรรมดานี่แหละครับ ไม่มีมนต์ดำใดๆ ทั้งสิ้น :laughing: ลองดูตัวอย่างด้านล่างกันครับ :fire:

```jsx
// JSX pattern

function Greeting(props) => {
  return <h1>Hello {props.to}!</h1>
}

ReactDOM.render(<Greeting to="world" />, document.getElementById("root"))
```

```javascript
// Javascript pattern

function Greeting(props) {
  return React.createElement("h1", { to: "world" }, "Hello " + props.to + "!")
}

ReactDOM.render(
  React.createElement(Greeting, { to: "world" }),
  document.getElementById("root")
)
```

จากตัวอย่างด้านบนเราใช้ `React.createElement` ซึ่งเป็นฟังก์ชันที่รับ 3 พารามิเตอร์ด้วยกัน ได้แก่ **tag name, props, และ children** ในการสร้าง React Element ครับ

แม้แต่ท่า **render props** ก็สามารถเขียนได้โดยใช้ Javascript ธรรมดาเช่นกัน, เรามาดูตัวอย่างต่อไปกันเลยครับ :sunglasses:

_**ตัวอย่างด้านล่างมีการใช้ React Hook ทุกคนสามารถหาอ่านเพิ่มเติมได้[ที่นี่](https://www.codenothing.co/blogs/react-hook-in-3-minutes/)**_

```jsx
// JSX pattern

function CounterFactory({ children }) {
  const [count, setCount] = React.useState(0)
  return children({
    count,
    setCount,
  })
}

function DisplayCounter() {
  return (
    <CounterFactory>
      {data => (
        <div>
          <h1>Total Count: {data.count}</h1>
          <button onClick={() => data.setCount(c => c + 1)}>Increment 1</button>
        </div>
      )}
    </CounterFactory>
  )
}
```

```jsx
// Javascript pattern

function CounterFactory({ children }) {
  const [count, setCount] = React.useState(0)
  return children({
    count,
    setCount,
  })
}

function DisplayCounter() {
  return React.createElement(CounterFactory, null, data =>
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Total Count: " + data.count),
      React.createElement(
        "button",
        { onClick: () => data.setCount(c => c + 1) },
        "Increment 1"
      )
    )
  )
}
```

หรือแม้แต่การ **map** ข้อมูลใน **Array** เพื่อเอามาแสดง เราก็สามารถทำได้โดยไม่ต้องใช้รูปแบบการเขียนแบบ JSX

```jsx
const users = [
  {
    name: "Tony Slark",
    age: 99,
  },
  {
    name: "Arya Slark",
    age: 55,
  },
]
```

```jsx
// JSX pattern

function DisplayUsers() {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index.toString()}>
          Name: {user.name} - Age: {user.age}
        </div>
      ))}
    </div>
  )
}
```

```javascript
// Javascript pattern

function DisplayUsers() {
  return React.createElement(
    "div",
    null,
    users.map((user, index) =>
      React.createElement(
        "div",
        {
          key: index.toString(),
        },
        "Name: " + user.name + " - " + "Age: " + user.age
      )
    )
  )
}
```

# สรุปปิดท้าย

ทั้งหมดนี้ก็คือตัวอย่างการเขียน React โดยที่ไม่ใช้ JSX ตัวอย่างที่กล่าวมาข้างต้นน่าจะทำให้เพื่อนๆ เข้าใจถึงที่มาของ React ที่เราใช้งานกันอยู่ทุกวันได้ดีขึ้นนะครับ ถ้าบทความนี้เป็นประโยชน์กับเพื่อนๆ รบกวนช่วยแชร์ต่อด้วยนะครับ :smile: ขอบคุณสำหรับการติดตาม **Happy Coding** ครับ :pray:
