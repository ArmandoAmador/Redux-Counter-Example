import React from 'react'
import ReactDOM from 'react-dom'

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <div>
    0
  </div>,
  rootEl
)

render()



// pass this as a second argument to your store so that you can use redux chrome tool
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
