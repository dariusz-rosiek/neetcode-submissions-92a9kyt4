class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array(nums.length).fill(1);

        let prefix = 1;
        for (let i = 0; i < result.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        console.log(result);
        let suffix = 1;
        for (let i = result.length - 1; i >= 0; i--) {
            result[i] *= suffix;
            suffix *= nums[i];
        }

        return result;
    }
}
