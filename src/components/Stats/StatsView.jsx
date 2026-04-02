import { getModifier, formatModifier } from '../../data/gameTables'

const ABILITY_LABELS = [
  { key: 'strength',     label: 'STR' },
  { key: 'agility',      label: 'AGI' },
  { key: 'stamina',      label: 'STA' },
  { key: 'personality',  label: 'PER' },
  { key: 'intelligence', label: 'INT' },
  { key: 'luck',         label: 'LCK' },
]

function hpColor(current, max) {
  const pct = current / max
  if (pct <= 0.25) return '#cc4444'
  if (pct <= 0.5)  return '#ccaa44'
  return '#6aaa6a'
}

export default function StatsView({ character, updateCharacter }) {
  const { hitPointsCurrent: hp, hitPointsMax: hpMax } = character

  function adjustHP(delta) {
    const next = Math.max(0, Math.min(hpMax, hp + delta))
    updateCharacter({ hitPointsCurrent: next })
  }

  return (
    <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* Header */}
      <div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '20px', fontWeight: 600, color: '#e8e0d0' }}>
          {character.name}
        </div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: '#666', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {character.class} · Level {character.level}
        </div>
      </div>

      {/* HP */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#1a1a1a', borderRadius: '8px', padding: '14px 16px' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Hit Points
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={() => adjustHP(-1)} style={stepperBtn}>−</button>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '28px', fontWeight: 600, color: hpColor(hp, hpMax), minWidth: '80px', textAlign: 'center' }}>
            {hp} <span style={{ fontSize: '16px', color: '#444' }}>/ {hpMax}</span>
          </div>
          <button onClick={() => adjustHP(1)} style={stepperBtn}>+</button>
        </div>
      </div>

      {/* Ability Scores */}
      <div>
        <div style={sectionLabel}>Ability Scores</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {ABILITY_LABELS.map(({ key, label }) => {
            const score = character[key]
            const mod = formatModifier(score)
            return (
              <div key={key} style={{ background: '#1a1a1a', borderRadius: '8px', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '22px', fontWeight: 600, color: '#e8e0d0' }}>{score}</div>
                </div>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '16px', color: getModifier(score) >= 0 ? '#6aaa6a' : '#cc4444' }}>
                  {mod}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Saving Throws */}
      <div>
        <div style={sectionLabel}>Saving Throws</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
          {[
            { label: 'Fort', value: character.fortitudeSave },
            { label: 'Ref',  value: character.reflexSave },
            { label: 'Will', value: character.willSave },
          ].map(({ label, value }) => (
            <div key={label} style={pillCard}>
              <div style={pillLabel}>{label}</div>
              <div style={pillValue}>{value >= 0 ? `+${value}` : value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AC & Speed */}
      <div>
        <div style={sectionLabel}>Combat</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {[
            { label: 'AC',    value: character.armorClass },
            { label: 'Speed', value: `${character.speed}'` },
          ].map(({ label, value }) => (
            <div key={label} style={pillCard}>
              <div style={pillLabel}>{label}</div>
              <div style={pillValue}>{value}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

const stepperBtn = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  border: '1px solid #333',
  background: '#1a1a1a',
  color: '#e8e0d0',
  fontSize: '20px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'IBM Plex Mono, monospace',
  lineHeight: 1,
}

const sectionLabel = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: '11px',
  color: '#555',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: '8px',
}

const pillCard = {
  background: '#1a1a1a',
  borderRadius: '8px',
  padding: '12px 14px',
  textAlign: 'center',
}

const pillLabel = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: '11px',
  color: '#666',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '4px',
}

const pillValue = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: '20px',
  fontWeight: 600,
  color: '#e8e0d0',
}
