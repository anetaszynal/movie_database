import { fetchApi } from '../fetchApi'
import { APP_ROUTES } from '../../lib/utils'

export const getPeople = ({page}) => fetchApi({
  path: APP_ROUTES.people,
  parameters : {
    page,
  }
})

export const getSearchedPeople = ({ page, query }) => fetchApi({
  path: APP_ROUTES.searchPeople,
  parameters: {
    page,
    query,
  }
})