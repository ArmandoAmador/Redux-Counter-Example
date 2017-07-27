import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter.js'
import { createStore } from 'redux';

const counterReducer = function(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state;
  }
}

const rootEl = document.getElementById('root')
const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    increment={() => {store.dispatch({ type: 'INCREMENT'})}}
    decrement={() => {store.dispatch({ type: 'DECREMENT'})}}
  />,
  rootEl
)

render()

store.subscribe(render)



// pass this as a second argument to your store so that you can use redux chrome tool
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
