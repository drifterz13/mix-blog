---
layout: blog
title: 5 Javascript Reduce Pattern
description: รวบรวมเทคนิคการใช้ reduce แบบโคตรเยี่ยม
date: "2019-05-09T14:11:47.865Z"
tags: ["javascript"]
thumbnail: /js-reduce.png
thumbnail_credit: "Holger Link"
thumbnail_credit_link: "https://unsplash.com/@photoholgic"
---

สวัสดีครับเพื่อนๆทุกคน วันนี้ผมจะมาแชร์ pattern ต่างๆของ `Array.prototype.reduce()` ที่เป็นประโยชน์จากประสบการณ์ที่ผมได้ลองผิดลองถูกกับมันมานับครั้งไม่ถ้วนครับ :grin:

# Reduce คืออะไร ?

เราจะมาลองทำความรู้จัก `Array.prototype.reduce()` กันนะครับว่ามันคืออะไร แล้วใช้การยังไง :fire:

> arr.reduce(callback[, initialValue])

`reduce` เปรียบเสมือนกับการที่เราเขียน **reducer** เพื่อเปลี่ยน input ที่เป็น Array ของเราให้เป็น output ที่เราต้องการ โดย `reduce` รับพารามิเตอร์ 2 ตัวคือ **callback** และ **initialState**

**callback** ของ `reducer` ประกอบด้วย

**1. Accumulator (acc)** - เป็นค่าที่ได้จากการ return ในแต่ละครั้ง ถ้าเรากำหนด `initialState` เอาไว้ ค่าที่ได้จากการ loop ครั้งแรกจะเป็นค่าของ `initialState` หากไม่ได้กำหนดไว้จะเป็นค่าแรกของ Array

**2. Current value (cur)** - เป็นค่าปัจจุบันของ Array ที่อยู่ใน loop

**3. Current index (index)** - เป็นค่า index ปัจจุบันของ Array

**4. Array (arr)** - ค่า Array ทั้งก้อนของเรานั่นเอง

มีคนกล่าวไว้ว่า **_Talk is cheap, Show me the code_** ดังนั้นเพื่อไม่เป็นการเสียเวลา และงงมากไปกว่านี้เราจะมาเริ่มดู Pattern ที่สำคัญกันเลย

# Pattern 1 :zap:

เราจะเริ่มจาก pattern ที่ง่ายที่สุด ซึ่งเพื่อนๆน่าจะคุ้นเคยกันอยู่แล้วสำหรับการ sum ค่าใน array โดยใช้เจ้า **reduce** ของเรานะครับ

```js
const arr = [1, 2, 3, 4, 5]

const sum = arr.reduce((acc, cur) => {
  return acc + cur
})

/**
 * 1. acc = 1, cur = 2 return 3
 * 2. acc = 3, cur = 3 return 6
 * 3. acc = 6, cur = 4 return 10
 * 4. acc = 10, cur = 5 return 15
 */

// sum = 15
```

จะสังเกตได้ว่าค่าที่ถูก return ในแต่ละครั้งของการ loop จะถูกเอาไปใช้แทนในค่า acc ของ callback นั่นเอง

# Pattern 2 :zap::zap:

สำหรับ pattern นี้เราจะมานำเสนอการยัดของใส่ Array โดยใช้ท่า `reduce` ของเรากันต่อนะครับ :triumph:

โดยปกติแล้วเราจะใช้วิธี `forEach` เพื่อยัดของเข้า Array ดังนี้

```js
const arr = []
const items = [1, 2, 3, 4, 5]

items.forEach(item => {
  if (item % 2 === 0) {
    arr.push(item)
  }
}) // arr = [2, 4]
```

แต่เราสามารถใช้ `reduce` เพื่อยัดของเข้า Array ได้เช่นกัน :sunglasses:

```js
const arr = [1, 2, 3, 4, 5]

const newArr = arr.reduce((result, item) => {
  if (item % 2 === 0) {
    result.push(item)
  }

  return result
}, []) // newArr = [2, 4]
```

ทุกคนอาจจะยังไม่ค่อยเห็นประโยชน์ของเจ้า `reduce` กันเท่าไหร่ ยังไงอดทนอีกนิดแล้วมาดูคัวอย่างต่อไปกันครับ :fire:

# Pattern 3 :zap::zap::zap:

สำหรับ Pattern นี้เราจะมาลองเปลี่ยน Data structure จาก **Array** เป็น **Object** กันครับ

```js
const heroes = [
  { id: "A001", name: "Tony" },
  { id: "A002", name: "Thor" },
  { id: "A003", name: "Bruce" },
]

const structuredHeroes = heroes.reduce((result, hero) => {
  result[hero.id] = hero

  return result
}, {})
```

```js
// ผลลัพธ์

const structuredHeroes = {
  A001: { id: "A001", name: "Tony" },
  A002: { id: "A002", name: "Thor" },
  A003: { id: "A003", name: "Bruce" },
}
```

หลายคนอาจสงสัยว่าทำไมต้องใช้ **Object** ด้วยละ? **Array** ไม่ดียังไง ? เราลองมาดูเคสตัวอย่างกันครับ

สมมติว่าเราต้องการ `A002` เราจะเอาของอันนี้ออกมายังไง ?

```js
// กรณี Array

const myHero = items.find(item => item.id === "A002") // { id: 'A002', name: 'Thor' }
```

```js
// กรณี Object

const myHero = structuredHeroes["A002"] // { id: 'A002', name: 'Thor' }
```

