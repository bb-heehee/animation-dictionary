import { useState, useCallback, useEffect, useRef } from 'react'
import { animations, categories } from './data'

/* ── Sidebar ──────────────────────────── */
function Sidebar({ activeCategory, onCategoryChange, animationCounts }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">애니메이션 사전</h1>
        <p className="sidebar-subtitle">CSS Animation Dictionary</p>
      </div>

      <nav className="sidebar-nav">
        <p className="sidebar-label">카테고리</p>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            <span className="sidebar-item-icon">{cat.icon}</span>
            <span className="sidebar-item-name">{cat.name}</span>
            <span className="sidebar-item-count">{animationCounts[cat.id] || 0}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p className="sidebar-stat">총 {animations.length}개 애니메이션</p>
      </div>
    </aside>
  )
}

/* ── AnimationCard ─────────────────────── */
function AnimationCard({ animation, onClick }) {
  const [isHovered, setIsHovered] = useState(false)
  const [animKey, setAnimKey] = useState(0)

  const handleMouseEnter = () => {
    setIsHovered(true)
    setAnimKey((k) => k + 1)
  }

  const categoryLabel = categories.find((c) => c.id === animation.category)?.name

  return (
    <button
      className="card"
      onClick={() => onClick(animation)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-preview">
        <div
          key={animKey}
          className={`preview-element ${isHovered ? `anim-${animation.id}` : ''}`}
        />
      </div>
      <div className="card-body">
        <p className="card-name">{animation.name}</p>
        <p className="card-name-ko">{animation.nameKo}</p>
        <div className="card-meta">
          <span className="card-duration">{animation.duration}</span>
          <span className="card-dot">·</span>
          <span className="card-easing">{animation.easing}</span>
        </div>
        <div className="card-tags">
          <span className="tag tag-category">{categoryLabel}</span>
          {animation.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </button>
  )
}

/* ── CodeBlock ─────────────────────────── */
function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = code
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="code-block">
      <pre><code>{code}</code></pre>
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? '복사됨!' : '복사'}
      </button>
    </div>
  )
}

