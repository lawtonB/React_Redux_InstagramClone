//increment like
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment
export function addComment(postId, author, comment) {
  console.log('dispatching');
  return {
    type: 'ADD_COMMENT',
    postId: postId,
    author: author,
    comment: comment
  }
}

//remove comment
export function removeComment(postId, i) {
  return {type: 'REMOVE_COMMENT',
  i: i,
  postId: postId
  }
}
