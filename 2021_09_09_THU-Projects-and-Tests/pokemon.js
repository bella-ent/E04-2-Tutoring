class Pokemon {
	constructor(name, health, magic, skills = []) {
		this.name = name;
		this.health = health;
		this.magic = magic;
		this.skills = skills;
	}
	learnAttackSkill(skill) {
		this.skills.push(skill);
	}
	showStatus() {
		console.log(`---------------------`);
		console.log(`${this.name} status`);
		console.log(`health: ${this.health}`);
		console.log(`magic: ${this.magic}`);
		console.log(`---------------------`);
	}

	//! What we have to consider:
	//? If the pokemon has its magic points and health points and the competitor has its health points, the pokemon can attack using its skill.
	//? If the competitor or the pokemon has no health points or the pokemon has no magic points, the pokemon can not attack anymore.
	attack(index, competitor) {
		if (this.magic > 0 && this.health > 0 && competitor.health > 0) {
			this.magic -= this.skills[index].magicAmount;
			console.log(
				`${this.name} launched skill '${this.skills[index].attackName}' successfully!`
			);
			competitor.health -= this.skills[index].damageAmount;
			console.log(
				`${competitor.name} got ${this.skills[index].damageAmount} damage`
			);
		}
		if (competitor.health <= 0) {
			console.log(`${competitor.name} is killed!`);
		} else if (this.health <= 0) {
			console.log(`${this.name} is already dead!`);
		} else if (this.magic <= 0) {
			console.log(`${this.name} doesn't have enough magic, so cannot attack!`);
		}
	}
	getMagic() {
		this.magic += 20;
		console.log(`${this.name} got 20 magic back!`);
	}
}

// the old version of class (ES5) : Constructor Function
function AttackSkill(attackName, damageAmount, magicAmount) {
	this.attackName = attackName;
	this.damageAmount = damageAmount;
	this.magicAmount = magicAmount;
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
let lightning = new AttackSkill("lightning", 40, 30);
let electricShock = new AttackSkill("electricShock", 50, 35);
console.log(lightning);
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(electricShock);
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.showStatus();
pikachu.getMagic();
pikachu.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
console.log(pikachu);
