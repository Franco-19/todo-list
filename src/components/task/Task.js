import React, { useState } from 'react'
import './Task-styles.css'

import { connect } from 'react-redux';
import { removeTask, updateTask } from '../../actions/actions'

function Task({ name, idTask, removeTask, updateTask }) {

    const [editing, setEditing] = useState(false)

    // guardar estado localmente para luego enviarlo a la store

    const [newTaskName, setNewTaskName] = useState(name)

    let handleName = name

    const saveNewTaskName = () => {
        setNewTaskName(handleName)

        let dataToUpdate = {
            name: handleName,
            id: idTask
        }

        console.log(dataToUpdate)
        updateTask(dataToUpdate)

        setEditing(false)

    }

    function TaskName() {
        if (editing) {
            return (
                <div>
                    <input type="text" defaultValue={newTaskName} onChange={(e) => handleName = e.target.value} />
                </div>
            )
        }
        return (
            <div className="task-name" onClick={() => setEditing(true)}>
                {name}
            </div>
        )
    }

    function EditTaskButton() {
        if (editing) {
            return (
                <button onClick={() => saveNewTaskName() /* Enviar info a redux (not done)*/} >Guardar</button>
            )
        }
        return (
            <button onClick={() => setEditing(true)}>Editar</button>
        )
    }

    return (
        <div className="task-container">
            <TaskName />
            <div className="buttons">
                <button onClick={() => removeTask(idTask)}>Borrar</button>
                <EditTaskButton />
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeTask,
    updateTask,
}

export default connect(null, mapDispatchToProps)(Task);