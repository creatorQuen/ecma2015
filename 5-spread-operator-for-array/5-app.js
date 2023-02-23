const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// previos
const res = Math.max.apply(Math, arr1)
console.log(res);

// spread
const res1 = Math.max(...arr1);
console.log(res1);

//const res2 = Math.max(...arr1, arr2); // NaN
const res2 = Math.max(...arr1, ...arr2, 12, 12);
console.log(res2);


//-----------------------------
const copyArr = [...arr1, ...arr2, 222]
console.log(copyArr)