import { APP_ROUTES } from '../lib/utils'
import { buildQueryString } from '../common/buildQueryString'

const API_KEY = 'fa9cbe4630e747b288e3a22b5a8069ea'

type FetchApiType = <R>(prop:{path: string, parameters?: Record<string, string>}) => Promise<R>

export const fetchApi:FetchApiType = async ({ path, parameters }) => {
  const defaultParameters = {
    api_key: API_KEY,
  }

  const allParameters = {
    ...defaultParameters,
    ...(
      parameters || {}
    ),
  }

  const response = await fetch(
    `${APP_ROUTES.API}${path}?${buildQueryString(allParameters)}`
  )

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}
