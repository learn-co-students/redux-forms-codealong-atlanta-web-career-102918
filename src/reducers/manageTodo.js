export default function manageTodo(state = {
  todos: [],
}, action) {
  switch(action.type){
    case "ADD_TODO":
      return { todos: state.todos.concat(action.paylod.text) };
    default: 
      return state
  }
 

  return state;
}
