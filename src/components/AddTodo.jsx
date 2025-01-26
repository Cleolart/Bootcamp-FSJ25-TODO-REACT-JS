import { useState } from "react";

function AddTodo({onAddTodo}){

    const [name, setName] = useState('');


    const onNameTodo = (e) => {
        setName(e.target.value.trim());
    }

    const saveTodo = () => {
        if(name != ""){
            onAddTodo(name);
            setName('');
        }
    }

    return (
        <div className="input-group mb-3">
            <input value={name} type="text" className="form-control" placeholder="TODO" onChange={onNameTodo} />
            <button className="btn btn-outline-secondary" type="button" onClick={saveTodo}>Guardar</button>
        </div>
    );
}

export default AddTodo;