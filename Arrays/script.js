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

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //grtting last array element
// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });


//***********filter************returns new array
const deposits = movements.filter(function (mov) {
    return mov > 0;
  });
  console.log(movements);
  console.log(deposits);
    
  const withdrawals = movements.filter(mov => mov < 0);
  console.log(withdrawals);





//*****************REDUCE****************** 

console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, arr) {
// console.log(`Iteration ${i}: ${acc}`);
// return acc + cur;
//  }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);





//******************find*************** returns first elemengt matching the logic

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);






//*****************SOME ans EVERY********* */

console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));




//*****************FLAT and FLATMAP******************* 

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));



//********************Sorting**************** 
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);