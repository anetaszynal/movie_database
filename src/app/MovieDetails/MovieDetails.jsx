import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from './movieDetailsSlice'
import { useParams } from 'react-router'

export const MovieDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    console.log(id)
    dispatch(actions.fetch(id))
  }, [dispatch, id, actions])

  return(
    <h1>{id}</h1>
  )
}