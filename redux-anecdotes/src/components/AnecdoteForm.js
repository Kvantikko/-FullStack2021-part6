import React from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { setNotification, dismissNotification } from '../reducers/notificationReducer'
import { setTimer, resetTimer } from '../reducers/timerReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(create(content))
    
    dispatch(setNotification(`new anecdote '${content}' created`))
    
    dispatch(resetTimer())
    const timer = setTimeout(() => {
        dispatch(dismissNotification())
        dispatch(resetTimer())
    }, 5000) 
    dispatch(setTimer(timer))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm


