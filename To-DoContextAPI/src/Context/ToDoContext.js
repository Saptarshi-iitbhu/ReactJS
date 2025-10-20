import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "ToDo msg",
            completed: false
        }, 
    ],
    addToDo: (todo) => {},
    updateToDo: (id, newTodo) => {},
    removeToDo: (id) => {},
    toggleToDo: (id) => {},
});

export const useToDo = () =>{
    return useContext(TodoContext);
}

export const ToDoProvider = TodoContext.Provider;