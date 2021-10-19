let basket = []
const maxItems = 5;

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

// create a function to check if the basket isfull.
function isFull(){
  console.log('in isFull:');
//
  if (maxItems >= basket.length){
  return true;
} else {
  return false;
}
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
console.log( 'is the basket full?', isFull());
