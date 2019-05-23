---
layout: blog
title: Javascript for React | this keyword
description: มาทำความรู้จัก Javascript this keyword และตัวอย่างการใช้งานใน React
date: 2019-05-22T14:58:42.017Z
tags: ["react", "javascript"]
thumbnail: /javascript-this.png
thumbnail_credit: "codenothing"
thumbnail_credit_link: "https://www.facebook.com/codenothing13/"
---

สวัสดีครับเพื่อนๆ วันนี้เราจะมาทำความรู้จักคำว่า **this** ใน Javascript รวมไปถึงการใช้งานที่เราพบเห็นกันได้ทั่วไปใน React ครับ หลายๆคนคงเคยสงสัยว่า **this** คืออะไร? แล้วมันทำอะไรได้บ้างใช่ไหมครับ? บทความนี้มีคำตอบครับ เมื่อพร้อมแล้วเราไปลุยกันเลย :fire:

# What is _this_?

ก่อนอื่นเราจะมาทำความรู้จัก **this** กันก่อนครับ **this** เป็นกลไกอย่างหนึ่งของ Javascript ที่เกิดขึ้นเมื่อมีการ _execute function_ โดย **this** สามารถบอกถึง context ที่ function นั้นถูกเรียกใช้ได้ จากตัวอย่างด้านล่าง **this** ของฟังก์ชัน `show` คือ _window_ เพราะ `show` ถูก execute ใน _global scope_ นั่นเอง

```js
function show() {
  console.log(this)
}

show() // Window Object
```

ต่อไปเราจะมาดูตัวอย่างการ _execute function_ ใน context ที่แตกต่างกันออกไปครับ

```js
var a = 2 // assign a = 2 to window object

function displayA() {
  console.log(this.a)
}

const myObj = {
  a: 3,
  displayA: displayA,
}

displayA() // 2

myObj.displayA() // 3
```

จากโค้ดด้านบนเมื่อเรา execute function `displayA` เราจะได้ผลลัพธ์คือ 2 ซึ่งเป็นค่าของ `window.a` เพราะ `displayA` ถูกเรียกใน _global scope_

ถัดมาเราทำการ execute `displayA` ผ่าน `myObj` แต่คราวนี้เราได้ผลลัพธ์เป็น 3 เพราะ `displayA` ถูกเรียกภายใน `myObj` ดังนั้นค่า `this` จึงถูกชี้ไปที่ `myObj` แทนที่จะเป็น `window` นั่นเอง

# การ Bind ค่า _this_

เราจะมาเริ่มดูตัวอย่างการใช้งาน **this** ที่ advance ขึ้นอีกนิดกันครับ ก่อนหน้านี้เราเคยบอกไว้ว่า **this** สามารถบอกถึง context ที่ function เราถูกเรียกใช้ได้ แต่ถ้าหากเราต้องการผูกค่า **this** ของเรากับ context อื่นแทน เราจะสามารถทำได้ยังไง?

```js
var a = 2

function displayA() {
  console.log(this.a)
}

const myObj = {
  a: 3,
  displayA: displayA,
}

// highlight-next-line
displayA.call(myObj) // 3

const bindedDisplayA = displayA.bind(myObj)

bindedDisplayA() // 3
```

จากโค้ดด้านบนเราใช้ `call` ในการชี้ค่า **this** ไปที่ `myObj` แทนที่จะเป็น `window` ดังนั้นค่า **this** ในที่นี้คือ `{ a: 3, displayA: fn }`

เราสามารถใช้ `bind` ได้เช่นเดียวกับ `call` แต่เราจะต้องทำการ _execute function_ เองในกรณีของ `bind` ส่วนในกรณีของ `call` จะทำการ _execute function_ ทันที

# _this_ in React.

เพื่อนๆที่อ่านมาจนถึงตอนนี้คงเริ่มด่าผมในใจแล้วว่า _wtf ไหนบอกว่าบทความนี้สำหรับ React ?_ :sob: ... ใช่ครับเราจะมาเริ่มโยงเข้ากับ React ในหัวข้อนี้กัน :fire:

