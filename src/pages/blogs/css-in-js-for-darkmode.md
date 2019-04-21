---
layout: blog
title: สร้าง Dark mode โดยใช้ CSS in JS
description: มาทำความรู้จัก CSS in JS โดยการทำ Dark mode กันเถอะ
date: 2019-04-20T09:37:42.130Z
tags: ["react", "javascript", "css"]
thumbnail: /css-in-js.png
thumbnail_credit: "Shane Godsey"
thumbnail_credit_link: "https://www.pinterest.com/shaneg503/"
---

ช่วงที่ผ่านมาผมได้นั่งทำเว็บไซต์ของตัวเอง ได้มีโอกาสลองใช้ feature ใหม่ของ React อย่าง React Hook และ tools ต่างๆ อีกมากมายครับ หนึ่งใน tool ที่ผมชอบมากๆ ตัวหนึ่งก็คือ **emotion** เจ้า tool ตัวนี้ทำให้เราสามารถเขียน **css** ในไฟล์ **javascript** ของเราได้ ซึ่งนั่นหมายความว่าผมสามารถเขียนแค่ไฟล์ **javascript** ไฟล์เดียวเป็นอันจบเรื่องเลยครับ

แต่หลายคนอาจสงสัยว่า _เอ๊ะ .. ปกติมันก็ทำได้โดยใช้ props ที่ชื่อ style ไม่ใช่หรอ ?_ :dizzy_face: ถูกต้องครับ แต่การใช้วิธีนี้มันไม่สะดวกเอามากๆ เพราะว่า css บางตัวถูกบังคับให้เขียนเป็น camelCase และค่าของมันถูกบังคับให้เขียนเป็น string ซึ่งแตกต่างจากการเขียน css ทั่วไปครับ

ตอนนี้ทุกคนคงอยากรู้แล้วใช่ไหมครับว่าไอตัว **emotion** เนี่ยทำอะไรได้ เราจะมาลองทำ **Dark mode** ง่ายๆ โดยใช้เจ้า **emotion** ตัวนี้กัน :fire:

# เนื้อหา

- พื้นฐาน CSS in JS
- สร้าง Dark mode

# ความรู้ที่ควรมี

- พื้นฐานในการใช้ CSS
- พื้นฐานในการใช้ React และ React Hook

# สิ่งที่จะได้รับ

- สามารถใช้ CSS in JS ได้
- สามารถทำ Dark mode ได้

## พื้นฐาน CSS in JS

เริ่มแรกเพื่อนๆ ต้อง set up โปรเจ็ค ขึ้นมาโดยใช้ `create-react-app` หรือจะใช้ `webpack`, `parcel`, etc. ตามที่เพื่อนๆ ชอบเลย จากนั้นเราจะทำการเพิ่ม **emotion** ลงไปในโปรเจ็คของเรากันครับ

`yarn add @emotion/core @emotion/styled`

เริ่มแรกเราจะมาลองสร้าง styled component ขึ้นมาครับ

```jsx
// CustomButton.js

import styled from "@emotion/styled";

const CustomButton = styled("button")`
    padding: 10px 15px;
    margin: 5px 10px;
    border: 1px solid salmon;
    color: `white`;
    background: `salmon`;
    border-radius: 2px;
    cursor: pointer;
    outline-color: salmon;
`
```

สังเกตว่าเราจะใช้คำสั่ง ` styled(/*HTML element*/)`` ` และเขียน css ที่เราต้องการภายในเครื่องหมาย back tick สิ่งหนึ่งที่ผมชอบมากๆ ในการเขียน CSS in JS คือ เราสามารถเขียน function เพื่อทำการเปลี่ยนแปลง css ตาม props ที่ส่งมาได้ด้วยครับ :sunglasses:

```jsx
const colorSetting = props => {
  if (props.primary) {
    return `#fff`
  } else if (props.secondary) {
    return `salmon`
  } else {
    return `#fff`
  }
}

const backGroundSetting = props => {
  if (props.primary) {
    return `salmon`
  } else if (props.secondary) {
    return `transparent`
  } else {
    return `salmon`
  }
}

const CustomButton = styled("button")`
  padding: 10px 15px;
  margin: 5px 10px;
  border: 1px solid salmon;
  color: ${colorSetting};
  background: ${backGroundSetting};
  border-radius: 2px;
  cursor: pointer;
  outline-color: salmon;
`
```

จากนั้นเราจะมาลองเขียน inline style โดยใช้ความสามารถของ **emotion** เช่นเดิมครับ

```jsx
// NestedChild.js

