import { buildQueryString } from "./buildQueryString";

const API_KEY = "fa9cbe4630e747b288e3a22b5a8069ea";
const API_URL = "https://api.themoviedb.org/3";

export const fetchApi = async ({path, parameters}) => {
  const defaultParameters = {
    api_key: API_KEY,
  };

  const allParameters = {
    ...defaultParameters,
    ...(parameters || {}),
  };

  const response = await fetch(`${API_URL}${path}?${buildQueryString(allParameters)}`);

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json();
};