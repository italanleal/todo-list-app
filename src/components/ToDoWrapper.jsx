import ToDosProvider from "../providers/TodosProvider";
import ToDoForm from "./ToDoForm"
import ToDoList from "./ToDoList";

export default function ToDoWrapper(){
    return(
        <>
            <h1>Get Things Done!</h1>
            <ToDosProvider>
                <ToDoForm />
                <ToDoList />
            </ToDosProvider>
        </>
    );
}