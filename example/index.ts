import { breakpointToIndex, indexToBreakpoint, breakpointValueRange, breakpointComparisonRange } from "@ptolemy2002/bs-utils";

function arrayEquality(a: any[], b: any[]): boolean {
    return a.length === b.length && a.every((val, index) => val === b[index]);
}

console.assert(breakpointToIndex("xs") === 0, "Test 1");
console.assert(breakpointToIndex("sm") === 1, "Test 2");
console.assert(breakpointToIndex("md") === 2, "Test 3");
console.assert(breakpointToIndex("lg") === 3, "Test 4");
console.assert(breakpointToIndex("xl") === 4, "Test 5");
console.assert(breakpointToIndex("xxl") === 5, "Test 6");

console.assert(indexToBreakpoint(0) === "xs", "Test 7");
console.assert(indexToBreakpoint(1) === "sm", "Test 8");
console.assert(indexToBreakpoint(2) === "md", "Test 9");
console.assert(indexToBreakpoint(3) === "lg", "Test 10");
console.assert(indexToBreakpoint(4) === "xl", "Test 11");
console.assert(indexToBreakpoint(5) === "xxl", "Test 12");

console.assert(arrayEquality(breakpointValueRange("xs"), [0, null]), "Test 13");
console.assert(arrayEquality(breakpointValueRange("sm"), [576, null]), "Test 14");
console.assert(arrayEquality(breakpointValueRange("md"), [768, null]), "Test 15");
console.assert(arrayEquality(breakpointValueRange("lg"), [992, null]), "Test 16");
console.assert(arrayEquality(breakpointValueRange("xl"), [1200, null]), "Test 17");
console.assert(arrayEquality(breakpointValueRange("xxl"), [1400, null]), "Test 18");

console.assert(arrayEquality(breakpointValueRange(0), [0, null]), "Test 19");
console.assert(arrayEquality(breakpointValueRange(1), [576, null]), "Test 20");
console.assert(arrayEquality(breakpointValueRange(2), [768, null]), "Test 21");
console.assert(arrayEquality(breakpointValueRange(3), [992, null]), "Test 22");
console.assert(arrayEquality(breakpointValueRange(4), [1200, null]), "Test 23");
console.assert(arrayEquality(breakpointValueRange(5), [1400, null]), "Test 24");

console.assert(arrayEquality(breakpointValueRange("xs", "sm"), [0, 767]), "Test 25");
console.assert(arrayEquality(breakpointValueRange("sm", "md"), [576, 991]), "Test 26");
console.assert(arrayEquality(breakpointValueRange("md", "lg"), [768, 1199]), "Test 27");
console.assert(arrayEquality(breakpointValueRange("lg", "xl"), [992, 1399]), "Test 28");
console.assert(arrayEquality(breakpointValueRange("xl", "xxl"), [1200, null]), "Test 29");

console.assert(arrayEquality(breakpointValueRange(0, 1), [0, 767]), "Test 30");
console.assert(arrayEquality(breakpointValueRange(1, 2), [576, 991]), "Test 31");
console.assert(arrayEquality(breakpointValueRange(2, 3), [768, 1199]), "Test 32");
console.assert(arrayEquality(breakpointValueRange(3, 4), [992, 1399]), "Test 33");
console.assert(arrayEquality(breakpointValueRange(4, 5), [1200, null]), "Test 34");

console.assert(arrayEquality(breakpointComparisonRange("xs", "same"), [0, 575]), "Test 35");
console.assert(arrayEquality(breakpointComparisonRange("sm", "same"), [576, 767]), "Test 36");
console.assert(arrayEquality(breakpointComparisonRange("md", "same"), [768, 991]), "Test 37");
console.assert(arrayEquality(breakpointComparisonRange("lg", "same"), [992, 1199]), "Test 38");
console.assert(arrayEquality(breakpointComparisonRange("xl", "same"), [1200, 1399]), "Test 39");
console.assert(arrayEquality(breakpointComparisonRange("xxl", "same"), [1400, null]), "Test 40");

console.assert(arrayEquality(breakpointComparisonRange("xs", "min"), [0, null]), "Test 41");
console.assert(arrayEquality(breakpointComparisonRange("sm", "min"), [576, null]), "Test 42");
console.assert(arrayEquality(breakpointComparisonRange("md", "min"), [768, null]), "Test 43");
console.assert(arrayEquality(breakpointComparisonRange("lg", "min"), [992, null]), "Test 44");
console.assert(arrayEquality(breakpointComparisonRange("xl", "min"), [1200, null]), "Test 45");
console.assert(arrayEquality(breakpointComparisonRange("xxl", "min"), [1400, null]), "Test 46");

console.assert(arrayEquality(breakpointComparisonRange("xs", "max"), [0, 575]), "Test 47");
console.assert(arrayEquality(breakpointComparisonRange("sm", "max"), [0, 767]), "Test 48");
console.assert(arrayEquality(breakpointComparisonRange("md", "max"), [0, 991]), "Test 49");
console.assert(arrayEquality(breakpointComparisonRange("lg", "max"), [0, 1199]), "Test 50");
console.assert(arrayEquality(breakpointComparisonRange("xl", "max"), [0, 1399]), "Test 51");
console.assert(arrayEquality(breakpointComparisonRange("xxl", "max"), [0, null]), "Test 52");

console.log("All Tests passed");