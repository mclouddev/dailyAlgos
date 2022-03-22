const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const testCase = [19, 2, 25, 6, 44, 23, 7, 310, 1, 68];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// expected output order
//const expected = [1,2,3,4,5,6.7.8.9.10];

//given an unsorted array, sort the array using bubbleSort function
function bubbleSort(nums) {
  for (let i = nums.length - 1; i > 0; i--) { 
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) { // if the value is greater than the value next to it, we must swap
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        // console.log(nums) here to see the loop step by step 
      }
    }
  }
  return nums;
}
console.log(bubbleSort(numsRandomOrder));
console.log(bubbleSort(testCase));