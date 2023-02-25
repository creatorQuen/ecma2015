const person = {
  firstName: 'Sam',
  lastName: 'Amstrong',
  age: 17
};

// previous
// const firstName = person.firstName;
// const lastName = person.lastName;

const { firstName, lastName } = person;
console.log(firstName, lastName, '\n');


//-------------------------
const person1 = {
  name: {
    first: 'Nicole',
    last: 'Kidman'
  },
  age: 22
};

const {name: {first, last}} = person1;
console.log(first, last, '\n');

// Maybe
//--------------------------------
const {name: {first: FirstName, last: Lastname}} = person1;
console.log(FirstName, Lastname, '\n');


// Default value
//---------------------------------
const person2 = {
  name: {
    first: 'Nicole',
    last: 'Kidman'
  },
  age: 22
};

const {role = 'user'} = person2;
console.log(role, '\n');

const person3 = {
  name: {
    first: 'Nicole',
    last: 'Kidman'
  },
  age: 22,
  role: 'admin'
};

const {role1 = 'user'} = person2;
console.log(role1, '\n');

// If try get permissions will error:
//const { permissions: {role2 = 'user'}} = person2; //Cannot read properties of undefined (reading 'role2')
//console.log(role2, '\n');

// But we can set default value:
const { permissions: {role3 = 'user'} = {}} = person2; //Cannot read properties of undefined (reading 'role2')
console.log(role3, 'role 3', '\n');


//Default function value.
//-----------------------------
function connect({
  host = 'localhost',
  port = 12345,
  user = 'guest'}) {
    console.log('user:', user, 'port:', port, 'host:', host, '\n');
}

connect({
  host: 'host',
  port: 8888,
  user: 'sam'
});

// with zero arguments should add {}
function connect1({
  host = 'localhost',
  port = 12345,
  user = 'guest'} = {}) {
    console.log('user:', user, 'port:', port, 'host:', host, '\n');
}


// Rest element
//--------------------------------------
const dict = {
  dog: 'wuff',
  duck: 'quike',
  cat: 'meow'
}

const {cat} = dict;
console.log(cat, '\n'); // 

const {dog, ...otherAnimals} = dict;
console.log(otherAnimals, '\n'); // { duck: 'quike', cat: 'meow' }

const {cat1, ...otherAnimal} = dict;
console.log(otherAnimal); // { dog: 'wuff', duck: 'quike', cat: 'meow' }

