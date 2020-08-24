//OBJECT DESTRUCTURING
// const person = {
//   age: 48,
//   location: {
//     city: 'Leander',
//     temp: 90,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penquin',
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// //Self-published
// console.log(publisherName);

//ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Leander', 'Texas', '78641'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (ice)', '$2.00', '$2.50', '2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
