//a reducer takes in action and copy of current state (store) and returns updated store

//set state to empty array for first time
export default function posts(state=[], action) {
  switch(action.type){
    case 'INCREMENT_LIKES' :
    const i = action.index;
    return [
      ...state.slice(0,i), //before updated post
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1), //after updated post

    ]
    default:
    return state
  }
}
