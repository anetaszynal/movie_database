export const convertArrayToObject = (array) => array.reduce(
  (accumulator, {id, name}) =>
    ({
        ...accumulator,
        [id]: name,
      }),
  {},
)