class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            const filtered = nums.toSpliced(i, 1);
            let number = 1;
            for (let j = 0; j < filtered.length; j++) {
                number = number * filtered[j];
            }
            result.push(number);
        }
        return result;
    }
}
