const timerReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_TIMER':
      return action.data.timer
    case 'RESET_TIMER':
      clearTimeout(state)
      return action.data.timer
    default:
      return state
  }
}
  
export const setTimer = (timer) => {
  return {
    type: 'SET_TIMER',
    data: { timer }
  }
}

export const resetTimer = () => {
  return {
    type: 'RESET_TIMER',
    data: { timer: null }
  }
}
  
export default timerReducer