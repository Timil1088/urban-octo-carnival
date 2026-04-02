import { useState } from 'react'

export default function CollapsibleSection({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderTop: '1px solid #2a2a2a' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#e8e0d0',
        }}
      >
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888' }}>
          {title}
        </span>
        <span style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '16px',
          color: '#555',
          display: 'inline-block',
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.15s ease',
        }}>
          ›
        </span>
      </button>
      {open && (
        <div style={{ paddingBottom: '16px', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: '14px', color: '#aaa', lineHeight: '1.6' }}>
          {children}
        </div>
      )}
    </div>
  )
}
