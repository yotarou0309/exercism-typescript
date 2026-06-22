const dnaToRnaMap: Record<string, string> = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U",
}

export function toRna(dna: string): string {
  const rna = [...dna].reduce(
    (output, base) => {
      output += dnaToRna(base)
      return output;
    },
    ''
  );
  return rna;
}

function dnaToRna(base: string): string {
  const rnaBase = dnaToRnaMap[base];
  if (rnaBase === undefined) {
    throw new Error('Invalid input DNA.');
  }
  return rnaBase;
}