import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducer from '../reducers'

export default createStore(Reducer, composeWithDevTools(applyMiddleware()))
