import React from 'react';

/* Components */
import Task from '../../components/task/Task'


const CreateTask = () => {
    return (
        <div className="general-container">
            <input type="text" onChange={(e) => { console.log(e.target.value); }} />
            <Task name="dormir" />
            <button>Crear</button>
        </div>
    )
}

export default CreateTask;