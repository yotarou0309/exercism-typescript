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

const base = 10;
const units = [
  { divisor: base ** 9, unit: 'gigaohms'},
  { divisor: base ** 6, unit: 'megaohms'},
  { divisor: base ** 3, unit: 'kiloohms'},
]

export function decodedResistorValue(
  [colorName1, colorName2, colorName3, _rest]: string[]
): string {
  const value = calcDecodedValue(colorName1, colorName2, colorName3);
  const [convertedValue, unit] = convert(value)
  return `${convertedValue} ${unit}`;
}

function convert(decodedValue: number): [number, string] {
  const info = units.find(
    ({divisor}) => divisor < decodedValue
  ) ?? {divisor: base ** 0, unit: 'ohms'}
  return [decodedValue / info.divisor, info.unit] 
}

function calcDecodedValue(
  colorName1: string,
  colorName2: string,
  colorName3: string,
): number {
  const baseValue = baseDecodedValue(colorName1, colorName2);
  const zeros = getColorIndex(colorName3);
  return baseValue * (10**zeros);
}

function baseDecodedValue(
  colorName1: string,
  colorName2: string,
): number {
  const index1 = getColorIndex(colorName1);
  const index2 = getColorIndex(colorName2);
  return index1 * 10 + index2;
}

function getColorIndex(colorName :string): number {
  const index = colorDictionary[colorName as keyof typeof colorDictionary]
  if (index === undefined) {
    throw new Error(`unknown color: ${colorName}`)
  }
  return index;
}
