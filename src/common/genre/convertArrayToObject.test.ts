import { Genre } from "../../models/genre.model";
import { convertArrayToObject } from "./convertArrayToObject";

describe('convertArrayToObject', () => {

  test('should convert received array to object', () => {
    const mockedGenres = [{id: 4, name:'drama'}, {id: 8, name: 'romans'}]
    const mockedGenresAfterConvert = {4: 'drama', 8: 'romans'}
  
    expect(convertArrayToObject(mockedGenres)).toStrictEqual(mockedGenresAfterConvert);
  })

  test('should convert received empty array to empty object', () => {  
    const mockedGenresForEmptyArray: Genre[] = []
    const mockedGenresForEmptyArrayAfterConvert = {}

    expect(convertArrayToObject(mockedGenresForEmptyArray)).toStrictEqual(mockedGenresForEmptyArrayAfterConvert);
  })
})