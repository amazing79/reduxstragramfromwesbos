import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

const Photo = (props) => {

    const { display_src, caption, likes, code } = props.post;
    const { comments } = props;
    const [ showAnim, setShowAnim] = useState(false);
 
    function updateStore(value){
      setShowAnim(!showAnim)
      props.increment(value);
    }

    return (
        <figure className="grid-figure" >
            <div className="grid-photo-wrap">
                <Link to={`/view/${code}`} >
                    <img src={display_src} alt={caption} className="grid-photo" />
                </Link>
                  <CSSTransition 
                    in={showAnim}
                    classNames="likes-heart" 
                    timeout={500}
                    unmountOnExit
                    onEntered={() => setShowAnim(false)}
                    >
                      <span key={likes} className="likes-heart">{likes}</span>
                  </CSSTransition>
            </div>
            <figcaption>
          <p>{caption}</p>
          <div className="control-buttons">
            <button onClick={() => updateStore(props.i)} className="likes">&hearts; {likes}</button>
            <Link className="button" to={`/view/${code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>&nbsp;
                {comments[code] ? comments[code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>
        </figure>
    )
}

export default Photo