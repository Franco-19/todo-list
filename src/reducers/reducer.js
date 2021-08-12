const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {tasks: [...state.tasks, action.payload]}
        
        case 'REMOVE_TASK':
            return {tasks: state.tasks.filter(element => element.id !== action.payload)}
        
        default:
            return state;
    }
}

export default reducer