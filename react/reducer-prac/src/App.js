import React, { useReducer,useState } from 'react';
import Todos from './todos';

export const ACTIONS={
  ADD_TODO:'add_todo',
  DELETE_TODO:'delete_todo',
  TOGGLE_TODO:'toggle_todo'

}
function reducer(todos, action){
  switch(action.type)
  {
    case ACTIONS.ADD_TODO:
      return [...todos,newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
        return todos.map(todo=>{
        if(todo.id === action.payload.id){
          return {...todo,completed: !todo.completed}
        }
        return todo
      })
    
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo=>(todo.id !== action.payload.id))
    default:
      return todos;
  }
}
const newTodo=(name)=>{
  return {id:Date.now(),name:name,completed:false}
}
function App(){
  const [todos,dispatch]=useReducer(reducer,[]);
  const [name,setName]=useState('');
  function handleSubmit(e){
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO,payload:{name:name}});
    setName('');
  }
  return(
      <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button type="submit">Submit</button>
        {todos.map(todo=>{
          return <Todos key={todo.id} todo={todo} dispatch={dispatch}/>
        })
      }
        
      </form>
      </>
    );
}
    
export default App;