เราจะเห็นว่าถ้าเรารู้ `id` แล้วเราสามารถเข้าถึง data ได้เลยในกรณีของ **Object** แต่ในกรณีของ **Array** เราต้องทำการวนลูปเพื่อหาค่าที่ต้องการ ถึงตรงนี้ทุกคนอาจยังไม่ปักใจเชื่อว่าเจ้า `reduce` มันดียังไง? เราจะมาลองดูตัวอย่างการใช้งานจริงกันครับ

สมมติว่าเรามี Array ชื่อ **people** ที่รวบรวมคนดีกับคนไม่ดีอยู่รวมกัน และ Array อีกชุดชื่อ **villians** ถ้าเราต้องการเอา **villians** ออกจาก **people** เราจะทำยังไง ?

```js
const people = [
  { id: "001", name: "Thanos" },
  { id: "002", name: "Joker" },
  { id: "003", name: "Thor" },
  { id: "004", name: "Tony" },
]

const villians = [{ id: "001", name: "Thanos" }, { id: "002", name: "Joker" }]
```

เราสามารถทำด้วยวิธีที่ง่ายที่สุดได้ดังนี้

```js
// Naive solution

const heroes = people.filter(
  person => !villians.some(villian => villian.id === person.id)
)
```

แต่ผลลัพธ์ที่ได้จะไม่ดีนัก เพราเราต้องวนลูปสองชั้นเพื่อแก้ปัญหาดังกล่าว ดังนั้นค่า **Time complexity** ของวิธีนี้จะอยู่ที่ **O(n^2)**

```js
// Good solution

const reducedPeople = people.reduce((result, person) => {
  result[person.id] = person

  return result
}, {})
```

เราจะได้ผลลัพธ์จากการ `reduce` ดังนี้

```js
const reducedPeople = {
  "001": { id: "001", name: "Thanos" },
  "002": { id: "002", name: "Joker" },
  "003": { id: "003", name: "Thor" },
  "004": { id: "004", name: "Tony" },
}
```

จากนั้นเราจะทำการเอา **villians** ออกจาก **reducedPeople** กันครับ

_**คำเตือน** บทความนี้ยกตัวอย่างการลบค่าใน `Object` ด้วย `delete` เพื่อความเรียบง่ายของเนื้อหา ในการใช้งานจริงควรใช้_ [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) _แทน `Object` เพื่อทำการ `delete`_

```js
villians.forEach(villian => {
  if (reducedPeople[villian.id]) {
    delete reducedPeople[villian.id]
  }
})
```

```js
// ผลลัพธ์

const reducedPeople = {
  "003": { id: "003", name: "Thor" },
  "004": { id: "004", name: "Tony" },
}
```

จากการใช้วิธี `reduce` เราสามารถป้องกันการลูปซ้อนลูป โดยใช้ Javascript Object ให้เป็นประโยชน์ ซึ่งวิธีนี้ช่วยให้ค่า **Time complexity** ของเราลดลงเหลือเพียงแค่ **O(n)**

ใน pattern ต่อไปเราจะทำการแปลงผลลัพธ์ที่เราได้ให้กลับไปเป็น Array ดังเดิมครับ :fire:

# Pattern 4 :zap::zap::zap::zap:

ต่อจากตัวอย่างที่แล้วสำหรับ pattern นี้เราจะมาแปลง **Object** ของเราให้กลับไปเป็น **Array** ดังเดิมกันครับ

```js
const reducedPeople = {
  "003": { id: "003", name: "Thor" },
  "004": { id: "004", name: "Tony" },
}

const goodPeople = Object.keys(reducedPeople).reduce((result, key) => {
  const hero = reducedPeople[key]
  result.push({ id: key, name: hero.name })

  return result
}, [])
```

จากตัวอย่างด้านบน เราใช้ `Object.keys` เพื่อเอา key ของ `reducedPeople` มาใช้แปลง Data structure กลับไปเป็น **Array** เพียงเท่านี้เราก็จะได้ data แบบที่เราต้องการเป็นที่เรียบร้อยแล้วครับ :grin:

```js
// ผลลัพธ์

const goodPeople = [{ id: "003", name: "Thor" }, { id: "004", name: "Tony" }]
```

# Pattern 5 :zap::zap::zap::zap::zap:

สำหรับ pattern สุดท้ายนี้เราจะใช้ `reduce` ในการจัดหมวดหมู่ของ data ที่เราสนใจครับ ดูตัวอย่างด้านล่างได้เลย :fire:

```js
const goods = [
  { type: "fruit", name: "orange" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "apple" },
]

const categorizedGoods = goods.reduce((result, item) => {
  const { type, name } = item
  result[type] ? result[type].push(name) : (result[type] = [name])

  return result
}, {})
```

การทำงานของฟังก์ชันด้านบนคือ เราจะทำการเช็คชนิดของสินค้าก่อนว่ามีสินค้าชนิดนั้นไหม หากมีเราจะทำการเพิ่มสินค้าชนิดเดียวกันลงไป หากไม่มีเราจะทำการสร้างชนิดของสินค้านั้นขึ้นมา

```js
// ผลลัพธ์

const categorizedGoods = {
  fruit: ["orange", "apple"],
  vegetable: ["carrot"],
}
```

เพียงเท่านี้เราก็จะได้ของที่นำไปใช้งานได้สะดวกมากยิ่งขึ้นครับ :grin:

# สรุปปิดท้าย

ก็ผ่านไปสำหรับ 5 pattern ที่ผมพอจะนึกออกครับ หวังว่าเพื่อนๆ จะเข้าใจการใช้งาน `reduce` กันมากขึ้นนะครับ ถ้าชอบฝากแชร์ต่อให้เพื่อนๆ ชาว dev ท่านอื่นได้อ่านกันต่อด้วยนะครับ ขอบคุณสำหรับการติดตาม **Happy Coding** ครับ :pray:
