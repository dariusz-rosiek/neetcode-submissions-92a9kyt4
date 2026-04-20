class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row = 0; row < 9; row++) {
            const seen = new Set();

            for (let col = 0; col < 9; col++) {
                const value = board[row][col];

                if (value === ".") continue;

                if (seen.has(value)) return false;

                seen.add(value);
            }
        }

        for (let col = 0; col < 9; col++) {
            const seen = new Set();

            for (let row = 0; row < 9; row++) {
                const value = board[row][col];

                if (value === ".") continue;

                if (seen.has(value)) return false;

                seen.add(value);
            }
        }

        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                const seen = new Set();

                for (let row = boxRow; row < boxRow + 3; row++) {
                    for (let col = boxCol; col < boxCol + 3; col++) {
                        const value = board[row][col];

                        if (value === ".") continue;

                        if (seen.has(value)) return false;

                        seen.add(value);
                    }
                }
            }
        }

        return true;
    }
}
