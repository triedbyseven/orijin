export const subtractCount = (count: number, updateCount: any) => {
  if (count <= 1) return null;

  updateCount(count - 1);
};
