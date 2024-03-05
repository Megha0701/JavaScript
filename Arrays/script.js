// let arr = ['a', 'b', 'c', 'd', 'e'];

// //************slice************

// console.log(arr.slice(2));

// console.log(arr.slice(2,4)); //end parameter is not added

// console.log(arr.slice(-2));//last two elements

// console.log(arr.slice(-1));//last element

// console.log(arr.slice(1,-2));//start from 1 but leave the last two elements

// console.log(arr.slice()); //create a shallow copy like spread operator
// console.log([...arr]);



// //**************splice***************changes the original array

// //console.log(arr.splice(2));
// arr.splice(-1);//permanently remove last array
// console.log(arr);
// arr.splice(1,2);//from position 1 delete 2 elements
// console.log(arr);




// //**************REVERSE**********mutate the original array

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// console.log(arr2);



// //*************CONCAT*********** does not mutate original array

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);


// //**************JOIN***********
// console.log(letters.join(' - '));


//**************at Method***********

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//grtting last array element
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));





