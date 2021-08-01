import React, { useState } from 'react';

/* Components */
import Task from '../../components/task/Task'

let id = 0;

const CreateTask = () => {
    let handleTaskName = '';

    const [task, setTask] = useState([]);

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
        handleTaskName = '';
    }

    return (
        <div className="general-container">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => { handleTaskName = e.target.value }} />
                <input type="button" value="Crear" onClick={handleSubmit} />
            </form>

            {/* Mapear tareas (not done) */}
            <div>
                <ul>
                    {
                        task.map(nametask => {
                            return (
                                <li key={nametask.id}>
                                    <Task name={nametask.taskName} keyTask={nametask.id}/>
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