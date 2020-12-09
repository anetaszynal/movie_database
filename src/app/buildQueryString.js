export const buildQueryString = (parameters, initialQueryString) => {
  const urlSearchParams = new URLSearchParams(initialQueryString);

  for (const name in parameters) {
    const value = parameters[name];

    if (value === undefined) {
      urlSearchParams.delete(name);
    } else {
      urlSearchParams.set(name, value)
    }
  }

  return urlSearchParams.toString();
};