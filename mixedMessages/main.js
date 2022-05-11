// Avengers Movie Plot Generator 


//data for the two fighters and the location
const goodGuys = ['Thor', 'Iron Man', 'Black Widow', 'Captain America', 'Hulk', 'Hawk Eye', 'Dr. Strange', 'Wanda', 'Vision', 'Black Panther'];

const badGuys = ['Thanos', 'Ultron', 'Sandman', 'Green Goblin', 'Mysterio', 'Electro', 'Morbius', 'Dormammu', 'Ronan', 'Ivan Vanko'];

const location = ['New York City', 'Asguard', 'Sakaar', 'Quantum Realm', 'London', 'Tokyo', 'Wakanda', 'Xandar'];


//random number for selecting a charactor 
let randomCharNum = Math.floor(Math.random() * goodGuys.length);

//random number for selecting a location 
let randomLocNum = Math.floor(Math.random() * location.length)
 
  
let goodCharactor = goodGuys[randomCharNum];
let badCharactor = badGuys[randomCharNum];
let randomLocation = location[randomLocNum];

let string = `The next Marvel movie plot will be: ${goodCharactor} defeats ${badCharactor} in ${randomLocation}.`;

console.log(string);