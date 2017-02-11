'use strict';

const ask = require('./ask');
let age = ask('How old are you? ');

if (age < 10) {
  console.log('What are doing on a computer? Go Outside!');
} else if (age > 90) {
  console.log('You old fart!');
} else {
  console.log('How boring...');
}
