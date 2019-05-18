---
layout: blog
title: มาทำความรู้จัก Javascript Map กันเถอะ
description: เรียนรู้การใช้ Map พร้อมตัวอย่างการใช้งานอย่างเมพ
date: "2019-05-18T08:44:15.158Z"
tags: ["javascript"]
thumbnail: /javascript-map.png
thumbnail_credit: "Daniil Silantev"
thumbnail_credit_link: "https://unsplash.com/@betagamma"
---

สวัสดีครับเพื่อนๆทุกคน ไม่นานมานี้ผมได้มีโอกาสใช้งาน `Map` แบบจริงจัง เลยอยากจะเอาความรู้เรื่องนี้มาแชร์กับเพื่อนๆครับ เพื่อไม่เป็นการเสียเวลา เราจะไปลุยกับเนื้อหาอันเข้มข้นของเรากันเลยครับ :fire:

# Map คืออะไร ?

ก่อนอื่นเราจะมาทำความรู้จัก `Map` กันก่อนครับว่ามันคืออะไร แล้วทำไมเราต้องอยากใช้มันด้วย :grin:

`Map` คือ Data structure ของ Javascript อีกชนิดที่มาพร้อมกับ _ECMAScript2015_ หรือที่เรารู้จักกันในชื่อ **ES6** นั่นเอง

`Map` มีการทำงานคล้ายกับ Javascript **Object** ที่เราใช้กันประจำ คือ ทำหน้าที่เก็บ `key-value` ของข้อมูลนั่นเอง สิ่งที่ทำให้ `Map` ต่างกับ `Object` มีดังนี้

