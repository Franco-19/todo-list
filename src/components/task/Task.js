import React from 'react'
import './Task-styles.css'

function Task({ name, onDelete}) {

    // function deleteTask (nameTaskId) {
    //     console.log(actualState)    

    //     let filteredTaskState = actualState.filter(element => element.id !== nameTaskId)
    //     console.log(filteredTaskState)

    //     propSetState(filteredTaskState)
    // }

    return (
        <div className="task-container">
            <div className="task-name">
                {name}
            </div>
            <div className="buttons">
                <button onClick={onDelete}>Borrar</button>
                <button>Editar</button>
            </div>
        </div>
    )
}

export default Task;