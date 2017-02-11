'use strict';

const ask = require('./ask');

let name = ask("What's your name? ");
if (name === 'Brian') {
  console.log('Hi, Brian!');
} else if (name === 'Jeff') {
  console.log('Hi, Jeff!');
} else if (name === 'Chris') {
  console.log('Hi, Chris!');
} else {
  console.log('Hi, stranger.');
}
