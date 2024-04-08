import { expect, test } from 'bun:test';
import { getApproximateCharcoal, getFireWoodStacks } from '.';

const fireWoodStacksCases = [
    [0,0],
    [32,8]
]

test.each(fireWoodStacksCases)
("getFireWoodStacks", (a,b) => {
    expect(getFireWoodStacks(a)).toBe(b);
})

const charcoalCases: [number, boolean|undefined, number][] = [
    [32, false, 128],
    [32, true, 224],
    [32, undefined, 176],
]

test.each(charcoalCases)("getApproximateCharcoal", (a, b, result) => {
    expect(getApproximateCharcoal(a,b)).toBe(result);
})