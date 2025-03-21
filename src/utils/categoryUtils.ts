export const categoryNames = (...dataArrays: { title: string }[][]) => {
  return dataArrays.flat().map((item) => item.title);
};
