import { X, Check } from 'lucide-react'
import { SAUCES } from '../../data/sauces'
import { UPGRADES } from '../../data/upgrades'
import { BRAND, T } from '../../utils/helpers'

export default function ItemModal({ modal, lang, selUpgrade, setSelUpgrade, selSauce, setSelSauce, onClose, onConfirm }) {
  if (!modal) return null

  const { item, cat, catData } = modal
  const isSandwich = cat === 'sandwiches'
  const needsSauce = catData?.hasSauce || item.hasSauce
  const canAdd     = !needsSauce || selSauce

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.55)', zIndex: 400, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 12 }}>
      <div style={{ background: 'white', borderRadius: 24, width: '100%', maxWidth: 460, padding: 26, maxHeight: '88vh', overflowY: 'auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 21, color: '#111' }}>{T(lang, item.en, item.ar)}</div>
            <div style={{ color: BRAND, fontWeight: 800, fontSize: 17, marginTop: 2 }}>{item.price} EGP</div>
          </div>
          <button onClick={onClose}
            style={{ background: '#f5f5f5', border: 'none', borderRadius: '50%', width: 34, height: 34, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={17} />
          </button>
        </div>

        {/* Sandwich upgrade */}
        {isSandwich && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#666', marginBottom: 9 }}>
              {T(lang, 'Upgrade your sandwich?', 'هتكبّر ساندوتشك؟')}
            </div>
            {UPGRADES.map(u => (
              <button key={u.key} onClick={() => setSelUpgrade(u)}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  width: '100%', border: `2px solid ${selUpgrade.key === u.key ? BRAND : '#eee'}`,
                  borderRadius: 12, padding: '10px 15px', marginBottom: 7,
                  background: selUpgrade.key === u.key ? '#fdf5f5' : 'white',
                  cursor: 'pointer', transition: 'all .15s',
                }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: selUpgrade.key === u.key ? BRAND : '#333' }}>
                  {T(lang, u.en, u.ar)}
                </span>
                <span style={{ fontSize: 13, color: '#bbb' }}>{u.extra ? `+${u.extra} EGP` : 'Base price'}</span>
              </button>
            ))}
          </div>
        )}

        {/* Sauce picker */}
        {needsSauce && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: '#666', marginBottom: 9 }}>
              {T(lang, 'Choose your sauce', 'اختار صلصتك')} <span style={{ color: 'red' }}>*</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
              {SAUCES.map(s => (
                <button key={s.en} onClick={() => setSelSauce(s)}
                  style={{
                    border: `2px solid ${selSauce?.en === s.en ? BRAND : '#eee'}`,
                    borderRadius: 10, padding: '9px 11px', fontSize: 13, fontWeight: 700,
                    color: selSauce?.en === s.en ? BRAND : '#555',
                    background: selSauce?.en === s.en ? '#fdf5f5' : 'white',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, transition: 'all .15s',
                  }}>
                  {selSauce?.en === s.en && <Check size={12} />}
                  {T(lang, s.en, s.ar)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add button */}
        <button onClick={onConfirm} disabled={!canAdd}
          style={{
            width: '100%', background: canAdd ? BRAND : '#e0e0e0', color: 'white',
            border: 'none', borderRadius: 13, padding: '14px 0',
            fontWeight: 900, fontSize: 15, cursor: canAdd ? 'pointer' : 'not-allowed', transition: 'all .2s',
          }}
          onMouseEnter={e => { if (canAdd) e.currentTarget.style.background = '#7a0000' }}
          onMouseLeave={e => { if (canAdd) e.currentTarget.style.background = BRAND }}>
          {T(lang, 'Add to Cart', 'أضف للسلة')} — {item.price + (selUpgrade?.extra || 0)} EGP
        </button>
      </div>
    </div>
  )
}