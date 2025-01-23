/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 0;
    let isTwice = false;

    for (let i = 1; i < nums.length; i++) {
        if (nums[k] !== nums[i]) {
            k++;
            nums[k] = nums[i];
            isTwice = false;
            continue;
        }

        if (isTwice) {
            continue;
        }

        k++;
        nums[k] = nums[i];
        isTwice = true;
    }

    return k + 1;
};