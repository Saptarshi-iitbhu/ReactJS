import { useEffect, useState } from "react";
import { ToDoProvider } from "./Context/ToDoContext";
import { ToDoForm } from "./Components";

function App() {
  
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos((prev)=>[...prev, {id: Date.now(), ...todo}]);;
  }

  const updateToDo = (id, newTodo) => {
    setTodos((prev)=> prev.map((todo)=>(todo.id === id ? newTodo : todo)));
  }

  const removeToDo = (id) => {
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id));
  }

  const toggleToDo = (id) => {
    setTodos((prev)=> prev.map((todo)=>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length){
      setTodos(todos);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  return (
    <ToDoProvider value={{todos, updateToDo, removeToDo, toggleToDo, addToDo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <ToDoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {todos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <ToDoItem todo={todo} />
                  </div>
                ))}
            </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
