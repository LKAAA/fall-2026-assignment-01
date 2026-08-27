export function transcribeDNA(dna: string): string {
  let output: string = ''
  for (let i: number = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        output += "U";
        break;
      case "T":
        output += "A";
        break;
      case "C":
        output += "G";
        break;
      case "G":
        output += "C";
        break;
      default: // Executes if no cases match
        throw new DNAError("Incorrect DNA Strand.");
    }
  }
  return output;
}

class DNAError extends Error {

  constructor(message: string) {
    super(message);
    this.name = "DNAError";

    Object.setPrototypeOf(this, DNAError.prototype);
  }
}
