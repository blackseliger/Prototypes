function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;

  Character.prototype.damage = function (points) {
    if (this.health >= 0) this.health -= points * (1 - this.defence / 100);
    if (this.health <= 0) this.health = 0;
  };
}

export default Character;

console.log(`ggdkgh`)

const test1 = new Character('gleb', 'sword');
console.log(test1);
test1.damage(9999);
console.log(test1.health);