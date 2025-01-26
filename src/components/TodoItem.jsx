import { useEffect, useState } from "react";


function TodoItem({todoItem, onCheckItem, onEdit, onDelete}) {

    const [isDone, setIsDone] = useState(todoItem.done ?? false);

    useEffect(() => {
        todoItem.done = isDone;
        onCheckItem(todoItem);
    }, [isDone]);

    const toggle = (e) => {
        setIsDone(!isDone);
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <label>
                    <input className="form-check-input me-3" onChange={toggle} type="checkbox" value="true" checked={isDone} />
                    {todoItem.name}
                </label>

                <span>
                    <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editModal" onClick={(e) => onEdit(todoItem)}>
                        <i className="bi bi-pen"></i>
                    </button>
                    &nbsp;
                    <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={(e) => onDelete(todoItem)}>
                        <i className="bi bi-trash"></i>
                    </button>
                </span>
            </li>
        </>
    );
}

export default TodoItem;