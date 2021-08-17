import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    tasks: []
};

const todoReducer = createReducer(initialState, (builder => {
    builder
        .addCase('ADD_TASK', (state, action) => {
            state.tasks.push(action.payload)
        })
        .addCase('REMOVE_TASK', (state, action) => {
            return {tasks: state.tasks.filter(element => element.id !== action.payload)}
        })
        .addCase('UPDATE_TASK', (state, action) => {
            state.tasks.find(element => element.id === action.payload.id).name = action.payload.name
        })
}))

export default todoReducer

// state.tasks.slice(action.payload.id, 1, action.payload)