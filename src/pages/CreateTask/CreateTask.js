import React, { useState } from 'react';

/* Components */
import Task from '../../components/task/Task'

let id = 0;

const CreateTask = () => {
    let handleTaskName = '';

    const [task, setTask] = useState([{
        taskName: 'dormir',
        id: 234
    }]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask()

        id += 1;
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

    return (
        <div className="general-container">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => { handleTaskName = e.target.value }} />
                <input type="button" value="Crear" onClick={handleSubmit} />
            </form>

            {/* Mapear tareas (done) */}
            <div>
                <ul>
                    {
                        task.map(nametask => {
                            return (
                                <li key={nametask.id}>
                                    <Task name={nametask.taskName} onDelete={() => deleteTask(nametask.id)}/>
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