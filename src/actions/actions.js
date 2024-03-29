const actions = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
}

export const addTask = (text) => {
    return {
        type: actions.ADD_TASK,
        payload: text,
    }
}

export const removeTask = (id) => {
    return {
        type: actions.REMOVE_TASK,
        payload: id,
    }
}

export const updateTask = (newUpdatedTask) => {
    return {
        type: actions.UPDATE_TASK,
        payload: newUpdatedTask,
    }
}