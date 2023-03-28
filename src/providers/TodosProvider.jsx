import { createContext, useContext, useState, useMemo } from "react" 
import { uid } from 'uid/secure';  

const ToDosContext = createContext();

export default function ToDosProvider({children}){
    
    const [todos, setTodos] = useState([]);

    function addTodo(todo){
        if (todo) setTodos([{
            id: uid(), 
            task: todo, 
            completed: false, 
            isEditing: false
        }, ...todos]);
    }

    function removeTodo(id){
        setTodos(todos.filter((todo) => id !== todo.id));
    }

    function handleComplete(id){
        setTodos(todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;
                return todo;
            }
            else{
                return todo;
            }
        }));
    }

    function useInterface(){
        return({
            todos: todos,
            setTodos: setTodos,
            addTodo: addTodo,
            handleComplete: handleComplete,
            removeTodo: removeTodo,
        });
    }

    return(
        <ToDosContext.Provider value={useInterface()}>
            {children}
        </ToDosContext.Provider>
    );
}

export function useToDosContext() {
    return useContext(ToDosContext);
}
