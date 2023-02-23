let name = 'Sam';
name = 'Alex';

const pi = 3.14;
//pi = 5; -- TypeError: Assignment to constant variable.


//--------------------------
// Нельзя присвоить новое значение, но можно изменять сам массив.
const names = ['John', 'Ben'];

names.push('Henry');
console.log(names,'\n');

// names = [] -- error


//---------------------------
const person = {
    name: 'Steve',
    age: 17
};

person.name = 'Jerry';

peson = 'Andy';
console.log(person, '\n'); // -- { name: 'Jerry', age: 17 }


//----------------------------
// var - вся функция.
// let and const - блок кода.

for (var i=0; i < 3; i++) {
    setTimeout(function() {
        console.log(i) // be 3 3 3
    }, i*100);
}


for (let i=0; i < 3; i++) {
    setTimeout(function() {
        console.log(i) // be 1 2 3
    }, i*100);
}
