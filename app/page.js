"use client"
import React, { useState } from "react";

const page = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const [mainTask, setMainTask] = useState([])
  // const [mainDesc,setmainDesc] = useState([])

  // PREVENT DEFAULT THIS IS AN INBUILT METHOD JO RELOAD KO ROK DETA HAI
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]) // here we are usind spread operator 
    setTitle("")
    setDesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }


  let renderTask = <h2>No Task Available !</h2>

  if (mainTask.length>0) {
    renderTask = mainTask.map((t, i) => {
      return <li key={i} className="flex items-center justify-between">
        <div className="flex items-center justify-between w-2/3">
          <h5>{t.title}</h5>
          <h6>{t.desc}</h6>
        </div>
        <button onClick={()=>{
          deleteHandler(i)
        }} className="bg-red-600 text-white rounded p-3">Delete</button>
      </li>
    })
  }

  return (
    <>
      <h1 className="bg-black text-white p-10 text-3xl text-center">Sohail's Todo List</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter the Title"
          className="text-2xl border-zinc-800 border-2 m-5  p-2 rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <input
          type="text"
          placeholder="Enter the Description"
          className="text-2xl border-zinc-800 border-2 m-5 p-2 rounded"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />

        <button className="bg-black text-white text-2xl rounded mt-5 p-2">Add Task</button>
      </form>

      <hr />

      <div className="p-8 m-5 bg-slate-200">
        {renderTask}
      </div>
    </>
  )
}

export default page