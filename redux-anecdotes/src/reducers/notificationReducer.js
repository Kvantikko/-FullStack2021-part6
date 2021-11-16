import { setTimer } from '../reducers/timerReducer' // for notifaction

const notificationReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':    
        return action.data.message
    case 'RESET_NOTIFICATION':
        return action.data.message
      default:
        return state
    }
  }

  export const setNotification = (message, time) => {
    return async dispatch => {
      const timer = setTimeout(() => {
        dispatch(dismissNotification())
        dispatch(setTimer(null))
      }, time * 1000) 
      dispatch(setTimer(timer))
      
      dispatch({
        type: 'SET_NOTIFICATION',
        data: { message }
      })
    }
  }

  export const dismissNotification = () => {
    return {
      type: 'RESET_NOTIFICATION',
      data: { message: null }
    }
  }
  export default notificationReducer