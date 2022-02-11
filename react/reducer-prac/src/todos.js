import React from 'react';
import { ACTIONS } from './App';
function Todos ({ todo, dispatch }) {
    return (
        <div>
            <span style={{ color: todo.completed ? '#AAA' : '#000' }}>{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
        </div>
    );
}

export default Todos;
