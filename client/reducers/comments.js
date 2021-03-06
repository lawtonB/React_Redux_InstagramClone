//reducer composition example
function postComments(state=[], action) {
  switch(action.type) {
    case 'ADD_COMMENT' :
    //return existing state and new comment
    return [...state, {
      user: action.author,
      text: action.comment
    }];
    case 'REMOVE_COMMENT':
    //return state without deleted comment
    return [
      //from the start to the one we want to delete
      ...state.slice(0,action.i),
      //after the deleted comment to the end
      ...state.slice(action.i + 1)
    ]
    default:
      return state
  }
}

function comments(state=[], action) {
  if(typeof action.postId !== 'undefined'){
    return {
      //take current state
      ...state,
      //overwrite this post with a new one. [action.postId] is the key, the value is sub piece of state
      [action.postId]: postComments(state[action.postId], action)
      }
    }
    return state;
  }

export default comments;
