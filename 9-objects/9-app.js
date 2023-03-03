const x = 20;
const y = 40;

const point = {
    x: x,
    y: y,

    draw: function() {
        //
    }
};

const p = { 
    x, 
    y,

    draw(pointers) {

    }
};


//------------------------------
// Dynamic solve key:
const prefix = '_pre_';

const data = {
    [prefix + 'name']: 'Ben',
    [prefix + 'age']: 42
};

console.log(data);


//-----------------------
// Join object:
const defaults = {
    host: 'localhost',
    dbNmae: 'blog',
    user: 'admin'
};

const opts = {
    user: 'server',
    password: '123'
};

Object.assign(defaults, opts);
console.log(defaults);


const result = Object.assign({}, defaults, opts);
console.log(result);


//------------------------------
// Shallow copy:
const person = {
    name: 'John',
    friends: ['Jack', 'Lisa']
};

const shallowCopy = Object.assign({}, person);

//!-------------------------------------
person.friends.push('Alex');
console.log(shallowCopy); // { name: 'John', friends: [ 'Jack', 'Lisa', 'Alex' ] }