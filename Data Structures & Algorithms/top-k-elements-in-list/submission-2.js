class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            if (!map[nums[i]]) {
                map[nums[i]] = 1;
            } else {
                map[nums[i]]++
            }
        }
        return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(([key, value]) => Number(key))
    }
}
