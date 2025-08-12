export const uniqueNumbers = (numbers: Array<number>) => {
  if (!numbers.length) {
    return [];
  }

  const unique: Record<string, number> = {};

  for (const number of numbers) {
    unique[number] = (unique[number] || 0) + 1;
  }

  return numbers.filter((number) => unique[number.toString()] === 1);
};
