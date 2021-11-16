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

  export const setNotification = message => {
    return {
      type: 'SET_NOTIFICATION',
      data: { message }
    }
  }

  export const dismissNotification = () => {
    return {
      type: 'RESET_NOTIFICATION',
      data: { message: null }
    }
  }
  export default notificationReducer