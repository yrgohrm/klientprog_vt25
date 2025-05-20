"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCount = getCount;
function getCount(substr, str) {
    var position = 0;
    var count = 0;
    while ((position = str.indexOf(substr, position)) >= 0) {
        count++;
        position++;
    }
    return count;
}
var apa = false;
var bar = false;
// bar.indexOf("apapa");
function minmax(nums) {
    if (nums.length < 1) {
        throw new Error("can't be empty");
    }
    var min = nums[0];
    var max = nums[0];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        min = Math.min(min, num);
        max = Math.max(max, num);
    }
    return [min, max];
}
var res = minmax([1, 2, 3, 4]);
console.log(res);
// console.log(res[2]);
// räknar hur många av talet "num" det finns i "numbers"
// returnerar antalet
//
// function countSame(num, numbers)
console.log(countSame(5, [1, 2, 3, 4, 5]));
