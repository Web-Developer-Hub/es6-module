import { addition, multiply, subtraction, divide, addArray, removeDuplicate, FindMax } from "../js/extranal.js";

//callef addArray
console.log(addArray([45, 78, 89, 90]));

//called removeDuplicate
const friendName = ['marf', 'jonathon', 'ed sheeran', 'allen boff', 'justin beiber', 'ed sheeran', 'gomej']
const result = removeDuplicate(friendName);
console.log(result);

//called removeDuplicate
console.log(removeDuplicate([10, 20, 10, 40, 50, 30, 50, 40]));

//called removeDuplicate
const price = [45, 78, 90, 87, 66, 990, 34, 12, 99, 34, 67, 89, 112];
const myResult = FindMax(price);
console.log(myResult);

////called removeDuplicate
console.log(FindMax([45, 43, 23, 300, 32, 45]))