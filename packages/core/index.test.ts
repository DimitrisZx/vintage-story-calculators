import { expect, test } from "bun:test";
import { getApproximateCharcoal, getFireWoodStacks } from ".";

const fireWoodStacksCases = [
  [0, 0],
  [32, 8],
];

const charcoalCases: [number, boolean | undefined, number][] = [
  [32, false, 128],
  [32, true, 224],
  [32, undefined, 176],
];

test.each(fireWoodStacksCases)("getFireWoodStacks", (a, b) => {
  expect(getFireWoodStacks(a)).toBe(b);
});

test.each(charcoalCases)("getApproximateCharcoal", (a, b, result) => {
  expect(getApproximateCharcoal(a, b)).toBe(result);
});

test("Integration", () => {
  const logs = 4;
  const fireWoodStacks = getFireWoodStacks(logs);
  const charcoal = getApproximateCharcoal(fireWoodStacks, false);
  expect(charcoal).toBe(4);
});
