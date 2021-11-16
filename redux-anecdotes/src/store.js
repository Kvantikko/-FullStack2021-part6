import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import timerReducer from './reducers/timerReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    timer: timerReducer,
    filter: filterReducer
  })

const store = createStore(
    reducer, 
    composeWithDevTools()
)

export default store