สมัยที่เราเขียน React แรกๆ ผมเชื่อว่าเพื่อนๆ น่าจะเคยสงสัยว่าเวลาเราจะใส่ function ใน event listener ทำไมเราต้องจับมันไป `bind` ซะทุกครั้งเลยตามตัวอย่างด้านล่าง

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props)

    // highlight-next-line
    this.increment = this.increment.bind(this)

    this.state = {
      count: 0,
    }
  }

  increment() {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={this.increment}>Increment 1</button>
      </div>
    )
  }
}
```

`onClick` รับ _callback function_ ที่จะถูกเรียกใช้ทุกครั้งที่ button ถูกคลิก ซึ่ง context ตอนที่ _callback function_ ทำงานนั้นคือ `window` ไม่ใช่ React Component ของเรา ดังนั้นเราจึงต้องทำการ `bind` ทุก function ที่เราใช้เข้ากับ React Component เสมอ

เราจะมาดูตัวอย่างโค้ดด้านล่าง เพื่อความเข้าใจที่มากขึ้นกันครับ

```js
class Counter {
  constructor() {
    this.count = 0
  }
  increment() {
    this.count += 1
  }
  log() {
    console.log(this)
  }
}

const myCounter = new Counter()
myCounter.increment()
myCounter.log() // Counter Object

const copyLog = myCounter.log

copyLog() // undefined

const bindedCopyLog = copyLog.bind(myCounter)
bindedCopyLog() // Counter Object
```

จากโค้ดด้านบนเราได้ประกาศ `Class Counter` ซึ่งเปรียบดัง React Component ของเรา จากนั้นเราได้ประกาศตัวแปร `copyLog` แล้วยัดฟังก์ชัน `log` ให้เพื่อหวังจะเอาไปใช้ (เหมือนกับเราเอา function `increment` ยัดเข้าไปใน `onClick` ของ button นั่นเอง) แต่เมื่อเราทำการ execute function `copyLog` เรากลับได้ `undefined` กลับมา แต่หลังจากเราทำการ `bind` เพื่อชี้ context ของ **this** ไปที่ `myCounter` ฟังก์ชันก็สามารถทำงานได้ตามเดิม

สาเหตุที่เราได้ `undefined` ในตอนแรกแทนที่จะเป็น `window` เป็นเพราะว่า function ใน class จะถูก execute แบบ `strict mode` เสมอนั่นเอง (context ของ **this** ใน `strict mode` จะไม่ถูกชี้ไปที่ `window` ดังนั้นเราจึงได้ค่า `undefined`)

# Arrow function :dart: :dart:

ในปัจจุบันการมาของ **arrow function** ใน **ES6** ทำให้เราไม่จำเป็นต้อง `bind` function ของเรากับ React Component อีกต่อไป เพราะค่า **this** ใน **arrow function** จะถูก `bind` เข้ากับ scope ที่ครอบ function นั้นอยู่โดยอัตโนมัติ

เราจะมาทำการเปรียเทียบ **this** ระหว่าง normal function กับ arrow function เมื่อ button ถูก click กันครับ

```jsx
// normal function
increment() {
  console.log(this) // undefined
  this.setState(prevState => ({ count: prevState.count + 1 }))
}

// arrow function
increment = () => {
  console.log(this) // Counter Object
  this.setState(prevState => ({ count: prevState.count + 1 }))
}
```

เราจะเห็นว่าค่า **this** ใน arrow function จะถูก `bind` กับ React Component โดยอัตโนมัติ ในขณะที่เราต้องทำการ `bind` เองในกรณีของ normal function

# สรุปปิดท้าย :zap:

**this** เป็นอีกกลไกหนึ่งของ Javascript ที่ค่อนข้างซับซ้อนใช่ไหมครับ? เราสามารถสรุปสั้นๆได้ว่า

- function ที่ถูกเรียกใช้ปกติจะถูก `bind` ค่า **this** กับ `window`
- function ที่ถูกเรียกใช้ผ่าน Object รวมถึง Class จะถูก `bind` ค่า **this** กับ context ของคัวเอง (Object, Class)
- เราสามารถใช้ `call` หรือ `bind` หากต้องการ `bind` ค่า **this** กับ context อื่น
- arrow function ช่วย `bind` ค่า **this** กับ context ของ scope ที่ครอบ function นั้นอยู่

สุดท้ายนี้หวังว่าบทความนี้จะช่วยให้เพื่อนๆจะเข้าใจ **this** กันมากขึ้นนะครับ ถ้าใครมีข้อสงสัย คำแนะนำ หรือคำติชมสามารถ comment มาทางด้านล่างได้เลยครับ ขอบคุณสำหรับการติดตาม **Happy Coding** ครับ :pray:
