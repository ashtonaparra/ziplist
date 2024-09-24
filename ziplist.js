"use strict";
function zipList(list1, list2) {
    const merged = [];
    for (let i = 0; i < list1.length; i++) {
        merged.push(list1[i], list2[i]);
    }
    return merged;
}
function zipListTheFunctionalWay(list1, list2) {
    const merged = [];
    list1.forEach((element, index) => { merged.push(element, list2[index]); });
    return merged;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // a, 1, b, 2, c, 3
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // a, 1, b, 2, c, 3
