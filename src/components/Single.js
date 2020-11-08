import React from 'react'
import Photo from './Photo'
import Comments from './Comments'
import { useParams } from 'react-router-dom'

const Single = (props) => {

    const { postId: code } = useParams();
    const idx = props.posts.findIndex( post => post.code === code);
    const _aPost = props.posts[idx];
    const _comments = props.comments[code] || []

    return (
       <div className="single-photo">
          <Photo i={idx} post={_aPost} {...props} />
          <Comments postComments={_comments} postId={code} {...props} />
       </div>
    )
}

export default Single
