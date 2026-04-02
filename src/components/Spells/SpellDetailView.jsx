import { useState } from 'react'
import { rollD20, findMatchingResult } from '../../utils/diceRoller'
import { getModifier, formatModifier } from '../../data/gameTables'
import CollapsibleSection from './CollapsibleSection'
import SpellResultRow from './SpellResultRow'

export default function SpellDetailView({ spell, character, updateSpell, onBack }) {
  const [rollState, setRollState] = useState(null)
  // rollState: { die: number, modifier: number, total: number, result: object|null }

  const intMod = getModifier(character.intelligence)

  function handleRoll() {
    const die = rollD20()
    const total = die + intMod + character.spellCheckBonus
    const result = findMatchingResult(spell.results, total)
    setRollState({ die, modifier: intMod + character.spellCheckBonus, total, result })
  }

  return (
    <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

      {/* Back + Title */}
      <div>
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6aaa6a', fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', padding: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          ‹ Spells
        </button>
        <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '22px', fontWeight: 500, color: '#e8e0d0' }}>
          {spell.name}
        </div>
      </div>

      {/* Metadata grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {[
          { label: 'Level',        value: spell.level },
          { label: 'Range',        value: spell.range },
          { label: 'Duration',     value: spell.duration },
          { label: 'Casting Time', value: spell.castingTime },
          { label: 'Save',         value: spell.save },
        ].map(({ label, value }) => (
          <div key={label} style={{ background: '#1a1a1a', borderRadius: '8px', padding: '10px 12px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>{label}</div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', color: '#e8e0d0' }}>{value}</div>
          </div>
        ))}
      </div>

      {/* General description */}
      <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '14px', color: '#aaa', fontStyle: 'italic', lineHeight: '1.6' }}>
        {spell.general}
      </div>

      {/* Session toggles */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => updateSpell(spell.id, { isLost: !spell.isLost })}
          style={{
            ...toggleBtn,
            background: spell.isLost ? '#3a1a1a' : '#1a1a1a',
            color: spell.isLost ? '#cc4444' : '#666',
            border: spell.isLost ? '1px solid #cc4444' : '1px solid #333',
          }}
        >
          Lost
        </button>
        <button
          onClick={() => updateSpell(spell.id, { isCorrupted: !spell.isCorrupted })}
          style={{
            ...toggleBtn,
            background: spell.isCorrupted ? '#2a1a3a' : '#1a1a1a',
            color: spell.isCorrupted ? '#9966cc' : '#666',
            border: spell.isCorrupted ? '1px solid #9966cc' : '1px solid #333',
          }}
        >
          Corrupted
        </button>
      </div>

      {/* Spell Check Roller */}
      <div style={{ background: '#1a1a1a', borderRadius: '8px', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '14px', color: rollState ? '#e8e0d0' : '#444', flex: 1 }}>
          {rollState
            ? `d20 (${rollState.die}) ${rollState.modifier >= 0 ? '+' : ''}${rollState.modifier} (INT) = ${rollState.total}`
            : 'Roll spell check'}
        </div>
        <button
          onClick={handleRoll}
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            padding: '8px 14px',
            borderRadius: '6px',
            border: '1px solid #6aaa6a',
            background: 'none',
            color: '#6aaa6a',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          Roll
        </button>
      </div>

      {/* Collapsible sections */}
      <div>
        <CollapsibleSection title="Manifestation">{spell.manifestation}</CollapsibleSection>
        <CollapsibleSection title="Corruption">{spell.corruption}</CollapsibleSection>
        <CollapsibleSection title="Misfire">{spell.misfire}</CollapsibleSection>
      </div>

      {/* Spell Results */}
      <div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
          Spell Results
        </div>
        {spell.results.map((row, i) => (
          <SpellResultRow
            key={i}
            row={row}
            highlightedResult={rollState?.result ?? null}
          />
        ))}
      </div>

    </div>
  )
}

const toggleBtn = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  padding: '8px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
}
