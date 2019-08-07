---
layout: blog
title: Recursion in Javascript
description: ทำความรู้จัก recursion พร้อมตัวอย่างการใช้งานจริง
date: "2019-08-07T14:37:16.954Z"
tags: ["javascript"]
thumbnail: /recursion-javascript.png
thumbnail_credit: "Octavio Fossatti"
thumbnail_credit_link: "https://unsplash.com/photos/HlWctEa8YH0"
---

สวัสดีครับเพื่อนๆ ทุกคนช่วงหลังๆ มานี้ไม่ได้อัพเดท blog นี้เลย เหตุผลก็คือติดเกมส์โทรศัพท์นี่ละครับ 55+ โอเคครับ วันนี้พอมีเวลาบ้างเลยเอาความรู้ที่ผมพึ่งได้เรียนรู้มาแชร์ให้เพื่อนๆ ได้เสพกัน พร้อมแล้วไปลุยกันเลย

# ทำความรู้จัก Recursion

หากเราลองค้นหาใน google ดูเราก็จะเห็นความหายของ Recursion ดังนี้

> Recursion in computer science is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem (as opposed to iteration).

ซึ่งความหมายของมันก็คือ รูปแบบการแก้ปัญหาชนิดหนึ่งที่มีการแบ่งปัญหานั้นๆ ออกเป็นทาสก์ย่อยๆ นั่นเอง เราจะมาดูตัวอย่างง่ายๆ กันครับ

```js
function factorial(n) {
  if (n < 0) return 0
  if (n <= 1) return 1
  return n * factorial(n - 1)
}
```

จากตัวอย่างด้านบนเรามีฟังก์ชันที่ชื่อ `factorial` ซึ่งเป็น **recursive function** ที่ใช้หาค่า factorial นั่นเอง ข้อสังเกตุของ recursive function ก็คือ จะมีการเรียกตัวเองซ้ำเพื่อรวบรวมผลลัพธ์ไปเรื่อยๆ เราจะมาลองดูตัวอย่างจากการเรียกฟังก์ชันนี้กันครับ

```txt
factorial(5) // 120

5 * factorial(5 - 1)
    4 * factorial(4 - 1)
        3 * factorial(3 - 1)
            2 * factorial(2 - 1)
                1
```

ถ้าเพื่อนๆ ยังไม่ค่อยเข้าใจกระจ่างมากลองนึกถึง stack นะครับ พอเราเรียกฟังก์ชันครั้งแรก call stack จะเพื่มขึ้น 1 พอเรียกตัวเองซ้ำ call stack ก็จะเพิ่มขึ้นไปเรื่อยๆ จนเจอกับเคสสุดท้าย ที่อยู่ใน `if condition` ของเรา ซึ่งมันจะ **หยุดการเรียกตัวเองซ้ำ** จากนั้น call stack ของเราก็จะค่อยๆ ถูก pop ออกเรื่อยๆ จนเราได้ผลลัพธ์มาในที่สุดครับ

# หลักการเขียน Recursive function

เราจะมีกฏง่ายๆ ข้อเดียวเลยครับสำหรับการเขียน recursive function ซึ่งนั่นก็คือ **อย่าลืมเขียน if condition** ซึ่งส่วนใหญ่มักจะเป็นเคสสุดท้ายที่จะหยุดการเรียกตัวเองครับ ซึ่งมันจะช่วยไม่ให้เราต้องประสบกับปัญหา **stack overflow** นั่นเอง

# Real world example :fire:

โอเคครับ หลังจากที่เราพอมีความรู้ความเข้าใขเกี่ยวกับ recursion หรือ recursive function แล้วเราจะมาดูตัวอย่างที่เกิดขึ้นจริงในชีวิตการเป็นนักพัฒนาของเรากัน

```js
function flatten(arr) {
  if (arr.length === 0) return []

  return [].concat(
    Array.isArray(arr[0]) ? flatten(arr[0]) : arr[0],
    flatten(arr.slice(1))
  )
}

// flatten([1,[1,2], [[[5]]]])
```

มีช่วงหนึ่งผมได้เรียนเรื่อง recursion มาแล้วมีโจทย์ให้ลองเขียน recursive function ผมเลยถือโอกาสยกมาเป็นตัวอย่างให้เพื่อนๆ ในบทความนี้เลยครับ

มาลองดูอีกตัวอย่างกันครับ ฟังก์ชันต่อไปจะเป็นฟังก์ชัน sum เลขใน object ครับ

```js
function nestedSum(obj) {
  const keys = Object.keys(obj)
  if (keys.length === 0) return 0

  return keys.reduce((acc, cur) => {
    if (typeof obj[cur] === "number") return acc + obj[cur]
    if (typeof obj[cur] === "object") {
      return nestedSum(obj[cur]) + acc
    }
    return acc
  }, 0)
}
/*
const o1 = {
a: 2,
b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
c: { c: { c: 2 }, cc: "ball", ccc: 5 },
d: 1,
e: { e: { e: 2 }, ee: "car" },
}

nestedSum(o1) --> 19
*/
```

# สรุปปิดท้าย

ผ่านไปสำหรับสองตัวอย่างการเขียน recursion function นะครับ หวังว่าคงจะไม่โหดหรือไม่ง่ายเกินไปสำหรับเพื่อนๆ นะครับ สุดท้ายนี้ขอขอบคุณทุกคนมากๆ เลยที่ติดตามกันมา จะพยายามเขียนบทความขึ้นมาบ่อยๆ ดังเดิมนะครับ สำหรับวันนี้ขอฝากไว้เท่านี้ :pray: **Happy Coding** ครับ
