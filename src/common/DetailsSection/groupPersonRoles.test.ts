import { groupPersonRoles } from "./groupPersonRoles";

describe('groupPersonRoles', () => {
  const movieCreditsCrewData = [
    {
        "adult": false,
        "gender": 2,
        "id": 10980,
        "known_for_department": "Acting",
        "name": "Daniel Radcliffe",
        "original_name": "Daniel Radcliffe",
        "popularity": 29.485,
        "profile_path": "/f9WKorjfanW4PxTxhjRvHtCmfKf.jpg",
        "cast_id": 22,
        "character": "Harry Potter",
        "credit_id": "52fe4268c3a36847f801c4db",
        "order": 0
    },
    {
        "adult": false,
        "gender": 2,
        "id": 10989,
        "known_for_department": "Acting",
        "name": "Rupert Grint",
        "original_name": "Rupert Grint",
        "popularity": 12.605,
        "profile_path": "/iFlkpTaOF6fGLqxz8b0PhI0i0zN.jpg",
        "cast_id": 23,
        "character": "Ron Weasley",
        "credit_id": "52fe4268c3a36847f801c4df",
        "order": 1
    },
  ]

  const movieCreditsCastData = [
    {
        "adult": false,
        "gender": 2,
        "id": 1129,
        "known_for_department": "Camera",
        "name": "Slawomir Idziak",
        "original_name": "Slawomir Idziak",
        "popularity": 0.6,
        "profile_path": null,
        "credit_id": "52fe4268c3a36847f801c489",
        "department": "Camera",
        "job": "Director of Photography"
    },
    {
        "adult": false,
        "gender": 2,
        "id": 1129,
        "known_for_department": "Camera",
        "name": "Slawomir Idziak",
        "original_name": "Slawomir Idziak",
        "popularity": 0.6,
        "profile_path": null,
        "credit_id": "52fe4268c3a36847f801c49b",
        "department": "Camera",
        "job": "Production Design"
    },
  ]

  
  const movieCreditsCastDataExpectedResult = [
    {
        "id": 1129,
        "name": "Slawomir Idziak",
        "profile_path": null,
        "credit_id": "52fe4268c3a36847f801c49b",
        "job": ["Director of Photography", "Production Design"]
    }
  ]

  test('should group person roles together', () => {
    expect(groupPersonRoles(movieCreditsCrewData, 'character')).toMatchSnapshot(movieCreditsCrewData)
    expect(groupPersonRoles(movieCreditsCastData, 'job')).toMatchSnapshot(movieCreditsCastDataExpectedResult)
  })
})