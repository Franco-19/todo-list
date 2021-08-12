import React from 'react'
import './Task-styles.css'

import { connect } from 'react-redux';
import { removeTask } from '../../actions/actions'

function Task({ name, idTask, removeTask}) {

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
                <button onClick={() => removeTask(idTask)}>Borrar</button>
                <button onClick={() => console.log('editar')}>Editar</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeTask
}

export default connect(null, mapDispatchToProps)(Task);