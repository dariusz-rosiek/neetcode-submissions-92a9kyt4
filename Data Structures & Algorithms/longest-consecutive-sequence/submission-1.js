class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numbers = new Set(nums);
        let result = 0;

        for (const num of numbers) {
            if (!numbers.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                while (numbers.has(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }

                result = Math.max(result, currentStreak);
            }
        }
        return result;
    }
}
