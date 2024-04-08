import { expect, test } from 'bun:test';
import { getFireWoodStacks } from '.';

const cases = [
    [0,0],
    [32,8]
]

test.each(cases)
("getFireWoodStacks", (a,b) => {
    expect(getFireWoodStacks(a)).toBe(b);
})