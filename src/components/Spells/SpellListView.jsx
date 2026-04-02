export default function SpellListView({ spells, onSelectSpell }) {
  return (
    <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={sectionLabel}>Spells Known</div>
      {spells.length === 0 && (
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', color: '#444', textAlign: 'center', marginTop: '40px' }}>
          No spells known
        </div>
      )}
      {spells.map((spell) => (
        <button
          key={spell.id}
          onClick={() => onSelectSpell(spell.id)}
          style={{
            ...spellRow,
            opacity: spell.isLost ? 0.4 : 1,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '16px', color: '#e8e0d0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {spell.name}
            </div>
            {spell.isLost && (
              <span style={{ ...tag, background: '#3a1a1a', color: '#cc4444', border: '1px solid #5a2a2a' }}>Lost</span>
            )}
            {spell.isCorrupted && (
              <span style={{ ...tag, background: '#2a1a3a', color: '#9966cc', border: '1px solid #4a2a5a' }}>Corrupted</span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Lvl {spell.level}
            </span>
            <span style={{ color: '#444', fontSize: '16px' }}>›</span>
          </div>
        </button>
      ))}
    </div>
  )
}

const sectionLabel = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: '11px',
  color: '#555',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: '4px',
}

const spellRow = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#1a1a1a',
  border: 'none',
  borderRadius: '8px',
  padding: '14px 16px',
  cursor: 'pointer',
  textAlign: 'left',
  width: '100%',
}

const tag = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  padding: '2px 6px',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
}
