---
layout: blog
title: Easy React Typescript Setup
description: setup react โปรเจ็คใหม่แบบเร็วโคตรๆ
date: "2019-04-27T04:30:52.835Z"
tags: ["react", "javascript"]
thumbnail: /01-react-typescript.png
thumbnail_credit: "Kyle Smith"
thumbnail_credit_link: "https://unsplash.com/@kymasm"
---

เมื่อก่อนผมเป็นคนหนึ่งที่ใช้แต่ `create-react-app` ในการขึ้นโปรเจ็คใหม่ เพราะความสะดวกรวดเร็ว และไม่ต้องมานั่ง setup เองให้ปวดหัว :laughing: แต่พอมาถึงจุดหนึ่ง ผมรู้สึกว่าเราไม่ได้เป็นคนควบคุมโปรเจ็คเราเองทั้งหมด เพราะมีเจ้า `create-react-app` มากั้นกลางอยู่นี่แหละ ดังนั้นผมจึงลองขึ้นโปรเจ็คใหม่ด้วยตัวเองมาเรื่อยๆ จนเลิกใช้ `create-react-app` ไปตั้งแต่ตอนไหนก็ไม่รู้ครับ วันนี้เลยอยากจะมาแชร์วิธีที่ผมใช้ในการขึ้นโปรเจ็คใหม่แบบเร็วๆ ให้เพื่อนๆ ได้เอาไปลองใช้กันครับ

# Outline

- Setup React and Typescript
- Setup Jest
- สรุปปิดท้าย

# Setup React and Typescript :fire:

ขั้นตอนแรกเราต้องหาที่อยู่ให้โปรเจ็คเราก่อนครับ

`mkdir react-typescript && cd react-typescript`

เราจะเริ่มจากการ initialize package.json และติดตั้ง react ครับ :triumph:

`yarn init -y`

`yarn add react react-dom`

ขั้นตอนต่อไปเราจะทำการติดตั้ง **parcel-bundler** ซึ่งเป็นพระเอกหลักในการ **bundle** แอพของเรารวมไปถึง **typescript** และ type ของ react ที่ช่วยให้เราสามารถใช้ **typescript** ได้ครับ

`yarn add -D parcel-bundler typescript @types/react @types/react-dom`

พอเรา install package ต่างๆ เสร็จเป็นที่เรียบร้อยให้เราสร้างไฟล์ `index.html` ใน root folder ของเราครับ โดยไฟล์นี้เป็นไฟล์ที่ **parcel** จะใช้เป็น entry point ในการ bundle แอพของเราครับ

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./src/index.tsx"></script>
  </body>
</html>
```

จากนั้นให้เรา สร้างโฟลเดอร์ชื่อ `src` และสร้างไฟล์ `index.tsx` ขึ้นมาครับ

```jsx
// index.tsx

import * as React from "react"
import { render } from "react-dom"

render(<h1>Hello World!</h1>, document.getElementById("app"))
```

จากนั้นใน root folder ของเราให้เราสร้างไฟล์​ `tsconfig.json` เพื่อใช้ในการ config typescript ครับ รายละเอียดของ config ต่างๆ สามารถอ่านได้จาก[ที่นี่](http://json.schemastore.org/tsconfig)

**_tsconfig.json_**

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "esnext",
    "jsx": "react"
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}
```

จากนั้นเราจะมาเขียน **scripts** ที่ใช้ในการ run project ของเรากันครับ

**_package.json_**
```json{2}
  "scripts": {
    "dev": "parcel index.html",
  },
```

จากนั้นให้เพื่อนๆ ใช้คำสั่ง `yarn dev` แล้วลองเข้าไปดูใน `localhost:1234` จะพบว่าแอพเราได้รันเป็นที่เรียบร้อยแล้วครับ :rocket:

แต่เนื่องจากบทความเราจะสั้นเกินไปครับ เพราะการ setup โปรเจ็คใหม่ด้วย **parcel** นี่รวดเร็วมากจริงๆ :laughing: ดังนั้นเราจะมา setup test ให้กับโปรเจ็คเราด้วย โดยในที่นี้เราจะใช้ **jest** คู่กับ **react-testing-library** ครับ

