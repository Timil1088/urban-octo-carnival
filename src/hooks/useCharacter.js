import { useState } from 'react'
import { seedCharacter, seedSpells } from '../data/seedData'

const STORAGE_KEY = 'dcc_character'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // corrupted storage — fall through to seed
  }
  return null
}

function saveToStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function getInitialData() {
  const stored = loadFromStorage()
  if (stored) return stored
  const seed = { character: seedCharacter, spells: seedSpells }
  saveToStorage(seed)
  return seed
}

export function useCharacter() {
  const [data, setData] = useState(getInitialData)

  function updateCharacter(patch) {
    setData((prev) => {
      const next = { ...prev, character: { ...prev.character, ...patch } }
      saveToStorage(next)
      return next
    })
  }

  function updateSpell(id, patch) {
    setData((prev) => {
      const next = {
        ...prev,
        spells: prev.spells.map((s) => (s.id === id ? { ...s, ...patch } : s)),
      }
      saveToStorage(next)
      return next
    })
  }

  return {
    character: data.character,
    spells: data.spells,
    updateCharacter,
    updateSpell,
  }
}
