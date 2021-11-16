import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return sort(action.data)
    case 'VOTE':
      const voteAnecdote = action.data
      return sort(
        state.map(anecdote =>
          anecdote.id !== voteAnecdote.id ? anecdote : voteAnecdote)
      )
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    default:
      return state
  }
}

const sort = array =>
  array.sort((a, b) => {
    return b.votes - a.votes
  })

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const vote = (id) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdoteToLike = anecdotes.find(a => a.id === id)
    const changedAnecdote = { ...anecdoteToLike, votes: anecdoteToLike.votes + 1}
    const updatedAnecdote = await anecdoteService.update(id, changedAnecdote)
    
    dispatch({
      type:'VOTE',
      data: updatedAnecdote
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote 
    })
  }
}

export default anecdoteReducer