/* ── AnimationDetail ───────────────────── */
function AnimationDetail({ animation, onClose }) {
  const [animKey, setAnimKey] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [bgMode, setBgMode] = useState('light')
  const overlayRef = useRef(null)

  const handleRestart = () => {
    setIsPlaying(true)
    setAnimKey((k) => k + 1)
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const categoryLabel = categories.find((c) => c.id === animation.category)?.name
  const isLoop = animation.iterationCount === 'infinite'
  const parsedDuration = parseFloat(animation.duration) / speed

  const bgClass = bgMode === 'dark' ? 'preview-bg-dark' : bgMode === 'grid' ? 'preview-bg-grid' : 'preview-bg-light'

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{animation.name}</h2>
          <p className="modal-title-ko">{animation.nameKo}</p>
          <p className="modal-description">{animation.description}</p>
        </div>

        {/* Preview */}
        <div className={`modal-preview ${bgClass}`}>
          <div
            key={animKey}
            className={`preview-element preview-element-lg ${isPlaying ? `anim-${animation.id}` : ''}`}
            style={{
              animationDuration: `${parsedDuration}s`,
              animationPlayState: isPlaying ? 'running' : 'paused',
              animationIterationCount: isLoop ? 'infinite' : '1',
            }}
          />
        </div>

        {/* Controls */}
        <div className="modal-controls">
          <div className="control-group">
            <button
              className={`control-btn ${isPlaying ? 'active' : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? '⏸ 정지' : '▶ 재생'}
            </button>
            <button className="control-btn" onClick={handleRestart}>↻ 다시</button>
          </div>

          <div className="control-group">
            {[0.25, 0.5, 1, 2].map((s) => (
              <button
                key={s}
                className={`control-btn speed-btn ${speed === s ? 'active' : ''}`}
                onClick={() => setSpeed(s)}
              >
                {s}x
              </button>
            ))}
          </div>

          <div className="control-group">
            {[
              { mode: 'light', label: '밝게' },
              { mode: 'dark', label: '어둡게' },
              { mode: 'grid', label: '격자' },
            ].map(({ mode, label }) => (
              <button
                key={mode}
                className={`control-btn ${bgMode === mode ? 'active' : ''}`}
                onClick={() => setBgMode(mode)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Properties */}
        <div className="modal-section">
          <h3 className="section-title">속성</h3>
          <div className="props-grid">
            <div className="prop">
              <span className="prop-label">Duration</span>
              <span className="prop-value">{animation.duration}</span>
            </div>
            <div className="prop">
              <span className="prop-label">Easing</span>
              <span className="prop-value">{animation.easing}</span>
            </div>
            <div className="prop">
              <span className="prop-label">카테고리</span>
              <span className="prop-value">{categoryLabel}</span>
            </div>
            <div className="prop">
              <span className="prop-label">반복</span>
              <span className="prop-value">{isLoop ? '무한' : '1회'}</span>
            </div>
          </div>
          <div className="detail-tags">
            {animation.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Code */}
        <div className="modal-section">
          <h3 className="section-title">CSS 코드</h3>
          <CodeBlock code={animation.cssCode} />
        </div>

        {/* Guide */}
        <div className="modal-section">
          <h3 className="section-title">사용 가이드</h3>
          <div className="guide-columns">
            <div className="guide-do">
              <p className="guide-label guide-label-do">Do</p>
              <ul className="guide-list">
                {animation.doList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="guide-dont">
              <p className="guide-label guide-label-dont">Don't</p>
              <ul className="guide-list">
                {animation.dontList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="modal-section">
          <h3 className="section-title">사용처</h3>
          <div className="use-cases">
            {animation.useCases.map((uc, i) => (
              <span key={i} className="use-case-chip">{uc}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── App ───────────────────────────────── */
export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedAnimation, setSelectedAnimation] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filteredAnimations = animations.filter((anim) => {
    const matchesCategory = activeCategory === 'all' || anim.category === activeCategory
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      !q ||
      anim.name.toLowerCase().includes(q) ||
      anim.nameKo.includes(searchQuery) ||
      anim.id.includes(q) ||
      anim.tags.some((t) => t.toLowerCase().includes(q)) ||
      anim.description.includes(searchQuery)
    return matchesCategory && matchesSearch
  })

  const animationCounts = {}
  animationCounts['all'] = animations.length
  categories.forEach((cat) => {
    if (cat.id !== 'all') {
      animationCounts[cat.id] = animations.filter((a) => a.category === cat.id).length
    }
  })

  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat)
    setSidebarOpen(false)
  }, [])

  return (
    <div className="app">
      <Sidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        animationCounts={animationCounts}
      />

      {/* Mobile sidebar toggle */}
      <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      {sidebarOpen && <div className="mobile-sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
      {sidebarOpen && (
        <div className="mobile-sidebar">
          <Sidebar
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            animationCounts={animationCounts}
          />
        </div>
      )}

      <main className="main">
        <div className="main-header">
          <div className="search-wrapper">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="이름, 태그, 속성으로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M10.5 3.5L3.5 10.5M3.5 3.5l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            )}
          </div>
          <p className="results-count">
            {filteredAnimations.length}개 애니메이션
          </p>
        </div>

        {filteredAnimations.length > 0 ? (
          <div className="grid">
            {filteredAnimations.map((anim) => (
              <AnimationCard
                key={anim.id}
                animation={anim}
                onClick={setSelectedAnimation}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="empty-icon">¯\_(ツ)_/¯</p>
            <p className="empty-text">검색 결과가 없습니다</p>
            <p className="empty-hint">다른 키워드로 검색해 보세요</p>
          </div>
        )}
      </main>

      {selectedAnimation && (
        <AnimationDetail
          animation={selectedAnimation}
          onClose={() => setSelectedAnimation(null)}
        />
      )}
    </div>
  )
}
