import { listSaga } from '../topRatedList/listSaga'
import { actions } from './peopleSlice'
import { getPeople, getSearchedPeople } from './getPeople'

export function* peopleSaga () {
  yield listSaga({
    getPopular: getPeople,
    getSearched: getSearchedPeople,
    actions,
  })
}