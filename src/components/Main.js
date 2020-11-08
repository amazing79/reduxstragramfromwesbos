import React  from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
//import components
import PhotoGrid from './PhotoGrid'
import Single from './Single'

const Main = (props) => {
    return (
        <div>
              <Router >
                <h1>
                    <Link to="/">ReduxStragram</Link>
                </h1>
                <Switch>
                    <Route path="/view/:postId">
                        <Single {...props} />
                    </Route>
                    <Route path="/" >
                        <PhotoGrid {...props} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main
