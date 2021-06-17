import React from 'react'
import './Task-styles.css'

function Task({name}) {
    return (
        <div className="task-container">
            <div className="task-name">
                {name}
            </div>
            <div className="buttons">
                <button>Borrar</button>
                <button>Editar</button>
            </div>
        </div>
    )
}

export default Task;