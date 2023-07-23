import React from 'react'
import {BsCheck} from 'react-icons/bs'
import styles from './Item.module.scss'

const Check = ({isCompleted}) => {
  return (
    <div className={styles.checkBox}>
        {isCompleted &&
        <BsCheck size={24} 
        className={styles.check}/>
        }
    </div>
  )
}

export default Check