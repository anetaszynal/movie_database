import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { actions as moviesActions } from './Movies/topRatedMoviesSlice'
import { actions as peopleActions } from './People/peopleSlice'

export function useFetchDataOnChange ({ fetchAction }: {fetchAction: typeof moviesActions.fetch | typeof peopleActions.fetch}) {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search)

    dispatch(fetchAction({
      query: urlSearchParams.get('query'),
      page: urlSearchParams.get('page'),
    }))

  }, [dispatch, fetchAction, location.search])
}