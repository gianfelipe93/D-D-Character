export class DnDCharacter {
  strength = 0;
  dexterity = 0;
  constitution = 0;
  intelligence = 0;
  wisdom = 0;
  charisma = 0;
  hitpoints = 0;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  static getRandomInt() {
    return Math.floor(Math.random() * 6);
  }

  public static generateAbilityScore(): number {
    let highestScores = [0, 0, 0]

    for (let i = 0; i <= 6; i++) {
      const random = this.getRandomInt();

      for (let x = 0; x <= 2; x++) {
        if (highestScores[x] < random) {
          highestScores[x] = random;

          break;
        }
      }
    }

    return highestScores.reduce((c, v) => c + v)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}

