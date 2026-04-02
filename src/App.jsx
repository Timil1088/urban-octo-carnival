import { useState, useRef } from 'react'
import { useCharacter } from './hooks/useCharacter'
import StatsView from './components/Stats/StatsView'
import SpellListView from './components/Spells/SpellListView'
import SpellDetailView from './components/Spells/SpellDetailView'

export default function App() {
  const [activeTab, setActiveTab] = useState('stats')
  const [selectedSpellId, setSelectedSpellId] = useState(null)
  const { character, spells, updateCharacter, updateSpell } = useCharacter()
  const scrollRef = useRef(null)

  function scrollToTop() {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }

  function handleSelectSpell(id) {
    setSelectedSpellId(id)
    scrollToTop()
  }

  function handleBackToList() {
    setSelectedSpellId(null)
    scrollToTop()
  }

  function handleTabChange(tab) {
    setActiveTab(tab)
    setSelectedSpellId(null)
    scrollToTop()
  }

  const selectedSpell = spells.find((s) => s.id === selectedSpellId) ?? null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: '#0f0f0f', color: '#e8e0d0' }}>
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto' }}>
        {activeTab === 'stats' && (
          <StatsView character={character} updateCharacter={updateCharacter} />
        )}
        {activeTab === 'spells' && !selectedSpell && (
          <SpellListView spells={spells} onSelectSpell={handleSelectSpell} />
        )}
        {activeTab === 'spells' && selectedSpell && (
          <SpellDetailView
            spell={selectedSpell}
            character={character}
            updateSpell={updateSpell}
            onBack={handleBackToList}
          />
        )}
      </div>

      <nav style={{
        display: 'flex',
        borderTop: '1px solid #2a2a2a',
        background: '#0f0f0f',
        flexShrink: 0,
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}>
        {['stats', 'spells'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            style={{
              flex: 1,
              padding: '14px 0',
              background: 'none',
              border: 'none',
              color: activeTab === tab ? '#6aaa6a' : '#666',
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              cursor: 'pointer',
            }}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  )
}
