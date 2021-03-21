export const findCourse = (arr, id) => {
  const result = arr.filter((obj) => obj.id == id);
  return result[0];
};
