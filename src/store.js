import { createStore, compose } from 'redux'
//import { syncHistoryWithStore } from 'react-router-redux'
//import { browserHistory } from 'react-router-dom'

import rootReducer from './reducers/index'
// Mock info
import comments from './data/comments'
import posts from './data/posts'
// para habilitar Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    posts,
    comments
}

const store = createStore(rootReducer, initialState, composeEnhancers());

//export const history = syncHistoryWithStore(browserHistory, store);

export default store;
