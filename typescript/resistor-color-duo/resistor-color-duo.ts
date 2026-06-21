const colorDictionary = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9,
}

export function decodedValue(
  colorNames: string[]
): number {
  if (colorNames.length > 3) {
    throw new Error('error');
  }
  const a = colorDictionary[colorNames[0] as keyof typeof colorDictionary] ?? 99;
  const b = colorDictionary[colorNames[1] as keyof typeof colorDictionary] ?? 99;
  return a * 10 + b;
}
