import { useState } from 'react'

import './App.css'

function App() {
  const [toDoList, setToDoList] = useState([])

let saveToDoList = (event) => {
  event.preventDefault()

  let toname = event.target.toname.value
  if (!toDoList.includes(toname)) {
    let finalTodoList = [...toDoList, toname]
    setToDoList(finalTodoList)
  } else {
    alert("ToDo name already exists")
  }
}

let list = toDoList.map((value, index) => {
  return (
    <ToDoListItems value={value} key={index} indexNumber = {index} toDoList={toDoList} setToDoList={setToDoList} />
  )
})

return (
  <div className='container'>
    <h1>ToDO List </h1>
    <h2>Enter Fruit List</h2>
    <form onSubmit={saveToDoList}>
      <input type="text" name="toname" /> <button>Save</button>
    </form>
    <div className='outerDev'>
      <ul>
        {list}
      </ul>
    </div>
  </div>
)

}
export default App;

function ToDoListItems ({value, indexNumber, toDoList, setToDoList}) {
  let [status,setStatus] = useState(false)
  let deleteRow = () => {
    let finalData = toDoList.filter((value, i) =>i!= indexNumber)
      console.log(value)
      setToDoList(finalData)
  }
  let checkstatus = () => {
    setStatus(!status)
  }

  return (
      <li className={status ? 'complettodo' : ''} onClick={checkstatus}> {indexNumber+1}{value}<span onClick={deleteRow}>&times;</span></li>
  )
}
