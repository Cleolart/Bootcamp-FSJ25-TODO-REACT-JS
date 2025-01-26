
import { useEffect, useState } from "react";
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "../services/DbService";
import TodoItem from "../components/TodoItem.jsx";
import AddTodo from "../components/AddTodo.jsx";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [editing, setEditing] = useState({name: '', id: '', done: false});

    const refreshData = () => {
        setTodos([]);
        fetchTodos().then((todos) => setTodos(todos));
    }

    useEffect(() => {    
        fetchTodos().then((todos) => setTodos(todos));
        console.log(todos);
    }, []);

    const onCheck = (item) => {
        updateTodo(item);
    }

    const updateTodoItem = (e) => {
        updateTodo(editing)
        refreshData();
    }

    const deleteTodoItem = (e) => {
        deleteTodo(editing)
        refreshData();
    }

    const saveTodo = (name) => {
        addTodo({name, done: false});
        refreshData();
    }

    const onEditItem = (item) => {
        setEditing(item);
    }

    return (
        <>
            <div className="container">
            <h1>Ejercicios TODO</h1>
            <AddTodo onAddTodo={saveTodo} />
            <h3>TODOS</h3>
            <ul className="list-group rounded-0">
                {todos.map((todo, i) => (
                    <TodoItem key={i} onCheckItem={onCheck} onEdit={onEditItem} onDelete={onEditItem} todoItem={todo}></TodoItem>
                ))}
              </ul>
            </div>


            <div className="modal fade" id="deleteModal" >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Eliminar {editing?.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ¿Realmente desea eliminar?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={ deleteTodoItem }>Eliminar</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editModal" >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar {editing?.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" value={editing.name} onChange={ (e) => setEditing({name: e.target.value, id: editing.id, done: editing.done}) } />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={ updateTodoItem }>Guardar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;