

// ### Required Features
// Update the `cart.js` file to do the following:

// - Create a global variable named `basket` and set it to an empty array.

// - Create a function called `addItem`. It should:
//  - take an input parameter for a string `item`
//  - add the new item to the global array `basket`.
//  - return `true` indicating the item was added

// - Create a function called `listItems`. It should:
//  - loop over the items in the `basket` array
//  - console.log each individual item on a new line

// - Create a function called `empty`. It should:
//  - reset the `basket` to an empty array
console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = []
let itemAdded = true;


function addItem( item ){
 console.log( 'in addItem:', item );
 addItem.push( item );
 return basket;
}

function listItems( basket ){
  console.log('in listItems:', basket );
  for ( let i=0; i<basket.length; i++ )
  
}

function empty( basket ){
  console.log( 'in empty', basket);
  return basket[basket.length-1] || null;
}


addItem('Juice');
addItem( 'Mango');
addItem( 'Avocado');
addItem( 'Pineapple');

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log( 'in Last Item Array:', empty(basket))
console.log( 'in Last Item Array:', empty([]))
