/* With the help of this reducer, 
   the notification always stays up the right amount of time (5 secs), 
   and doesnt vanish too quickly if user clicks the vote buttons fast.
   The timer is cleared and set again everytime a new vote is submitted.
*/

const timerReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_TIMER':
      clearTimeout(state)
      return action.data
    default:
      return state
  }
}
  
export const setTimer = (timer) => {
  return {
    type: 'SET_TIMER',
    data: timer
  }
}
  
export default timerReducer