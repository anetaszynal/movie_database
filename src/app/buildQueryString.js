export const buildQueryString = (parameters, initialQueryString) => {
  const URLSearchParams = new URLSearchParams(initialQueryString);

  for (const name in parameters) {
    const value = parameters[name];

    if (value === undefined) {
      URLSearchParams.delete(name);
    } else {
      URLSearchParams.set(name, value)
    }
  }

  return URLSearchParams.toString();
};