import { fetchApi } from '../fetchApi'
import { APP_ROUTES } from '../../lib/utils'

export const getPersonDetails = ({ id }) => fetchApi({
  path: `${APP_ROUTES.personDetails}${id}`
})

export const getPersonCredits = ({id}) => fetchApi({
  path: `${APP_ROUTES.personDetails}${id}${APP_ROUTES.personCredits}`
})