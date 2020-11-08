import React from 'react'
import Photo from './Photo'

const PhotoGrid = (props) => {
return (
    <div className="photo-grid">
        {props.posts.map((aPost, idx)=> 
         <Photo {...props} key={idx} i={idx} post={aPost} /> )
        }
    </div>
)
}

export default PhotoGrid
