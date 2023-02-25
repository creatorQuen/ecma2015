const array = [1, 1, 3, 5, 8, 13, 21];

const [a, b, c,] = array;
console.log(a,b,c, '\n')

const [, a1, , b1] = array;
console.log(a1,b1, '\n')


//----------------------------------
const line = [[11, 16], [15, 5]];

const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y, '\n')


// Default value
//-------------------------------
const people = ['Ana', 'Jack'];

const [pa, pb, pc = 'user'] = people;
console.log(pa, pb, pc, '\n');

const peopleO = ['Anna', 'Jack', 'Ben'];

const [pep1, ...otherPeople] = peopleO;
console.log(otherPeople); // [ 'Jack', 'Ben' ]

const [, pep2, ...otherPeople2] = peopleO;
console.log(otherPeople2); // [ 'Ben' ]


//
//--------------------------
const dict = {
  dog: 'wuff',
  cat: 'muow',
  duck: 'quike',
  mouse: 'quack'
}

// const res = Object.entries(dict)
//   .filter((arr) => arr[1] === 'muow'); 
const res = Object.entries(dict)
  .filter(([key, value]) => value === 'muow')
  .map(([key]) => key);
console.log("'res:'" ,res);


//Another example.
//--------------------------
const shape = {
  type: 'line',
  coordinates: {
    start: [10, 15],
    end: [17, 25]
  }
}

const {coordinates: {start: [startX, startY], end: [endX, endY]}} = shape;
console.log(startX, startY, endX, endY);
