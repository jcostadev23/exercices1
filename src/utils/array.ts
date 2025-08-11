export const uniqueNumbers = (numbers: Array<number>) => {
  if (!numbers.length) {
    return null;
  }

  const unique: Record<string, number> = {};

  for (const number of numbers) {
    if (number == null || Number.isNaN(Number(number))) {
      return NaN;
    }

    unique[number] = (unique[number] || 0) + 1;
  }

  return numbers.filter((number) => unique[number.toString()] === 1);
};
