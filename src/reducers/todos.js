import * as Actions from "../constants/ActionTypes";

const initialState = [
  {
    text: "Rob Bogan was here!",
    completed: false,
    id: 0
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      console.log(action);
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        }
      ];
    case Actions.COMPLETE_TODO:
      console.log(action);
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case Actions.EDIT_TODO:
      console.log(action); 
      return state.map(
        todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)
      );
    default:
      return state;
  }
}