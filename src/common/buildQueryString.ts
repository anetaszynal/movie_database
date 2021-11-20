export const buildQueryString = (parameters: Record<string|number, string|number|undefined>, initialQueryString?: string) => {
  const urlSearchParams = new URLSearchParams(initialQueryString)

  for (const name in parameters) {
    const value = parameters[name]

    if (value === undefined) {
      urlSearchParams.delete(name)
    }
    else if (typeof value === 'number') {
      urlSearchParams.set(name, String(value))
    }
    else {
      urlSearchParams.set(name, value)
    }
  }

  return urlSearchParams.toString()
}