// const dog = {
//     name: 'dog',
//     voice: 'voof',
//     say: function () {
//         console.log(this.name, 'goes', this.voice);
//     }
// };

// const cat = {
//     name: 'cat',
//     voice: 'meow',
//     say: function () {
//         console.log(this.name, 'goes', this.voice);
//     }
// };

// dog.say();
// cat.say();


//------------------------------------
const animal = {
    say: function () {
        console.log(this.name, 'goes', this.voice);
    }
};

const dog = {
    name: 'dog',
    voice: 'voof',
};
Object.setPrototypeOf(dog, animal); // WARNING.


const cat = {
    name: 'cat',
    voice: 'meow',
};
Object.setPrototypeOf(cat, animal); // WARNING.

dog.say(); //dog goes voof
cat.say(); //cat goes meow


//-----------------------------------
const dog1 = Object.create(animal);
dog1.name = 'Dog';
dog1.voice = 'woof';
dog1.say();


//-----------------------------------
function createAnimal(name, voice) {
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result
}

const dog2 = createAnimal('Dog', 'woof');
const cat2 = createAnimal('Cat', 'meow');
dog2.say();
cat2.say();

//------------------------
function Animal1(name, voice) {
    this.name = name;
    this.voice = voice;
};

// Функции кроме строчных функций  есть свойство prototype.
// - т.е. пустой объект который будет исопльзоваться как прототип для новых объектов.
Animal1.prototype.say = function() {
    console.log('\n', this.name, 'goes from prototype', this.voice);
};

const dog3 = new Animal1('Dog', 'woof');
const cat3 = new Animal1('Cat', 'meow');

dog3.say();
cat3.say();

console.log(dog3.toString());