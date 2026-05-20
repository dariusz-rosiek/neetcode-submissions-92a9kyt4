class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = {};

        for (const letter of s) {
            if (!map[letter]) {
                map[letter] = 1;
            } else {
                map[letter]++;
            }
        };
        
        for (const letter of t) {
            if (!map[letter]) return false;

            map[letter]--;
        }

        return true;
    }
}
