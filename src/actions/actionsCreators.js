
export const INCREMENT = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function increment(index){
    return {
        type: INCREMENT,
        index
    }
}

export function addComment (postId, author, comment){
    return  {
        type: ADD_COMMENT,
        postId,
        author,
        comment
    }
}

export function removeComment(postId, i){
    return{
        type: REMOVE_COMMENT,
        postId,
        i
    }
}