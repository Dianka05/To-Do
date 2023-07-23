import React, { useState } from 'react'
import styles from '../item/Item.module.scss'

const CreateTodoField = ({setTodos}) => {

    const[title, setTitle] = useState('');


    const addTodo = ( title ) =>{
        if (!title) {
            return; 
          }
        setTodos(prev => [
            {
                id: new Date(),
                title,
                isCompleted: false,
                },
                ...prev,
        ])
        setTitle('');
    }

    return (
        <div className={styles.InputParent}>
            <button className={styles.addTaskBth} onClick={() => addTodo(title)}>+</button>
            <input type='text' onChange={e => setTitle(e.target.value)}
            value={title}
            placeholder='Add a task'
            onKeyDown={e => e.key === 'Enter' && addTodo(title)}
            />
        </div>
    )
}

export default CreateTodoField