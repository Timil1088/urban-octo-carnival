// DCC modifier table — not standard d20, do not change
const modifierTable = [
  { min: 3,  max: 3,  mod: -3 },
  { min: 4,  max: 5,  mod: -2 },
  { min: 6,  max: 8,  mod: -1 },
  { min: 9,  max: 12, mod:  0 },
  { min: 13, max: 15, mod:  1 },
  { min: 16, max: 17, mod:  2 },
  { min: 18, max: 18, mod:  3 },
]

export function getModifier(score) {
  const entry = modifierTable.find((e) => score >= e.min && score <= e.max)
  return entry ? entry.mod : 0
}

export function formatModifier(score) {
  const mod = getModifier(score)
  return mod >= 0 ? `+${mod}` : `${mod}`
}
