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
  const [colorName1, colorName2] = colorNames;
  const index1 = getColorIndex(colorName1);
  const index2 = getColorIndex(colorName2);
  return index1 * 10 + index2;
}

function getColorIndex(colorName :string): number {
  return colorDictionary[colorName as keyof typeof colorDictionary] ?? 99;
}
