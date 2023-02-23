function square(x) {
    return x*x;
}

const sq = (x) => x*x;

console.log(sq(4), '\n');


//----------------------------
const arr = ['1', '3', '2', '4'];

const res = arr
.map((el) => parseInt(el))
.filter((num) => num % 2)
.reduce((max, number) => Math.max(max, number), 0 ); 

console.log(res, '\n')

const res2 = arr
.map(function(el) {
    return parseInt(el);
})
.filter(function(num) {
    return num % 2;
})
.reduce(function(max, number) {
    return Math.max(max, number);
}, 0);


//---------------------------------
// сохраняется this
const greeter = {
    
    greet: function(name) {
        console.log('Hello', name);
    },

    greetAll: function(names) {
        names.forEach(function(name) { // здесь нужна функция стрелки
            this.greet(name);
        });
    }
};

//greeter.greetAll(['Angelica', 'Ben' ,'Celestel']) //-- TypeError: this.greet is not a function

const greeter1 = {
    
    greet: function(name) {
        console.log('Hello', name);
    },

    greetAll: function(names) {
        names.forEach((name) => { // здесь нужна функция стрелки
            this.greet(name);
        });
    }
};

greeter1.greetAll(['Angelica', 'Ben' ,'Celestel']);


//---------------------------------------
// Нет прототайпа у стрелочных функций
// const Person = () => {

// };

// new Person(); //-- TypeError: Person is not a constructor

