import React from 'react'
import Check from './Check'
import styles from './Item.module.scss'
import cn from 'classnames'
import {BsTrash} from 'react-icons/bs'

const ToDoItem = ({todo, changeTodo, removeTodo}) => {
  return (
    <div className={styles.Item}>
        <button className={styles.ItemContent} onClick={() => changeTodo(todo.id)}>
          <Check isCompleted={todo.isCompleted}/>
          <span
          className={cn({
            [styles.complete]: todo.isCompleted,
          })}
          >
            {todo.title}
          </span>
        </button>

        <button className={styles.trashIcon} onClick={() => removeTodo(todo.id)}>
          <BsTrash size={22} />
        </button>
       
    </div>
  )
}

export default ToDoItem