export function getApproximateCharcoal(
  fireWoodStacks: number,
  optimistic?: boolean
) {
  if (fireWoodStacks < 1) return 0;

  const factor = (() => {
    if (optimistic === true) {
      return 7;
    } else if (optimistic === false) {
      return 4;
    }
    return 5.5;
  })();

  return fireWoodStacks * factor;
}
export function getFireWoodStacks(logs: number) {
  return logs / 4;
}

function main() {
  const logs = 4;
  const fireWoodStacks = getFireWoodStacks(logs);
  console.log(getApproximateCharcoal(fireWoodStacks, false));
}

main();
