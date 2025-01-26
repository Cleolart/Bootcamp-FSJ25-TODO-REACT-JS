import database from "../configs/Configuration.jsx";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";

export const fetchTodos = async () => {
    const colecctionRef = collection(database, 'todos');
    const querySnapshot = await getDocs(colecctionRef);
    const todos = [];
    querySnapshot.forEach(doc => {
        const data = doc.data();
        data.id = doc.id;
        todos.push(data);
    });
    console.log(todos)
    return todos;
}


export async function addTodo(item) {
    await addDoc(collection(database, 'todos'), item);
}

export const updateTodo = async (item) => {
    await updateDoc(doc(database, `todos/${item.id}`), item);
}

export const deleteTodo = async (item) => {
    await deleteDoc(doc(database, `todos/${item.id}`));
}