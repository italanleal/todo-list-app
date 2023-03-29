import { useToDosContext } from '../providers/TodosProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ToDoList(){
    const { todos, setTodos, handleComplete, removeTodo } = useToDosContext();

   
    return (
        <div className="list-container">
            {todos.map((todo) => {
                return(
                    <div className="todo-items" key={todo.id}>
                        <div className='todo-text'>
                            <p 
                            onClick={() => handleComplete(todo.id)}
                            className={`${todo.completed ? "completed": ""}`}
                            >{todo.task}</p>
        
                        </div>
                        <div className="todo-icons">
                            <FontAwesomeIcon 
                            icon={faTrash} 
                            onClick={() => removeTodo(todo.id)}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

