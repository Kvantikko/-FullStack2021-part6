import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filteredAnecdotes = anecdotes
      .filter(a =>
        a.content.toLowerCase()
        .includes(filter)
      )
    return filteredAnecdotes 
  })

  const dispatch = useDispatch()
  
  const voteAnecdote = (id) => {
    dispatch(vote(id))
    const anecdoteVoted = anecdotes.find(a => a.id === id)
    dispatch(setNotification(`you voted '${anecdoteVoted.content}'`, 5))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
        </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList