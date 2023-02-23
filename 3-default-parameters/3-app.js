//connectToDB('localhost', 3306);

// previos
function getSomething(count, start) {
    if (count === undefined) {
        count = 12;
    }

    if (start === undefined) {
        start = 1;
    }

    console.log('Getting', count, 'starting to', start, '\n')
}

getSomething();


//-----------------------------------
function getSomething1(count = 112, start = 2) {

    console.log('Getting', count, 'starting to', start, '\n')
}

getSomething1(); // Getting 'put value' starting to 'put value'
getSomething1(24, 5); // Getting 24 starting to 5


//-----------------------------------
function getSomething2(count, start = 33) {

    console.log('Getting', count, 'starting to', start, '\n')
}

getSomething2(3); // Getting 3 starting to 33


//------------------------------------
// Только undefied меняет значение по умолчанию.
getSomething2(null, 44); // Getting null starting to 44


//--------------------------------------
function findPrice(opts = {minPrice: 30, maxPrice: 40}) {
    console.log(opts);
}

findPrice(); // { minPrice: 30, maxPrice: 40 }
findPrice({}); // {}
