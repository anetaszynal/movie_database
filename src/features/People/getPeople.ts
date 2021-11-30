import { fetchApi } from '../fetchApi'
import { APP_ROUTES } from '../../lib/utils'
import { People } from '../../models/person.model'

export const getPeople = ({ page }: {page: number}) => fetchApi<People>({
  path: APP_ROUTES.people,
  parameters: {
    page,
  }
})

export const getSearchedPeople = ({ page, query }: {page: number, query: string}) => fetchApi<People>({
  path: APP_ROUTES.searchPeople,
  parameters: {
    page,
    query,
  }
})