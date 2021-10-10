import React, { useState } from 'react'
import './Task-styles.css'

import { connect } from 'react-redux';
import { removeTask, updateTask } from '../../actions/actions'
import Checkbox from '@mui/material/Checkbox'
// import Done from '@mui/icons-material/Done'
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material';

function Task({ name, idTask, removeTask, updateTask }) {

    const [editing, setEditing] = useState(false)
    const [crossedOut, setCrossedOut] = useState(false)

    // guardar estado localmente para luego enviarlo a la store

    const [newTaskName, setNewTaskName] = useState(name)

    let handleName = name;
    let taskNameClassValue = "task-name";

    const saveNewTaskName = () => {
        setNewTaskName(handleName)

        let dataToUpdate = {
            name: handleName,
            id: idTask
        }

        updateTask(dataToUpdate)

        setEditing(false)
    }

    function TaskName() {
        if (editing) {
            return (
                <div className="inputTaskContainer">
                    <input className="inputTaskContainer__input" type="text" defaultValue={newTaskName} onChange={(e) => handleName = e.target.value} />
                </div>
            )
        }

        if (crossedOut) {
            taskNameClassValue += ' crossedOutText'
        }

        return (
            <div className={taskNameClassValue} onClick={() => setEditing(true)}>
                {name}
            </div>
        )
    }

    function EditTaskButton() {
        if (editing) {
            return (
                <button onClick={() => saveNewTaskName()} >Guardar</button>
            )
        }
        return (
            // <button onClick={() => setEditing(true)}>Editar</button>
            <div>
                
            </div>
        )
    }

    return (
        <div className="task-container">
            <Checkbox color="success" icon={<CheckCircleOutline />} checkedIcon={<CheckCircle />} onChange={() => {crossedOut ? setCrossedOut(false) : setCrossedOut(true)}} />
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