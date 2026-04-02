import { useState } from 'react'

export default function SpellResultRow({ row, highlightedResult }) {
  const isHighlighted = highlightedResult
    ? row.minRoll === highlightedResult.minRoll
    : false

  const [open, setOpen] = useState(false)

  // Auto-expand when highlighted
  const isOpen = isHighlighted || open

  const rangeLabel = row.minRoll === row.maxRoll
    ? `${row.minRoll}`
    : `${row.minRoll}–${row.maxRoll}`

  const accentColor = '#6aaa6a'

  return (
    <div style={{ borderTop: '1px solid #2a2a2a' }}>
      <button
        onClick={() => !isHighlighted && setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 0',
          background: 'none',
          border: 'none',
          cursor: isHighlighted ? 'default' : 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '13px',
          fontWeight: 600,
          color: isHighlighted ? accentColor : '#555',
          minWidth: '40px',
          flexShrink: 0,
        }}>
          {rangeLabel}
        </span>
        <span style={{
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontSize: '14px',
          color: isHighlighted ? accentColor : '#888',
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: isOpen ? 'normal' : 'nowrap',
        }}>
          {isOpen ? null : row.effect}
        </span>
        <span style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '16px',
          color: isHighlighted ? accentColor : '#444',
          display: 'inline-block',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.15s ease',
          flexShrink: 0,
        }}>
          ›
        </span>
      </button>
      {isOpen && (
        <div style={{
          paddingBottom: '14px',
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontSize: '14px',
          color: isHighlighted ? accentColor : '#aaa',
          lineHeight: '1.6',
        }}>
          {row.effect}
        </div>
      )}
    </div>
  )
}
