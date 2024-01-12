import { useState, useEffect } from "react"
 const url = `http://localhost:3001`
function App() {
const [todos,setTodos] = useState([]);
const [pop,setPop] = useState(false);
const [newt,setNew] = useState("");


useEffect(()=>{
  GetTodos();
  console.log(todos);
},[])

const GetTodos = ()=>{
    fetch(url+`/todos`)
    .then(res=>res.json())
    .then(data=>setTodos(data))
    .catch(err=> console.log(err))
}

  return (
    <div className=" App font-light font-mono bg-slate-900 text-slate-200 w-screen h-screen ">
        <h1 className=" text-5xl pl-5 pb-2 pt-5 flex justify-center">dailytasker</h1>
        <h1 className=" text-5xl pl-5 pb-2 pt-2 flex justify-center text-slate-400">Shop</h1>
        <h4 className=" text-3xl m-5 flex justify-start text-slate-500">Your tasks</h4>

        <div className=" flex justify-center">
        <div className="todo bg-gray-800 p-4 m-4  rounded-lg relative flex  hover:bg-gray-600 duration-500 cursor-pointer">
        <div className="checkbox w-5 h-5 bg-neutral-500 mr-4 duration-1000 rounded-lg"></div>

            <div className="text"> more and more</div>
            <div className="delete-todo ml-6 w-5 h-5 bg-red-600 rounded-lg pl-1">x</div>
        </div>
        </div>
        <div className="flex justify-center todo-done">
        <div className="todo bg-gray-800 p-4 m-4  rounded-lg relative flex  hover:bg-gray-600 duration-500 cursor-pointer">
        <div className="checkbox w-5 h-5 bg-neutral-500 mr-4 duration-1000 rounded-lg"></div>

            <div className="text"> more and more</div>
            <div className="delete-todo ml-6 w-5 h-5 bg-red-600 rounded-lg pl-1">x</div>
        </div>
        </div>
        <div className=" flex justify-center">
        <div className=" todo bg-gray-800 p-4 m-4  rounded-lg relative flex  hover:bg-gray-600  duration-500 cursor-pointer">
        <div className="checkbox w-5 h-5 bg-neutral-500 mr-4 duration-1000 rounded-lg"></div>

            <div className="text"> more and more</div>
            <div className="delete-todo ml-6 w-5 h-5 bg-red-600 rounded-lg pl-1">x</div>
        </div>
        </div>
        <div className=" flex justify-center">
        <div className="todo bg-gray-800 p-4 m-4  rounded-lg relative flex  hover:bg-gray-600 duration-500 cursor-pointer">
            <div className="checkbox w-5 h-5 bg-neutral-500 mr-4 duration-1000 rounded-lg"></div>

            <div className="text"> more and more</div>
            <div className="delete-todo ml-6 w-5 h-5 bg-red-600 rounded-lg pl-1">x</div>
        </div>
        </div>
        </div>
        
        
    
   

    
	
  )
}

export default App
