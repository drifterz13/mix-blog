---
layout: blog
title: JS CONF ASIA - PART 1
description: เรื่องราวการเข้าร่วมงาน JS Conference ASIA ครั้งแรกของ Developer ธรรมดาคนหนึ่ง
date: "2019-06-14T14:05:38.460Z"
tags: ["css", "javascript"]
thumbnail: /jsconf-1.png
thumbnail_credit: "codenothing"
thumbnail_credit_link: "https://www.facebook.com/codenothing13/"
---

กลับมาอีกครั้งหลังจากห่างหายไปนานพอสมควรนะครับ วันนี้ผมได้มีโอกาสมาเข้าร่วมงาน **JS CONF ASIA** ซึ่งถือว่าเป็นงาน conference นอกประเทศครั้งแรกที่ผมเคยเข้าร่วมครับ ผมขอถือโอกาสนี้มาเล่าเรื่องราวต่างๆในงานให้เพื่อนๆได้เอาไปอัพเดทก่อนใครที่นี่ที่แรกไปเลย(มั้ง)ครับ :zap:

สำหรับรูปในงานนั้นผมไม่ได้ถ่ายเก็บไว้เลย ยังไงอยากให้เพื่อนๆลองหลับตาแล้วจินตนาการภาพตามไปพร้อมๆกันนะครับ เมื่อพร้อมแล้วเราไปลุยกันเลยยย :fire:

_คำเตือน เนื้อหาและภาพประกอบบางส่วนอาจจะไม่ตรง 100% เนื่องจากตัวผมเองไม่ได้ชำนาญด้านภาษาอังกฤษมากนัก รวมถึงข้อจำกัดในการหาภาพตัวอย่าง ยังไงขอให้เพื่อนๆรับฟังด้วยวิจารณญาณกันเอาเองนะครับ_

# Session 1 - ARTISTIC.CSS

เปิดมาหัวข้อแรกเกี่ยวกับ **css** ครับ ตอนแรกผมคิดว่าอาจจะน่าเบื่อนิดๆเพราะผมไม่ได้สนใจในเรื่อง **css** มากนัก แต่กลับไม่เป็นอย่างที่คิดครับเพราะว่าผู้พูด คนนี้ได้นำประวัติศาสตร์ด้าน art มาเชื่อมโยงเข้ากับ css ในปัจจุบันได้อย่างน่าสนใจ โดยเรื่องที่ผู้พูดกล่าวถึงมีดังนี้

### 1. Bauhaus

ผมเข้าใจว่า **bauhaus** เป็น art pattern ที่เกิดขึ้นในสมัยก่อน และนี่คือตัวอย่างของ **bauhaus** ที่ผู้พูดได้นำเสนอ

![bauhaus-art](https://www.bohaglass.co.uk/wp-content/uploads/2015/06/Piet_Mondrian_Bauhaus-499x500.jpg)

เราสามารถทำตามตัวอย่างได้โดยใช้ **css grid** และ **css sub-grid** โดย **css grid** เพื่อนๆน่าจะเคยได้ยินกันมาบ้างแล้ว แต่สำหรับ **css sub-grid** นั้นพึ่งได้รับการกล่าวถึงเมื่อไม่นานมานี้ ณ งาน **JS CONF EU**

### 2. Collage

คำว่า **collage** เป็นอีกคำๆหนึ่งที่มีความหมายถึงรูปแบบทางศิลปะ โดยผู้พูดได้ยกตัวอย่างว่างานศิลป์แนวนี้มีลักษณะคล้ายกับการที่เราทำงานศิลปะโดยใช้เทคนิคตัดแปะนั่นเอง (ผมเชื่อว่าทุกคนเคยทำสมัยตอนเรียนประถม :grin:)

![collage-art](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDjJcRCxH6WcbfhDpSFHVMpekFa8SQsGz6jCqSCeJrEjJ82BH)

กล่าวโดยสรุปก็คือ เราสามารถทำ **collage art** ได้โดยใช้คำสั่ง **css clip-path** และ **css mask**

### 3. Pop-Art

สำหรับงานศิลป์แบบ **Pop-Art** นั้น ผู้พูดได้ยกตัวอย่างให้เราได้เห็นภาพแบบชัดๆเลยก็คือ landing page ของ spotify นั่นเอง

![popart-spotify](https://advantec.co.uk/app/uploads/2018/01/duotone.jpg)

จากตัวอย่างดังกล่าวเราสามารถรังสรรค์รูปภาพของเราให้กลายเป็นงานศิลป์แบบ **Pop-Art** ได้โดยใช้ _css_ **mix-blend-mode** นั่นเอง

### 4. Anti-Design

สำหรับเรื่องสุดท้ายก็คือ งานศิลป์แบบ **Anti-Design** โดยงานศิลป์ดังกล่าวจะมีรูปร่างหน้าตาประมาณนี้

![anti-design](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilGwfYwd1Yi3QwHo0CCY7XUD66STjtR5O2sCRKlHs1Qs7BkOh)

ตอนแรกตกใจเหมือนกันว่า อ้าวนี้ก็งาน art เหมือนกันหรอ 55+ แต่โอเคเรารู้สึกอินอยู่ถือว่าใช้ได้ ผู้พูดได้กล่าวว่าเราสามารถทำงานศิลป์ลักษณะนี้ได้โดยใช้ **css transfrom** และ **font-variables**

โอเคครับตอนแรกอยากเขียนให้ยาวกว่านี้ แต่ตอนนี้ที่สิงค์โปร์ก็เริ่มดึกนิดๆแล้ว บวกกับความเหนื่อยล้าตลอดทั้งวัน ดังนั้นผมขอมาต่อบทความเกี่ยวกับ **JS CONF ASIA** ในบทความต่อๆไปนะครับ ขอบคุณสำหรับทุกการติดตามเหมือนเดิม **Happy Coding** ครับ :pray: :pray:

# Useful Resources

https://learncssgrid.com/

https://css-tricks.com/clipping-masking-css/

https://alligator.io/css/variable-fonts/

https://tympanus.net/codrops/css_reference/mix-blend-mode/
