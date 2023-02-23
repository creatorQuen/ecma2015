// previos
max(1, 6, 12, 41);

function max() {
    var numbers = Array.prototype.slice.call(arguments);
}


//-----------------------------
// rest parameters
function max1(...numbers) {
    console.log(numbers)
}

max1(1, 2, 4); // [ 1, 2, 4 ]

max1(1); // [1]

max1(); // []



//------------------------------
function max2(a, b, ...numbers) {
    console.log(numbers);
}

max2(0, 1, 2); // [2]

max2(0, 1) // []

