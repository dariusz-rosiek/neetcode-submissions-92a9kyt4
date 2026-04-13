class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            const letter = s[i];
            
            if (!map[letter]) {
                map[letter] = 1;
            } else {
                map[letter]++;
            }
        }

        for (let i = 0; i < t.length; i++) {
            const letter = t[i];

            if (!map[letter]) return false;

            if (map[letter] < 1) return false;

            map[letter]--;
        }

        return true
    }
}
