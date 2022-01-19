import { buildQueryString } from "./buildQueryString"

describe('buildQueryString', () => {
  test('should properly parse object to query string', () => {
    const queryStringObject = {
      query: 'test'
    }
    const withNum = {
      someNum: 1
    }
    
    expect(buildQueryString(queryStringObject)).toBe("query=test")
    expect(buildQueryString(withNum)).toBe("someNum=1")
  })
})