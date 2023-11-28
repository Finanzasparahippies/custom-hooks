import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";



const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
 
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem( 'todos', JSON.stringify( todos ) );
    
    }, [todos])
    
  
    const handleNewTodo = ( todo ) => {
      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }
      dispatch( action );
    }
  
    const handleDeleteTodo = ( id ) => {
    //  console.log( {id} )
      dispatch ({
        type: '[TODO] Delete Todo',
        payload: id
      })
    }
  
    const handleToggleTodo = ( id ) => {
      // console.log( {id} );
      dispatch ({
        type: '[TODO] Toggle Todo',
        payload: id
      })
    }

    return {
      todos,

      todosCount: todos.length,
      pendingTodoCount: todos.filter(todo => !todo.done).length,

      handleNewTodo,
      handleDeleteTodo,
      handleToggleTodo
    }
    
}
