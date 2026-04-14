class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let value of nums) {
            if (!map.has(value)) {
                map.set(value, 1);
            } else {
                map.set(value, map.get(value) + 1);
            }
        }

        return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([key]) => key)
    }
}
