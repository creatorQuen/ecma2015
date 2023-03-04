// function Animal(name, voice) {
//     this.name = name;
//     this.voice = voice;
// };

// Animal.prototype.say = function() {
//     console.log('\n', this.name, 'goes from prototype', this.voice);
// };

// const dog = new Animal('Dog', 'woof');

// dog.say();


//-------------------------------
class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log('\n', this.name, 'goes from prototype', this.voice);
    }
}

// swan -> Bird.prototype -> ANimal.prototype -> Object.prototype -> null
class Bird extends Animal {
    constructor(name, voice, canFly) {
        super(name, voice); // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super.say();
        //this.say();
        this.canFly = canFly;
        
    }

    say() {
        console.log('Something said.');
    }
}

const swan = new Bird('Swan', 'quake', true);
swan.say();