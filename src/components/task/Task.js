import React, { useState } from 'react'
import './Task-styles.css'

import { connect } from 'react-redux';
import { removeTask, updateTask } from '../../actions/actions'
import { Checkbox, Button, Input } from '@mui/material'
import { CheckCircle, CheckCircleOutline, Delete, Save  } from '@mui/icons-material';

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
                    <Input 
                        className="inputTaskContainer__input"
                        color="secondary"
                        defaultValue={newTaskName} 
                        onChange={(e) => handleName = e.target.value} 
                    />
                </div>
            )
        }

        if (crossedOut) {
            taskNameClassValue += ' crossedOutText'
        }

        return (
            <p className={taskNameClassValue} onClick={() => setEditing(true)}>
                {name}
            </p>
        )
    }

    function EditTaskButton() {
        if (editing) {
            return (
                <Button
                    size="small"
                    variant="text"
                    sx={{
                        color: 'white'
                    }}
                    startIcon={<Save />}
                    onClick={() => saveNewTaskName()}
                >
                    Guardar
                </Button>
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
            <Checkbox 
                color="success"
                icon={<CheckCircleOutline />}
                checkedIcon={<CheckCircle />}
                onChange={() => {crossedOut ? setCrossedOut(false) : setCrossedOut(true)}} 
            />
            <TaskName />
            <div className="buttons">
                {/* <button onClick={() => removeTask(idTask)}>Borrar</button> */}
                <Button
                    size="small"
                    startIcon={<Delete />}
                    variant="text"
                    color="secondary"
                    sx={{
                        color:"white",
                    }}
                    onClick={() => removeTask(idTask)}
                >
                    Delete
                </Button >
                <EditTaskButton  />
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeTask,
    updateTask,
}

export default connect(null, mapDispatchToProps)(Task);