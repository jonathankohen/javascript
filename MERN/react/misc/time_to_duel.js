class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
            console.log(`${this.name} attacked ${target.name}.`);
            console.log(
                `${target.name} resilience went from ${
                    target.res + this.power
                } to ${target.res}`,
            );
        } else {
            console.log('Target must be a Unit!');
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        var divide = '*';
        if (target instanceof Unit) {
            if (this.stat == 'res') {
                target.res += this.magnitude;
            } else if ((this.stat = 'power')) {
                target.power += this.magnitude;
            } else {
                console.log("Effect needs either 'res' or 'power' as stat");
            }

            if (this.magnitude < 0 && this.stat == 'res') {
                console.log(
                    `${target.name}'s resilience reduced from ${
                        target.res - this.magnitude
                    } to ${target.res}`,
                );
                console.log(divide.repeat(45));
            } else if (this.magnitude > 0 && this.stat == 'res') {
                console.log(
                    `${target.name}'s resilience increased from ${
                        target.res - this.magnitude
                    } to ${target.res}`,
                );
                console.log(divide.repeat(45));
            } else if (this.magnitude < 0 && this.stat == 'power') {
                console.log(
                    `${target.name} power reduced from ${
                        target.power - this.magnitude
                    } to ${target.power}`,
                );
                console.log(divide.repeat(45));
            } else if (this.magnitude > 0 && this.stat == 'power') {
                console.log(
                    `${target.name} power increased from ${
                        target.power - this.magnitude
                    } to ${target.power}`,
                );
                console.log(divide.repeat(45));
            }
        } else {
            console.log('Target must be a Unit!');
        }
    }
}

const ha = new Effect(
    'Hard Algorithm',
    2,
    "increase target's resilience by 3",
    'res',
    3,
);
const upr = new Effect(
    'Unhandled Promise Rejection',
    1,
    "reduce target's resilience by 2",
    'res',
    -2,
);
const pp = new Effect(
    'Pair Programming',
    3,
    "increase target's power by 2",
    'power',
    +2,
);

const rbNinja = new Unit('Red Belt Ninja', 3, 3, 4);

ha.play(rbNinja);

const bbNinja = new Unit('Black Belt Ninja', 4, 5, 4);

upr.play(rbNinja);

pp.play(rbNinja);

rbNinja.attack(bbNinja);
