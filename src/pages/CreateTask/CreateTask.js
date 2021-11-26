import React, {createRef } from 'react';

import { connect } from 'react-redux';
import { addTask } from '../../actions/actions'

/* Components */
import Task from '../../components/task/Task'
import { Button, TextField } from '@mui/material'

/* Styles */
import './CreateTask-styles.css'

let id = 0;

const CreateTask = ({ tasks, addTask }) => {
    let handleTaskName = '';

    let textinput = createRef()

    const handleSubmit = (e) => {
        e.preventDefault();
         
        const newTask = {
            name: handleTaskName,
            id: id
        }

        if(handleTaskName !== ''){
            addTask(newTask)
        }
        
        id += 1;
        
        textinput.current.value = ''
    }

    // const addTask = () => {

    //     const newTask = {
    //         taskName: handleTaskName,
    //         id: id
    //     }

    //     setTask([...task, newTask]);
    // }

    // const deleteTask = (nameTaskId) => {

    //     let filteredTaskState = task.filter(element => element.id !== nameTaskId)
    //     console.log(filteredTaskState)
    //     // console.log('borrando tarea...');

    //     // setTask(filteredTaskState)
    // }

    // const editTask = (keyId) => {
    //     console.log('edit task working')
    //     console.log(keyId);

    //     let taskToEdit = task.filter(element => element.id === keyId)
    //     console.log(taskToEdit)

    //     taskToEdit.taskName = <input type="text" />
    // }

    return (
        <div className="todo">
            <form onSubmit={handleSubmit} className="todo__form">
                <TextField
                    className="todo__form--text-input"
                    // type="text"
                    color="secondary"
                    variant="standard"
                    label="Inserte el nombre su tarea"
                    ref={textinput}
                    onChange={(e) => { handleTaskName =  e.target.value }}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        color: 'white',
                        height: 35,
                    }}
                    size="small"
                    type="submit"
                    value="Crear"
                    onClick={handleSubmit}
                >Crear</Button>
            </form>

            {/* Mapear tareas (done) */}
            <div className="todo__task-container">
                <ul>
                    {
                        tasks.map(nametask => {
                            return (
                                <li key={nametask.id}>
                                    <Task name={nametask.name} idTask={nametask.id} />
                                    {/* <button onClick={() => {console.log('editar')}}>editar tarea temporal</button> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
}

const mapDispatchToProps = {
    addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);