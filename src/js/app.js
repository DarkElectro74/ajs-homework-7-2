export default class Character {
  constructor(name, health) {
    this.name = name;
    this.level = 1;
    this.health = health;
    this.defence = 10;
    this.attack = 40;
  }

  levelUp() {
    if (this.health <= 0) throw Error('Нельзя повысить левел умершего');
    this.level += 1;
    this.defence *= 1.2;
    this.attack *= 1.2;
    this.health = 100;
    return this;
  }
}
