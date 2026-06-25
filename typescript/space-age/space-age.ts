const orbitalPeriods: Record<string, number> ={
  earth: 1,
  mercury: 0.2408467,
  venus:	0.61519726,
  mars:	1.8808158,
  jupiter:	11.862615,
  saturn:	29.447498,
  uranus:	84.016846,
  neptune:	164.79132,
}

export function age(planet: string, seconds: number): number {
  const ageOnEarth = calcAgeOnEarth(seconds);
  const adjustedAge = ageOnEarth / orbitalPeriods[planet]
  const rounded = Math.round(adjustedAge * 100) / 100
  return rounded;
}

function calcAgeOnEarth(seconds: number): number {
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const years = days / 365.25;
  return years;
} 