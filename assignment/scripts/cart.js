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

function addItem( item ){
 console.log( 'in addItem:');
// so push item into the array [basket]
 basket.push( item );
 console.log(basket);
 return true;
}
// Verify if the items are in the basket, return true if it is.
    function listItems(){
    for (let i=0; i<basket.length; i++){
     console.log('listItems:', basket[i]);
  }
    return basket;
}
// Create an empty array & reset it to an empty array.
  function empty(){
    console.log( 'in empty');
    let basket = []; // assigning an empty array.
    return basket;  // returning the array to verify it's empty.
}


// Items added into the array.
addItem('Pineapple');
addItem('Mango');
addItem('Orange');
// Show me what's in the array.
console.log(addItem(basket));

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log('listItems:', listItems());
console.log('in empty basket:', empty());
