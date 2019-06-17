---
layout: blog
title: JS CONF ASIA - PART 2
description: เรื่องราวการเข้าร่วมงาน JS Conference ASIA ครั้งแรกของ Developer ธรรมดาคนหนึ่ง
date: "2019-06-17T02:31:36.175Z"
tags: ["css", "javascript"]
thumbnail: /jsconf-2.png
thumbnail_credit: "codenothing"
thumbnail_credit_link: "https://www.facebook.com/codenothing13/"
---

กลับมาต่อกันสำหรับเรื่องราวที่น่าสนใจในงาน **JS CONF ASIA** กันครับ ก่อนหน้านี้เราได้พูดถึงเรื่อง **ARTISTIC CSS** ซึ่งเป็น session แรกของวันแรกในบทความก่อนหน้านี้ สำหรับใครที่ยังไม่ได้อ่านสามารหา[อ่านได้ที่นี่](https://www.codenothing.co/blogs/jsconf-asia-day-one-part-one/) เอาละครับสำหรับบทความนี้เราจะมาดูกันต่อว่ามี session ไหนที่น่าสนใจอีก :fire:

# Outline

- Designing components for fun, profit and sanity
- Variable fonts and the flexible nature of screens, environments and devices
- Music and art with ML

## 1. DESIGNING COMPONENTS FOR FUN, PROFIT AND SANITY

เนื้อหาของเรื่องนี้จะเกี่ยวกับการ desing component เป็นหลัก โดยผู้พูดได้แนะนำเราให้รู้จักกับ **atomic design** เพื่อนๆหลายคนอาจจะเคยได้ยินคำๆนี้มาบ้างแล้ว สำหรับคนที่พึ่งเคยได้ยิน ลองมาดูตัวอย่างคร่าวๆด้านล่างกันครับ :zap:

**atomic design** เป็นการแบ่ง folder structure ในการเก็บ component ของเราออกเป็นส่วนๆ ดังนี้

![atomic design](https://anyforsoft.com/sites/default/files/inline-images/Pattern%20lab.png)

จากรูปจะเห็นได้ว่าหน่วยที่เล็กที่สุดคือ atom เมื่อนำ atom มารวมกันเราจะได้ molecules ทำอย่างนี้ไปเรื่อยๆจนได้หน้าขึ้นมาหน้าหนึ่งครับ เราสามารถแบ่ง folder โดยใช้หลักของ **atomic design** ได้ดังนี้

```
components
│
└───atoms
│   │── Button.js
│   │── Text.js
│   │── Anchor.js
│
└───molecules
│   │── ProductCard.js
│   │── Nav.js
│
└───organisms
│   │── Products.js
│   │── Navbar.js
│
└───templates
│   │── Layout.js
│
└───pages
    │── ProductPage.js

```

ส่วนตัวผมคิดว่าการทำ atomic design ช่วยให้ component เรา _**more compsable and more reusable**_ ครับ นอกจากนี้ยังช่วยให้เราหาของที่ต้องการได้ง่ายขึ้นในกรณีที่เรามี component เยอะๆเป็นต้น

## 2. VARIABLE FONTS AND THE FLEXIBLE NATURE OF SCREENS, ENVIRONMENTS AND DEVICES

talk นี้เป็นอีก talk ที่เจ๋งมากๆครับ talk นี้พูดถึงการเล่นกับ **font** ในรูปแบบต่างๆ เมื่อก่อนเวลาเราพูดถึง font แล้วสิ่งที่ come up เข้ามาในหัวเราก็คงไม่พ้นคำสั่ง **css** พื้นฐานเช่น `font-family`, `font-weight`, `font-size` etc. แต่ talk นี้ทำให้ผู้ชมอย่างเราอึ้งสุดๆ แบบ _"เห้ย มันทำไรแบบนี้ได้ด้วยหรอ !?"_ เริ่มแรกผู้พูดได้กล่าวถึงการใช้คำสั่ง css `font-variation-settings` ซึ่งใช้ในการทำ animation ให้กับ font ของเรา จากนั้นผู้พูดได้ demo ผลงานของตัวเองสองผลงานด้วยกัน ได้แก่ **Light Sensor Demo** และ **Grow Decovar Demo**

สำหรับ **Light Sensor Demo** นั้นเป็นการแสดง animation ต่างๆของ font เมื่อมีการเปลี่ยนแปลงความเข้มข้นของแสง ส่วน **Grow Decovar Demo** เป็นการแสดง animation ของ font ที่เกิดขึ้นแบบ loop โดยตอนแรก font ที่เราเห็นจะเป็น font ปกติ จากนั้นเมื่อเวลาผ่านไปจะมี effect คล้ายๆต้นไม้เกิดขึ้นบน font ของเรา ซึ่งผมว่ามันเท่มากๆครับ เพื่อนๆสามารถดูตัวอย่างและวิธีการทำได้ที่[ลิงค์นี้](https://variablefonts.dev/)เลยครับ

## 3. MUSIC AND ART WITH ML

อันนี้เป็นอีก talk ที่ผมชอบมากๆ talk นี้พูดถึงการใช้ Machine learning ในการสร้างสรรค์งานศิลปะและดนตรี จริงๆแล้วก็ตามชื่อเลยครับ **Music and art** :laughing:

ช่วงแรกผู้พูดได้ onboard ผู้ฟังเกี่ยวกับเรื่อง Machine learning แบบคร่าวๆ โดยการยกตัวอย่างการใช้งาน Machine learning ในการ recognize สิ่งต่างๆ เช่น รูปสุนัขหรือรูปแมว เป็นต้น หลังจากนั้นผู้พูดได้ยกตัวอย่างการใช้ Machine learning ในการสร้างงาน Art โดยมีตัวอย่างหนึ่งที่ผมชอบมากก็คือ การใช้ Machine learning ในการ generate กะโหลกของผู้ชมที่ไม่ซ้ำกันขึ้นมา ตามตัวอย่าง[วีดีโอนี้](https://twitter.com/DrBeef_/status/1093852042458787840)เลยครับ

หลังจากนั้นผู้พูดก็ได้แนะนำเว็บไซต์ https://glitch.com ซึ่งเป็นเว็บไซต์ที่รวบรวมงานศิลป์ที่น่าสนใจมากมายซึ่งถูกเขียนขึ้นโดยใช้ Javascript ผู้พูดยังได้นำเสนอ demo การสร้างทำนองดนตรีโดยใช้ [magenta.js](https://magenta.tensorflow.org/) ซึ่งเป็น Machine learning library ที่ใช้กับ Javascript นั่นเอง เพื่อนๆสามารถตามไปลองเล่นผลงานนี้ได้ตาม[ลิงค์นี้](https://coconet.glitch.me/)เลยครับ

# Summary

ทั้งหมดนี้ก็คือเรื่องราวที่น่าสนใจของ **jsconf asia** วันแรกนะครับ ตอนนี้งานได้จบลงไปแล้วตั้งแต่เมื่อวาน แต่เรายังเหลือเรื่องราวที่น่าสนใจของอีก 2 วันที่เหลือให้เพื่อนๆได้อ่านกันอยู่นะครับ ผมจะพยายามค่อยๆ ทยอยลงให้เพื่อนๆ ได้อ่านกันเรื่อย ยังไงฝากติดตามกันต่อด้วยนะครับ ขอบคุณสำหรับการติดตาม **Happy Coding** ครับ :pray:

# Resources

https://blog.usejournal.com/thinking-about-react-atomically-608c865d2262

https://variablefonts.dev/

https://magenta.tensorflow.org/
