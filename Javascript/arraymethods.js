const nums = [1,2,3,4,5,6,7,8];

const square= num => num **2;
const squareOfNums = nums.map(square);
const cubeOfNums = nums.map(function(num){
    return num ** 3;
});
const squareRootOfNums = nums.map((num) => Math.sqrt(num));

console.log(nums);
console.log(cubeOfNums);
console.log(squareRootOfNums);
console.log(squareOfNums);