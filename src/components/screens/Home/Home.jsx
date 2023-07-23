import React, { useState } from 'react'
import styles from './Home.module.scss'
import ToDoItem from './item/ToDoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
  {
    id: 1,
    title: 'Finish the first todo app',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Add Design to my todo app',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Some rest',
    isCompleted: false,
  },
]

const Home = () => {

  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find(t => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  }

  const removeTodo = id => {
    setTodos([...todos].filter(t => t.id != id));
  }

  return (
    <div className={styles.toDoList}>
        <h1 className={styles.title}>To Do List</h1>
        {todos.map(todo => (
          <ToDoItem key={todo.id} 
          todo={todo} 
          changeTodo={changeTodo} 
          removeTodo={removeTodo}
          />
        ))}

        <CreateTodoField setTodos={setTodos}/>
    </div>
  )
}

export default Home