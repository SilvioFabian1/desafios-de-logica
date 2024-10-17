const nums = [3, 2, 4];
const target = 6;

const twoSum = (nums, target) => {
  const arr = [];
  let status = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target && status === 0) {
          arr.push(i, j);
          status = 1;
        }
      }
    }
  }
  return arr;
};

console.log(twoSum(nums, target));