/** @jsx jsx */
import React, { useContext } from "react"
import { css, jsx } from "@emotion/core"
import { CustomButton } from "./CustomButton"

const NestedChild = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      `}
    >
      <h1>Hello World!</h1>
      <div>
        <CustomButton primary> Dark mode </CustomButton>
        <CustomButton secondary>Light mode</CustomButton>
      </div>
    </div>
  )
}
```

จะเห็นว่าเราสามารถเขียน inline style ได้เหมือนกันกับเขียนในไฟล์ css เลยครับ นอกจากนี้เรายังสามารถเขียน function เพื่อเปลี่ยนค่า css ได้เช่นเดียวกับการเขียนแบบ styled component ตามที่ได้กล่าวไว้ข้างต้นครับ

## สร้าง Dark mode

มาถึงจุดนี้แล้วเพื่อนๆ คงพอจะเข้าใจการทำงานของ CSS in JS กันคร่าวๆ แล้วนะครับ ลำดับต่อไปเราจะมาลองทำ Dark mode กัน เริ่มแรกเราจะมาสร้าง **custom hook** ที่ชื่อว่า **useTheme** เพื่อใช้สำหรับการควบคุม theme ของเราระหว่าง **light mode** กับ **dark mode** ครับ :first_quarter_moon:

สำหรับคนที่ยังไม่คุ้นกับ **React Hook** สามารถหาอ่านเพิ่มเติมจาก[บทความนี้](https://www.codenothing.co/blogs/react-hook-in-3-minutes/)ได้เลยครับ :blush:

```jsx
// index.js

/** @jsx jsx */
import React, { useContext, useState } from "react"
import { css, jsx } from "@emotion/core"
import { themeContext } from "./theme"
import NestedChild from "./NestedChild"

const themeContext = React.createContext("light")
const useTheme = () => {
  const currentTheme = useContext(themeContext)
  const [theme, setTheme] = useState(currentTheme)
  const isDarkMode = theme === "dark"

  return { isDarkMode, setTheme }
}
```

อีก feature หนึ่งที่ผมว่าเจ๋งมากๆ ของ **emotion** ก็คือ การใส่ css ให้กับ element ไหนใน DOM ของเราก็ได้โดยใช้ ` <Global styles={css``} /> ` ครับ ความง่ายของมันก็คือ เราสามารถนำ component นี้ไปใช้งานตรงไหนก็ได้

```jsx
// index.js

// ..
import { css, jsx, Global } from "@emotion/core"
// ..
const App = () => {
  const { isDarkMode, setTheme } = useTheme()
  return (
    <React.Fragment>
      <themeContext.Provider
        value={{
          darkMode: isDarkMode,
          setTheme: setTheme,
        }}
      >
        <Global
          styles={css`
            body {
              font-family: Montserrat;
              background: ${isDarkMode ? `#131315` : `#f9f9f9`};
              color: ${isDarkMode ? `salmon` : `#639ee2`};
            }
          `}
        />
        <NestedChild setTheme={setTheme} />
      </themeContext.Provider>
    </React.Fragment>
  )
}
```

จากนั้นเราจะใส่ function setTheme ให้กับ `<CustomButton />` ทั้งสองอันที่เราได้ใช้ **emotion** สร้างมาในตอนแรกครับ

```jsx
// NestedChild.js

// ..
const NestedChild = ({ setTheme }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      `}
    >
      <h1>Hello World!</h1>
      <div>
        <CustomButton primary onClick={() => setTheme("dark")}>
          Dark mode
        </CustomButton>
        <CustomButton secondary onClick={() => setTheme("light")}>
          Light mode
        </CustomButton>
      </div>
    </div>
  )
}
```

เราจะได้ผลลัพธ์เท่ๆ ดังนี้ครับ ดูโค้ดตัวอย่างได้[ที่นี่](https://codesandbox.io/s/n7kpmo3l1l)

<iframe src="https://giphy.com/embed/oX9sHD9hRQWvPeUjvn" width="380" height="268" style="margin-bottom: 0;" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

# สรุปปิดท้าย

ทั้งหมดนี้ก็เป็นประสบการณ์ที่ผมได้ลองใช้ **CSS in JS** กับโปรเจ็คของตัวเอง หวังว่าทุกคนจะได้ไอเดียใหม่ๆ ไปใช้ในการพัฒนาเว็บไซต์กันนะครับ ขอบคุณสำหรับการติดตาม หากคิดว่าบทความนี้น่าจะมีประโยชน์กับเพื่อน developer คนอื่น รบกวนช่วยแชร์ด้วยนะครับ Happy Coding ครับ :pray: :pray:
