'use strict';

const ask = require('./ask');
let count = 0;
let answer = '';
while (answer !== 'Boston' && count < 5) {
  answer = ask('Where are you taking WDI? ');
  count = count + 1;
  if (answer === 'Boston') {
  console.log('Nice, you know where you are!');
  } else if (count !==5 ) {
  console.log('Try again!');
  } else {
  console.log('How do you not know where you are?');
  }
}
