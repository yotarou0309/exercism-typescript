export function isLeap(year: number): boolean {
  const isDivisibleBy4 = isDivisibleBy(4);
  const isDivisibleBy100 = isDivisibleBy(100);
  const isDivisibleBy400 = isDivisibleBy(400);

  return isDivisibleBy4(year) && (!isDivisibleBy100(year) || isDivisibleBy400(year))
}

function isDivisibleBy(num: number): (n: number) => boolean {
  return (n: number) => n % num === 0
}