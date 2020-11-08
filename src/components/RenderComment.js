import React from 'react'

const RenderComment = (props) => {

    const { user, text, postId } = props
    
    return (
        <div className="comment" key={props.i}>
            <p>
            <strong>{user}</strong>
            {text}
            <button onClick={() => props.removeComment(postId, props.i)} className="remove-comment" >
                &times;
            </button>
            </p>
      </div>
    )
}

export default RenderComment