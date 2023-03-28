import { useState, useEffect } from 'react'
import { useToDosContext } from '../providers/TodosProvider';

export default function ToDoForm(){
    
    
    const [todo, setTodo] = useState("");
    const { todos, setTodos, addTodo } = useToDosContext();
    
    function handleChange(event){
        setTodo(event.target.value); 
    }
    
    function handleSubmit(event){
        event.preventDefault();
        addTodo(todo);
        setTodo("");
    }

    useEffect(() => {
        let arrcpy = todos;
        console.log(arrcpy);
        console.log(arrcpy.map(todo => {
            if(todo.id === "956d6443f0a"){
                todo.completed = !todo.completed;
                return todo;
            }
            else return todo;
        }));

    }, [todos]);

    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-form">
                <div className="input-container">
                    <label htmlFor="todo-input">
                        <input 
                        id="todo-input"
                        className="todo-input"
                        placeholder="What is the task today?"
                        autoComplete='off'
                        value={todo} 
                        onChange={handleChange}
                        type="text" /></label>
                </div>
                <div className="button-container">
                    <button type="submit" className="submit-button">Add Task</button>

                </div>
            </div>
        </form>
    );
}


