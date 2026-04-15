class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let number of nums) {
            if (!map.has(number)) {
                map.set(number, 1)
            } else {
                map.set(number, map.get(number) + 1)
            }
        }

        return [...map].sort((a, b) => b[1] - a[1]).slice(0, k).map(([key]) => key)
    }
}
