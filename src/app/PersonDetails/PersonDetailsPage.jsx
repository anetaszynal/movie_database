import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { actions } from './personDetailsSlice'

export const PersonDetailsPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(actions.fetch(id))
  }, [id, dispatch, actions.fetch])

  return (
    <h1>{id}</h1>
  )
}