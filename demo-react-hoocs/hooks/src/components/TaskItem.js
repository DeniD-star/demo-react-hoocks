import React, { useEffect, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import styles from './TaskItem.module.css';

const TaskItem = ({
    task
}) => {

    const { taskDeleteHandler, toggleTask } = useContext(TaskContext);// v lu4aq value 6te mi e Pe6o, tova koeto sum dala kato default value v App.js

    //clean-up function, useEffect priema funkziq, koqto izvikva druga funkziq, 
    //koqto se izvikva samo vednuj, pri unmountvaneto na componenta(pri negovoto premahvane,iztrivane)
    useEffect(() => {
        console.log('Mounted');

        return () => {
            console.log('Unmounted');
        }
    }, []);

    const classNames = [
        task.isCompleted ? styles.completed : '',
        styles['task-item']
    ]
    return (
        <li>
            <span 
            className={classNames.join(' ')}
            onClick={()=>toggleTask(task)}
            >{task.title}</span>
            <button onClick={() => taskDeleteHandler(task._id)}>x</button>
        </li>

    )
}

export default TaskItem;