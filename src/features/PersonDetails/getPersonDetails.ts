import { fetchApi } from '../fetchApi'
import { APP_ROUTES } from '../../lib/utils'
import { PeopleCredits, PersonDetails } from '../../models/person.model'

export const getPersonDetails = ({ id }: {id: number}) =>
  fetchApi<PersonDetails>({
    path: `${APP_ROUTES.personDetails}/${id}`,
  })

export const getPersonCredits = ({ id }: {id: number}) =>
  fetchApi<PeopleCredits>({
    path: `${APP_ROUTES.personDetails}/${id}/${APP_ROUTES.personCredits}`,
  })
