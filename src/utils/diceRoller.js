export function rollD20() {
  return Math.floor(Math.random() * 20) + 1
}

export function findMatchingResult(results, total) {
  return results.find((r) => total >= r.minRoll && total <= r.maxRoll) ?? null
}
