import { cleanup } from '@testing-library/react'
import { buildQueryString } from "./buildQueryString"

afterEach(cleanup)

describe('buildQueryString', () => {
  const queryStringObject = {
    query: 'test'
  }
  const queryNumberObject = {
    page: 1
  }
  const queryUndefinedObject = {
    page: undefined
  }
  const allParamsTogether = {
    page: 1,
    query: 'test',
  }

  test('should properly parse object to query string', () => {
    expect(buildQueryString(queryStringObject)).toBe("query=test");
    expect(buildQueryString(queryNumberObject)).toBe("page=1");
    expect(buildQueryString(queryUndefinedObject)).toBe("");
    expect(buildQueryString(allParamsTogether)).toBe("page=1&query=test");
  })
})