# Setup Jest :zap:

เริ่มแรกเนื่องจากโปรเจ็คเราใช้ typescript ดังนั้น เราต้องใช้ library ที่ช่วยในการ setup test ให้กับโปรเจ็คเราครับ

`yarn add -D jest ts-jest @types/jest`

และที่ขาดไม่ได้เลยก็คือ **react-testing-library** ที่เราจะใช้ร่วมกับ **jest** ครับ

`yarn add -D react-testing-library` :sunglasses:

จากนั้นให้ใช้คำสั่งของ **ts-jest** เพื่อสร้างไฟล์ `jest.config.js` ขึ้นมา

`yarn ts-jest config:init`

จากนั้นเราจะได้ไฟล์ `jest.config.js` ให้เราเปลี่ยน **testEnvironment** จาก **node** เป็น **jsdom** เพื่อใช้สำหรับเทส React component ของเราครับ

```javascript{5}
// jest.config.js

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
}
```

จากนั้นให้สร้าง script สำหรับ run test ในไฟล์ `package.json`

```json{3}
  "scripts": {
    "dev": "parcel index.html",
    "test": "yarn jest",
  },
```

หลังจากที่ทุกอย่างถูก setup เรียบร้อยแล้ว เราจะมาลองสร้าง Component สำหรับเขียนเทสกันครับ ในที่นี้เราได้ใช้ React Hook ในการจัดการ state ให้กับ Functional component ของเราครับ สำหรับคนที่ยังไม่คุ้นกับ React Hook สามารถอ่านได้[ที่นี่](https://www.codenothing.co/blogs/react-hook-in-3-minutes/)

```jsx
// Counter.tsx

import * as React from "react"

const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h1 data-testid="counter">{count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Plus one</button>
    </div>
  )
}

export default Counter
```

```jsx{7}
// index.tsx

import * as React from "react"
import { render } from "react-dom"
import Counter from "./Counter"

render(<Counter />, document.getElementById("app"))
```

หลังจากที่เราสร้าง React Component เป็นที่เรียบร้อย เราก็มาเริ่มเขียนเทสกันเลยครับ :fire: :fire:

```jsx
// Counter.test.tsx

import * as React from "react"
import { render, cleanup, fireEvent } from "react-testing-library"
import Counter from "./Counter"

afterEach(cleanup)

describe("<Counter />", () => {
  // เช็คค่าตั้งต้นว่าเป็น 0
  test("Initial count should be zero", () => {
    const { getByTestId } = render(<Counter />)

    expect(getByTestId("counter").textContent).toBe("0")
  })

  // เช็คว่าหลังจากกดปุ่ม Plus one แล้วตัวเลข counter จะเพิ่ม
  test("Click `Plus one` should increment counter", () => {
    const { getByText, getByTestId } = render(<Counter />)
    fireEvent.click(getByText("Plus one"))

    expect(getByTestId("counter").textContent).toBe("1")
  })
})
```

สำหรับคนที่ไม่เคยใช้ **react-testing-library** ผมแนะนำให้ลองใช้ดูครับ Concept ที่สำคัญของ library นี้ คือการเทสจากสิ่งที่ user เห็นจริงๆ โดยที่เราไม่จำเป็นต้องไปเทส Implementation details ที่ไม่จำเป็นครับ

เอาละเมื่อเราทำการเขียนเทสเสร็จเป็นที่เรียบร้อย เราจะมาลองรันเทสด้วย `yarn test` :rocket: ถ้าไม่มีอะไรผิดพลาดเทสเพื่อนๆ ก็จะผ่านฉลุยครับ :laughing:

# สรุปปิดท้าย

ไม่ได้ยากอย่างที่คิดเลยใช่ไหมครับสำหรับการสร้าง React Project ใหม่ตั้งแต่ต้น หวังว่าบทความนี้จะเป็นประโยชน์กับเพื่อนๆ นะครับ ถ้าใครชอบฝากแชร์ให้กับเพื่อนๆ ต่อด้วยนะครับ ขอบคุณสำหรับการติดตาม **Happy Coding** ครับ :pray:
