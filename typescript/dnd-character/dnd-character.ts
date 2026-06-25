export class DnDCharacter {
  public static generateAbilityScore(): number {
    return randomInt(3, 18)
  }

  public static getModifierFor(abilityValue: number): number {
    const s = (abilityValue - 10) / 2
    return Math.floor(s);
  }

  strength:number
  dexterity: number
  intelligence: number
  wisdom: number
  charisma: number
  constitution: number
  hitpoints: number

  constructor(
  ) {
      this.strength = DnDCharacter.generateAbilityScore()
      this.dexterity = DnDCharacter.generateAbilityScore()
      this.intelligence = DnDCharacter.generateAbilityScore()
      this.wisdom = DnDCharacter.generateAbilityScore()
      this.charisma = DnDCharacter.generateAbilityScore()
      this.constitution = DnDCharacter.generateAbilityScore()
      this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}