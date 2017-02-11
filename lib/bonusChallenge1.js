'use strict';

const ask = require('./ask');

let genre = ask('What is your favorite music genre? ');
if (genre === 'Dance') {
  console.log('Yeah, lets go raving!');
} else if (genre === 'Rock') {
  console.log("I'll rock your fucking socks off!");
} else if (genre === 'Blues') {
  console.log('Poor little baby has got the blues, GROW UP.');
} else {
  console.log('Wow, someone has no taste.');
}
