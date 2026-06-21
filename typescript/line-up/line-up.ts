const ORDINAL_SUFFIXES: Record<number, string> = {
  1: 'st',
  2: 'nd',
  3: 'rd'
}

const TEEN_SUFFIXES: Record<number, string> = {
  11: "th",
  12: "th",
  13: "th",
}

export function format(name: string, rank: number): string {
  const suffix = getSuffix(rank);
  return message(name, rank, suffix);
}

function getSuffix(rank: number): string {
  const lastTwo  = rank % 100;
  const lastOne = rank % 10;

  const teenSuffix = TEEN_SUFFIXES[lastTwo];
  if (teenSuffix !== undefined) {
    return teenSuffix;
  }

  return ORDINAL_SUFFIXES[lastOne] ?? "th";
}

function message(name: string, rank:number, suffix: string): string {
  return `${name}, you are the ${rank}${suffix} customer we serve today. Thank you!`
}