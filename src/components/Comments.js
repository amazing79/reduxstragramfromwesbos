import React, {useState} from 'react'
import RenderComment from './RenderComment'

const initComment = {
  author:'',
  comment: ''
}

const Comments = (props) => {

  const [ userComment , setUserComment ] = useState(Object.assign({}, initComment));

  function _handleSubmit(e){
    e.preventDefault();
    const author = userComment.author;
    const comment = userComment.comment;

    props.addComment(props.postId, author, comment);
    _clearFormData();
  }

  function _clearFormData(){
    setUserComment(Object.assign({}, initComment));
  }

  return (
    <div className="comments">
        {props.postComments.map( (userComment, idx) =>  <RenderComment key={idx}  i={idx} postId={props.postId} removeComment={props.removeComment} {...userComment } /> )}
        <form name="commentForm" className="comment-form" onSubmit={e => _handleSubmit(e)}>
          <input type="text" name="author" placeholder="author"
            value={userComment.author}
            onChange={ e => setUserComment({...userComment, author: e.target.value})}
          />
          <input type="text" name="comment" placeholder="comment"
             value={userComment.comment}
             onChange={ e => setUserComment({...userComment, comment: e.target.value})}
          />
          <input type="submit" hidden />
        </form>
      </div>
  )
}

export default Comments