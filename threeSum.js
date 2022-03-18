/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
//such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

///Notice that the solution set must not contain duplicate triplets.

//Example 1:

////Input: nums = [-1,0,1,2,-1,-4]
//Output: [[-1,-1,2],[-1,0,1]]
//Example 2:

//Input: nums = []
//Output: []
//Example 3:

//Input: nums = [0]
//Output: []

Constraints:

//0 <= nums.length <= 3000
//-105 <= nums[i] <= 105
//Example 1:

//Input: nums = [-1,0,1,2,-1,-4]
//Output: [[-1,-1,2],[-1,0,1]]
nums = [-1, 0, 1, 2, -1, -4]

var threeSum = function (nums) {
    let answers = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = i + 2; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    answers.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return answers;
};
console.log(threeSum(nums));