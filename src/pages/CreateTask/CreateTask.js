import React, { useState } from 'react';

/* Components */
import Task from '../../components/task/Task'

/* Styles */
import './CreateTask-styles.css'

let id = 0;

const CreateTask = () => {
    let handleTaskName = '';
    let inputValue = handleTaskName;
    
    const [task, setTask] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask()

        id += 1;

        e.target.reset();
    }

    const addTask = () => {

        const newTask = {
            taskName: handleTaskName,
            id: id
        }

        setTask([...task, newTask]);
    }

    const deleteTask = (nameTaskId) => {
        console.log(task)

        let filteredTaskState = task.filter(element => element.id !== nameTaskId)
        console.log(filteredTaskState)
        // console.log('borrando tarea...');

        setTask(filteredTaskState)
    }

    const editTask = (keyId) => {
        console.log('edit task working')
        console.log(keyId);

        let taskToEdit = task.filter(element => element.id === keyId)
        console.log(taskToEdit)

        taskToEdit.taskName = <input type="text" />
    }

    return (
        <div className="todo">
            <form onSubmit={handleSubmit} className="todo__form">
                <input className="todo__form--text-input" type="text" placeholder="Inserte el nombre su tarea" onChange={(e) => { handleTaskName = e.target.value }} />
                <input className="button-primary" type="reset" value="Crear" onClick={handleSubmit} />
            </form>

            {/* Mapear tareas (done) */}
            <div>
                <ul>
                    {
                        task.map(nametask => {
                            return (
                                <li key={nametask.id}>
                                    <Task name={nametask.taskName} onDelete={() => deleteTask(nametask.id)} onEdit={() => editTask(nametask.id)} />
                                    {/* <button onClick={() => {deleteTask(nametask.id)}}>borrar tarea temporal</button> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CreateTask;