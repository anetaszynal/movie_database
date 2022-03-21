import { Genre } from "../../models/genre.model";

export const convertArrayToObject = (array:Genre[]) => array.reduce((accumulator, { id, name }) =>
    (
      {
        ...accumulator,
        [id]: name,
      }
    ),
  {},
)