1. `Object` สามารถเก็บ **key** ได้เฉพาะ **Number** หรือ **String** แต่ `Map` สามารถเก็บ **key** ชนิดอื่นนอกเหนือจากนี้ได้ เช่น **Object** หรือ **Array** เป็นต้น
2. การ delete `Object` ทำให้ performance ของระบบเราแย่ลง ในขณะที่การ delete ของ `Map` ไม่มีปัญหาในเรื่องนี้ อ่านเพิ่มเติมได้ใน [stackoverflow](https://stackoverflow.com/questions/43594092/slow-delete-of-object-properties-in-js-in-v8/44008788)
3. `Map` มาพร้อมกับ **methods** ต่างๆ ที่ช่วยให้เราทำงานได้ง่ายขึ้น ในขณะที่ **Object** ไม่มี

# Map ใช้งานยังไง ?

อย่างที่เราได้เกริ่นไปว่าเราใช้ `Map` ในการเก็บ `key-value` ของข้อมูล เราสามารถนำ `Map` มาใช้ได้ดังนี้

```js
const myMap = new Map() // Map(0) {}
```

ตอนนี้เราจะได้ `Map` เปล่าๆมา ต่อไปเราจะมาลองเพิ่มข้อมูลลงไป โดยใช้ `.set` ซึ่งเป็น **method** ที่มากับ `Map` โดย `.set` รับพารามิเตอร์ 2 ตัว คือ **key** และ **value** ตามลำดับ

```js
myMap.set("key-001", "Thor")
myMap.set("key-002", "Tony")
myMap.set("key-003", "Thanos")
// Map(3) {"key-001" => "Thor", "key-002" => "Tony", "key-003" => "Thanos"}
```

จากตัวอย่างด้านบนเราได้เพิ่มข้อมูลลงไปใน `Map` ของเราทีละอัน ต่อไปเราจะมาลองเพิ่มข้อมูลลงไปใน `Map` ทีละหลายๆอันกันครับ

สมมติว่าเรามีข้อมูลที่ดึงมาจาก **api** ของเราดังนี้

```js
const heroes = [
  {
    id: "a001",
    name: "Thor",
    weapons: ["axe", "hammer"],
  },
  {
    id: "a002",
    name: "Tony",
    weapons: ["iron suite"],
  },
]
```

เราจะมาทำการเปลี่ยนแปลงข้อมูลของเราให้อยู่ในรูป `[key, value]` แล้วยัดเข้า `Map` กันครับ

```js
const keyValueHeroes = heroes.map(hero => [hero.id, hero])
```

```js
// ผลลัพธ์

const keyValueHeroes = [
  [
    "a001",
    {
      id: "a001",
      name: "Thor",
      weapons: ["axe", "hammer"],
    },
  ],
  [
    "a002",
    {
      id: "a002",
      name: "Tony",
      weapons: ["iron suite"],
    },
  ],
]
```

เพื่อนๆจะสังเกตได้ว่าเราจะบันทึก `key-value` ใน `Array` ตำแหน่งที่ 0 และ 1 ตามลำดับ ซึ่งแตกต่างจากใน **Object** ที่เราจะบันทึก `key-value` ในรูปแบบ `{ key: value }` ในลำดับต่อมาเราจะทำการยัดข้อมูลดังกล่าวลงใน `Map` ด้วยวิธีเดิม ดังนี้

```js
const myMap = new Map(keyValueHerores)
```

หลังจากที่เราได้เพิ่มของๆเราเข้าไปใน `Map` เรียบร้อยแล้ว เราจะมาลองดู **methods** ที่สำคัญของ `Map` กันครับ :fire:

```js
myMap.get("a001") // ทำการเข้าถึงข้อมูลที่มี key = `a001`
myMap.has("a002") // เช็คว่ามี key นี้อยู่ใน `Map` ของเราหรือไม่
myMap.delete("a001") // ทำการ delete ข้อมูลที่มี key = `a001`
myMap.set("a002", { id: "a002", name: "Thanos", weapons: "gaunlet" }) // ทำการเพิ่มหรือแก้ไขข้อมูล ในที่นี้เรามี key = `a002` อยู่แล้ว ดังนี้นการใช้ `.set` จะเป็นการแก้ไขข้อมูงที่มีอยู่
```

เราใช้ `.get` ซึ่งใช้ **key** ของข้อมูลที่เราสนใจในการเอา **value** ออกมา การเข้าถึงข้อมูลด้วยวิธีนี้มี **Time complexity** เท่ากับ **O(1)**

เราใช้ `.has` ซึ่งใช้ **key** ของข้อมูลที่เราสนใจในการเช็คว่าเรามีข้อมูลนั้นอยู่ไหม

เราใช้ `.delete` ซึ่งใช้ **key** ของข้อมูลที่เราสนใจในการ delete ข้อมูล

ต่อไปเราจะมาลองดู ตัวอย่างการใช้งานจริงกันครับว่าเจ้า `Map` จะมีประโยชน์มากน้อยแค่ไหน

# ตัวอย่างการใช้งาน :zap:

สมมติว่าเรามีข้อมูล 2 ชุด ได้แก่ **people** และ **villians** เราจะมาทำการ `filter` **villians** ออกจาก **people** กันครับ

```js
const people = [
  { id: "001", name: "Thanos" },
  { id: "002", name: "Joker" },
  { id: "003", name: "Thor" },
  { id: "004", name: "Tony" },
]

const villians = [{ id: "001", name: "Thanos" }, { id: "002", name: "Joker" }]
```

แน่นอนว่าเราสามารถแก้ปัญหาข้อนี้ได้ด้วยวิธีง่ายๆ ดังนี้

```js
const heroes = people.filter(
  person => !villians.some(villian => villian.id === person.id)
)
```

แต่ผลลัพธ์ที่ได้จะไม่ดีนัก เพราะเราต้องวนลูปสองชั้นเพื่อแก้ปัญหาดังกล่าว ดังนั้นค่า **Time complexity** ของวิธีนี้จะอยู่ที่ **O(n^2)** ซึ่งเราได้เคยกล่าวถึงไปแล้วใน[บทความนี้](https://www.codenothing.co/blogs/javascript-reduce-pattern/)

เราจะมาลองแก้ปัญหานี้กันใหม่โดยใช้ความรู้เรื่อง `Map` ที่เราได้ศึกษากันไปครับ :sunglasses:

ขั้นตอนแรกเราต้องเริ่มจากการจัดข้อมูลให้อยู่ในรูป `[key, value]` ดังนี้

```js
const keyValueVillians = villians.map(villian => [villian.name, villian])
```

เราจะได้ผลลัพธ์จากการจัดข้อมูลใหม่ โดยใช้ `name` เป็น **key** ดังนี้

```js
// ผลลัพธ์

const keyValueVillians = [
  ["Thanos", { id: "001", name: "Thanos" }],
  ["Joker", { id: "002", name: "Joker" }],
]
```

จากนั้นเราจะทำการใส่ข้อมูลนี้ลงใน `Map` และทำการ `filter` **villians** ออกจาก **people** ของเรากันใหม่

```js
const myMap = new Map(keyValueVillians)

const heroes = people.filter(person => !myMap.has(person.name))
```

```js
// ผลลัพธ์

const heroes = [{ id: "003", name: "Thor" }, { id: "004", name: "Tony" }]
```

ด้วยการนำ `Map` มาใช้เราสามารถแก้ปัญหานี้ โดยทำให้ค่า **Time complexity** ของเราเหลือเพียงแค่ **O(n)** เท่านั้น

# สรุปปิดท้าย

ทั้งหมดนี้ก็คือการใช้งาน `Map` อีกหนึ่ง feature สุดเจ๋งของ **ES6** ครับ การที่เราจะเลือกใช้ **Object** หรือ **Map** นั้น ส่วนตัวผมจะคิดก่อนว่าเราต้องการ **delete** ข้อมูลหรือไม่ ถ้าต้องมีการ **delete** ผมจะเลือกใช้ `Map` หรือ หากต้องการ **read ability** ผมก็จะเลือก `Map` อีกเช่นกันครับ สุดท้ายนี้หวังว่าเพื่อนๆจะได้ประโยชน์จากบทความเรื่องนี้นะครับ หากใครชอบฝากแชร์ให้เพื่อนๆชาว **dev** ของเราได้อ่านกันต่อด้วยนะครับ ขอบคุณสำหรับการติดตาม **Happy Coding** ครับ
