// let's go!
import React from 'react';
import ReactDOM from 'react-dom'

//Import components
import App from './components/App'

import { Provider } from 'react-redux'
import store from './store' 

const routerApp = (
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(
  routerApp, 
  document.getElementById('root')
);