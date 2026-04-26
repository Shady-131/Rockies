import { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { BRAND, T } from '../utils/helpers'

const NAV_LINKS = [
  { k: 'home',    en: 'Home',    ar: 'الرئيسية' },
  { k: 'menu',    en: 'Menu',    ar: 'المنيو'   },
  { k: 'about',   en: 'About',   ar: 'عن روكيز' },
  { k: 'contact', en: 'Contact', ar: 'تواصل'    },
]

export default function NavBar({ page, goTo, lang, setLang, cartCount, onCart }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (k) => {
    goTo(k)
    setMobileOpen(false)
  }

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: 'white', borderBottom: '1px solid #f0eded',
      boxShadow: '0 1px 16px rgba(168,16,16,0.06)',
    }}>
      {/* ── Main bar ── */}
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 62,
      }}>

        {/* Logo */}
        <button onClick={() => handleNav('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 9, padding: 0, flexShrink: 0 }}>
          <Logo size={42} />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontWeight: 900, fontSize: 14, color: '#1a1a1a', letterSpacing: 0.5 }}>ROCKIES</div>
            <div style={{ fontSize: 10, color: '#aaa', fontWeight: 600 }}>روكيز</div>
          </div>
        </button>

        {/* Desktop links */}
        <div className="nav-links-desktop" style={{ gap: 2, alignItems: 'center' }}>
          {NAV_LINKS.map(l => (
            <button key={l.k} onClick={() => handleNav(l.k)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '6px 11px', fontWeight: 700, fontSize: 13,
                color: page === l.k ? BRAND : '#666',
                borderBottom: page === l.k ? `2px solid ${BRAND}` : '2px solid transparent',
                transition: 'all .2s', whiteSpace: 'nowrap',
              }}>
              {T(lang, l.en, l.ar)}
            </button>
          ))}
          <button onClick={() => handleNav('order')}
            style={{ marginLeft: 8, background: BRAND, color: 'white', border: 'none', borderRadius: 10, padding: '7px 16px', fontWeight: 900, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all .2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#7a0000'}
            onMouseLeave={e => e.currentTarget.style.background = BRAND}>
            {T(lang, 'Order Now', 'اطلب الآن')}
          </button>
        </div>

        {/* Right controls */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
          <button onClick={() => setLang(l => l === 'en' ? 'ar' : 'en')}
            style={{ background: '#f5f5f5', border: 'none', borderRadius: 8, padding: '5px 10px', fontWeight: 700, fontSize: 12, color: '#555', cursor: 'pointer' }}>
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
          <button onClick={onCart}
            style={{ position: 'relative', background: BRAND, border: 'none', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white', transition: 'all .2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#7a0000'}
            onMouseLeave={e => e.currentTarget.style.background = BRAND}>
            <ShoppingCart size={17} />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: -5, right: -5, background: '#f59e0b', color: '#111', borderRadius: '50%', width: 18, height: 18, fontSize: 10, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cartCount}
              </span>
            )}
          </button>
          {/* Hamburger */}
          <button className="hamburger-btn"
            onClick={() => setMobileOpen(o => !o)}
            style={{ background: '#f5f5f5', border: 'none', borderRadius: 10, width: 38, height: 38, alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#333' }}>
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`mobile-nav-drawer${mobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(l => (
          <button key={l.k} onClick={() => handleNav(l.k)}
            className={`mobile-nav-btn${page === l.k ? ' active' : ''}`}
            style={{ color: page === l.k ? BRAND : '#333' }}>
            {T(lang, l.en, l.ar)}
          </button>
        ))}
        <button className="mobile-order-btn" onClick={() => handleNav('order')}>
          {T(lang, '🍗 Order Now', '🍗 اطلب الآن')}
        </button>
      </div>
    </nav>
  )
}