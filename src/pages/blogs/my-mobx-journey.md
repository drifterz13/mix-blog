---
layout: blog
title: มาใช้ React Hook กับ MobX กันเถอะ
description: ทดลองการใช้งาน mobx กับ react hook แบบรวดเร็ว
date: "2019-05-14T13:06:23.253Z"
tags: ["react", "javascript"]
thumbnail: /react-mobx.png
thumbnail_credit: "Cody Davis"
thumbnail_credit_link: "https://unsplash.com/@codytdavis"
---

สวัสดีครับผู้อ่านทุกคน เมื่อหลายวันก่อนผมได้เห็น stack ที่เว็บไซต์ [google io](https://events.google.com/io/) ใช้ ซึ่งหนึ่งในนั้นมี **MobX** อยู่ด้วย ด้วยความสงสัยว่า tool ตัวนี้ทำอะไรได้บ้าง ผมเลยตัดสินใจลองผิดลองถูกสร้าง **Todo app** ตาม [example](https://redux.js.org/basics/example) ของ **Redux** แต่ใช้ **MobX** แทน ผลจะเป็นยังไงมาลองดูตัวอย่างกันเลยครับ

# What is MobX ?

ก่อนที่จะเริ่มก็ต้องมาตอบคำถามแรกกันก่อนครับว่าเจ้า **MobX** เนี่ยมันคืออะไร ?

**MobX** คือ state management libray ที่ช่วยจัดการกับข้อมูลของเรา โดยใช้หลักของ **functional reactive programming** นั่นเอง ฟังดูแล้วอาจยังไม่เห็นภาพ เราลองไปดูตัวอย่างจริงกันดีกว่าครับ :sunglasses:

> Talk is cheap, Show me the code.

# Getting started

สิ่งแรกที่เพื่อนๆ ต้องทำก็คือการ setup project ขึ้นมาก่อน โดยเพื่อนๆ อาจจะใช้ `create-react-app` หรือใช้ `parcel` ตามที่ผมได้เคยกล่าวไว้ใน[บทความนี้](https://www.codenothing.co/blogs/parcel-react-typescript/)ก็ได้ครับ :zap:

ต่อไปเราจะมาเริ่มทำการ install package ที่เราจะใช้กันเลย :fire:

`yarn add mobx-state-tree mobx-react-lite`

เราจะใช้ `mobx-state-tree` ในการสร้าง store ขึ้นมา และใช้ `mobx-react-lite` เพื่อช่วยให้เราสามารถใช้งาน `mobx` ร่วมกับ React Hook ได้ครับ สำหรับใครที่ยังไม่รู้จัก React Hook ผมแนะนำให้เริ่มอ่าน[บทความนี้](https://www.codenothing.co/blogs/react-hook-in-3-minutes/)ก่อนครับ :zap:

## สร้าง Data layer โดยใช้ MobX store

`mobx-state-tree` จะประกอบด้วย 3 ส่วนหลักๆที่สำคัญคือ `model`, `actions`, และ `views` โดย `model` ใช้สำหรับกำหนดหน้าตา (type) ของข้อมูล, `actions` ใช้สำหรับเปลี่ยนแปลงค่าของข้อมูลใน store, `views` เป็น pure function ที่เอาข้อมูลใน store มา compute เพื่อแสดงใน ui ของเรา

จากตัวอย่างด้านล่างเพื่อนๆจะสังเกตว่าเราไม่จำเป็นต้องแยกไฟล์ **reducer** หรือ **action** ออกจากกันเหมือนตอนที่เราใช้ **redux** แต่เราสามารถสร้าง **store**, **action**, และ **reducer** ขึ้นมาพร้อมๆกันในตัวได้เลย ซึ่งจุดนี้เป็นจุดที่ผมชอบมากๆครับ

```js
// state/index.js

import { types, getParent, destroy } from "mobx-state-tree"

let counter = 1

// ทำการสร้าง model ของ todo
// ซึ่งมี type { id: string, title: string, completed: boolean }
const todo = types
  // highlight-next-line
  .model("todo", {
    id: types.string,
    title: types.string,
    completed: false,
  })
  // highlight-next-line
  .actions(self => ({
    toggle() {
      self.completed = !self.completed
    },
    remove() {
      getParent(self, 2).remove(self)
    },
  }))

// ทำการสร้าง model ของ store
// ซึ่งมีหน้าตาดังนี้ { todos: todo[], filter: string }
const todoStore = types
  // highlight-next-line
  .model({
    todos: types.optional(types.array(todo), []),
    filter: "all",
  })
  // highlight-next-line
  .actions(self => ({
    addTodo(title) {
      self.todos.push({ id: `todo-${counter}`, title })
      counter += 1
    },
    remove(item) {
      destroy(item)
    },
    changeFilter(filterName) {
      self.filter = filterName
    },
  }))
  // highlight-next-line
  .views(self => ({
    get completedTodos() {
      return self.todos.filter(todo => todo.completed)
    },
    get incompletedTodos() {
      return self.todos.filter(todo => !todo.completed)
    },
  }))

// สร้าง store
// highlight-next-line
const store = todoStore.create()

export default store
```

สำหรับ `getParent` ที่เราใช้ด้านบนนั้นทำหน้าที่ในการ lookup ขึ้นไปบน data structure tree หากเราใช้ `getParent(self, 1)` เราจะสามารถเข้าถึง `todo[]` ที่เก็บ todo ของเราไว้ สำหรับ `getParent(self, 2)` ที่ใช้ในตัวอย่างจะสามารถเข้าถึง `todos: { todo[] }` ซึ่งมี action remove ที่เราต้องการใช้นั่นเอง ส่วนคำสั่ง `destroy` เป็น api ของ `mobx-state-tree` ที่ช่วยในการลบ node ที่ต้องการออกจาก store ของเราครับ

## สร้าง View layer โดยใช้ React

```jsx
// index.js

import React from "react"
import { render } from "react-dom"

import store from "./state"
import App from "./components/App"

// highlight-next-line
export const todoContext = React.createContext(store)

render(<App />, document.getElementById("app"))
```

จุดสำคัญของโค้ดด้านบนคือ เราได้นำ store ที่เราสร้างไว้มายัดใน `React.createContext` ซึ่งเราสามารถนำค่าต่างๆจาก store รวมถึง `action` ใปใช้ใน component อื่นได้ผ่านการใช้ `React.useContext`

```jsx
// components/App.js

import React from "react"
import { todoContext } from "../"
import AddTodoForm from "./AddTodoForm"

import Todos from "./Todos"
import FilterPanel from "./FilterTodo"

const App = () => {
  // highlight-next-line
  const { addTodo, changeFilter } = React.useContext(todoContext)

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <Todos />
      <FilterPanel setFilter={changeFilter} />
    </div>
  )
}

export default App
```

จากโค้ดด้านบน เราได้ใช้ `useContext` เพื่อนำ `action` ที่เราสร้างไว้ใน `mobx-state-tree` มาใช้งาน

```jsx
// components/AddTodoForm.js

import React from "react"

const useTodoFormHelper = addTodo => {
  const [todo, setTodo] = React.useState("")
  const handleSubmit = e => {
    e.preventDefault()
    addTodo(todo)
    setTodo("")
  }
  const handleChange = e => {
    setTodo(e.target.value)
  }

  return { todo, handleChange, handleSubmit }
}

const AddTodoForm = ({ addTodo }) => {
  // highlight-next-line
  const { todo, handleChange, handleSubmit } = useTodoFormHelper(addTodo)
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  )
}

export default AddTodoForm
```

จากโค้ดด้านบนเราได้สร้าง _Custom Hook_ ขึ้นมาเพื่อช่วยจัดการกับ state ใน component ครับ

```jsx
// components/Todos.js

import React from "react"
// highlight-next-line
import { observer } from "mobx-react-lite"
import { todoContext } from "../"

import Todo from "./Todo"

const useTodosFilter = () => {
  // highlight-next-line
  const { todos, filter, completedTodos, incompletedTodos } = React.useContext(
    todoContext
  )
  switch (filter) {
    case "all":
      return todos
    case "completed":
      return completedTodos
    case "incompleted":
      return incompletedTodos
    default:
      return []
  }
}

// highlight-next-line
const Todos = observer(() => {
  const todos = useTodosFilter()

  return (
    <ul>
      {todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            remove={todo.remove}
            toggle={todo.toggle}
            completed={todo.completed}
          />
        )
      })}
    </ul>
  )
})

export default Todos
```

จากโค้ดด้านบนเราได้นำค่า `todos`, `filter` ซึ่งอยู่ใน store และ `completedTodos`, `incompletedTodos` ที่ได้สร้างไว้ใน `views` มาใช้

จุดสำคัญของ component นี้คือ เราได้นำ `observer` จาก `mobx-react-lite` มาใช้ `observer` จะทำหน้าที่ในการติดตามการเปลี่ยนแปลงของข้อมูลใน store ที่เราสนใจให้โดยอัตโนมัติ คล้ายๆกับการทำงานของ `mapStateToProps` ใน redux

```jsx
// components/Todo.js

/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const Todo = ({ title, completed, remove, toggle }) => {
  return (
    <li>
      <span
        onClick={toggle}
        css={css`
          text-decoration: ${completed ? "line-through" : "none"};
        `}
      >
        {title}
      </span>
      <button onClick={remove}>X</button>
    </li>
  )
}

export default Todo
```

โค้ดด้านบนมีการใช้ `css` จาก `@emotion/core` มาใช้ในการ style ครับ หากใครสนใจเรื่อว **css in js** สามารถหาอ่านเพิ่มเติมได้จาก[บทความนี้](https://www.codenothing.co/blogs/css-in-js-for-darkmode/)

```jsx
// components/FilterPanel.js
import React from "react"

const FilterPanel = ({ setFilter }) => {
  return (
    <>
      <button onClick={() => setFilter("completed")}>completed</button>
      <button onClick={() => setFilter("incompleted")}>not completed</button>
      <button onClick={() => setFilter("all")}>all</button>
    </>
  )
}

export default FilterPanel
```

โค้ดด้านบนเป็น component ที่มีหน้าที่ในการจัดการกับค่า `filter` ใน store ของเราผ่านการใช้ action `setFilter` นั่นเอง

ทั้งหมดนี้ก็คือตัวอย่างสั้นๆในการใช้ `mobx` ร่วมกับ React Hook นะครับ เพื่อนๆสามารถดูตัวอย่าง[โค้ดทั้งหมดได้ที่นี่](https://codesandbox.io/s/8pk9p361v9)

# สรุปปิดท้าย

`mobx-state-tree` เป็นอีกตัวเลือกหนึ่งที่ช่วยให้การจัดการกับ state ง่ายขึ้น, `mobx-react-lite` ช่วยให้เราใช้ `mobx` ร่วมกับ React Hook ได้ นอกจากนี้การใช้ `mobx` ยังช่วยให้ `data layer` กับ `ui` ของเราแยกการทำงานออกจากกันอย่างชัดเจนด้วยครับ หวังว่าเพื่อนๆจะได้ไอเดียใหม่ๆไปลองใช้ในโปรเจ็คของตัวเองกันนะครับ สุดท้ายนี้ถ้ามีอะไรผิดพลาดต้องขออภัยมา ณ ที่นี้ด้วยครับ ขอบคุณสำหรับการติดตาม **Happy Coding** ครับ :pray:
