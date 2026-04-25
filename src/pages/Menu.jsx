import { useState } from 'react'
import { Plus } from 'lucide-react'
import ImgPlaceholder from '../components/ImgPlaceholder'
import { MENU_DATA } from '../data/menu'
import { BRAND, T } from '../utils/helpers'

export default function MenuPage({ lang, openModal }) {
  const [activeCat, setActiveCat] = useState('sandwiches')
  const cat = MENU_DATA[activeCat]

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 28px 100px' }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: '#111', margin: 0, letterSpacing: '-.5px' }}>
          {T(lang, 'Our Menu', 'منيونا')}
        </h1>
        <p style={{ color: '#aaa', marginTop: 8, fontSize: 14 }}>{T(lang, 'Every item made fresh, every time.', 'كل طلب يُحضَّر بعناية فائقة.')}</p>
      </div>

      {/* Category tabs */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', marginBottom: 36, paddingBottom: 4 }}>
        {Object.keys(MENU_DATA).map(c => {
          const sel = activeCat === c
          return (
            <button key={c} onClick={() => setActiveCat(c)}
              style={{ whiteSpace: 'nowrap', padding: '7px 16px', borderRadius: 24, border: `1.5px solid ${sel ? BRAND : '#e8e5e5'}`, background: sel ? BRAND : 'white', color: sel ? 'white' : '#666', fontWeight: 700, fontSize: 12, cursor: 'pointer', transition: 'all .2s', flexShrink: 0 }}>
              {MENU_DATA[c].emoji} {T(lang, MENU_DATA[c].en, MENU_DATA[c].ar)}
            </button>
          )
        })}
      </div>

      {/* Category info */}
      <div style={{ marginBottom: 24, paddingBottom: 18, borderBottom: '1.5px solid #f8f3f3' }}>
        <h2 style={{ margin: 0, fontSize: 24, fontWeight: 900, color: BRAND }}>{cat.emoji} {T(lang, cat.en, cat.ar)}</h2>
        {cat.subEn && <p style={{ margin: '6px 0 0', color: '#888', fontSize: 13 }}>{T(lang, cat.subEn, cat.subAr)}</p>}
        {cat.hasSauce && <p style={{ margin: '3px 0 0', color: '#bbb', fontSize: 11, fontStyle: 'italic' }}>{T(lang, 'Includes choice of sauce', 'يشمل اختيار صلصة')}</p>}
        {cat.hasOptions && <p style={{ margin: '3px 0 0', color: '#bbb', fontSize: 11 }}>{T(lang, 'Upgrade options: Double / Combo +85 EGP', 'أبجريد: دبل / كومبو +٨٥ ج.م')}</p>}
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {cat.items.map(item => (
          <div key={item.id}
            style={{ background: 'white', borderRadius: 16, border: '1px solid #f5f0f0', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 18, transition: 'all .2s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(168,16,16,0.08)'; e.currentTarget.style.borderColor = '#eedede' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#f5f0f0' }}>
            <ImgPlaceholder w={84} h={84} radius={12} label="" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: '#111' }}>{T(lang, item.en, item.ar)}</div>
              {activeCat === 'sandwiches' && <div style={{ fontSize: 11, color: '#ccc', marginTop: 3 }}>{T(lang, 'Double / Combo upgrade +85 EGP', 'دبل / كومبو +٨٥ ج.م')}</div>}
              {(cat.hasSauce || item.hasSauce) && <div style={{ fontSize: 11, color: '#ccc', marginTop: 3 }}>{T(lang, 'Choose your sauce', 'اختار صلصتك')}</div>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10, flexShrink: 0 }}>
              <span style={{ fontSize: 19, fontWeight: 900, color: BRAND, whiteSpace: 'nowrap' }}>
                {item.price} <span style={{ fontSize: 11, fontWeight: 500, color: '#ccc' }}>EGP</span>
              </span>
              <button onClick={() => openModal(item, activeCat)}
                style={{ background: BRAND, color: 'white', border: 'none', borderRadius: 10, padding: '7px 18px', fontWeight: 800, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, transition: 'all .15s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#7a0000'}
                onMouseLeave={e => e.currentTarget.style.background = BRAND}>
                <Plus size={13} /> {T(lang, 'Add', 'أضف')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}