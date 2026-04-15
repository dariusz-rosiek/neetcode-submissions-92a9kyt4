class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        const sorted = strs.map(e => e.split("").sort().join(""));

        for (let i = 0; i < sorted.length; i++) {
            if (!map[sorted[i]]) {
                map[sorted[i]] = [strs[i]];
            } else {
                map[sorted[i]].push(strs[i]);
            }
        }

        return Object.values(map)
    }
}
