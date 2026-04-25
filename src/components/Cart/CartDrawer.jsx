import { X, Plus, Minus } from 'lucide-react'
import { BRAND, T } from '../../utils/helpers'

export default function CartDrawer({ cart, lang, total, onClose, onUpdateQty, onCheckout }) {
  const ar = lang === 'ar'

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 300, display: 'flex', justifyContent: ar ? 'flex-start' : 'flex-end' }}>
      <div style={{ background: 'white', width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', height: '100%', boxShadow: ar ? '8px 0 40px rgba(0,0,0,.15)' : '-8px 0 40px rgba(0,0,0,.15)' }}>

        {/* Header */}
        <div style={{ background: BRAND, padding: '17px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, color: 'white', fontWeight: 900, fontSize: 19 }}>{T(lang, 'Your Order', 'طلبك')}</h2>
          <button onClick={onClose}
            style={{ background: 'rgba(255,255,255,.18)', border: 'none', borderRadius: '50%', width: 34, height: 34, cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={17} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: 64 }}>
              <div style={{ fontSize: 48 }}>🛒</div>
              <p style={{ marginTop: 12, color: '#aaa', fontWeight: 600 }}>{T(lang, 'Your cart is empty', 'السلة فارغة')}</p>
            </div>
          ) : cart.map(c => (
            <div key={c.key} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 0', borderBottom: '1px solid #f8f5f5' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#111' }}>{T(lang, c.en, c.ar)}</div>
                {c.upgrade?.key && c.upgrade.key !== 'regular' && (
                  <div style={{ fontSize: 11, color: '#bbb' }}>{T(lang, c.upgrade.en, c.upgrade.ar)}</div>
                )}
                {c.sauce && (
                  <div style={{ fontSize: 11, color: '#bbb' }}>{T(lang, 'Sauce: ', 'صلصة: ')}{T(lang, c.sauce.en, c.sauce.ar)}</div>
                )}
                <div style={{ fontWeight: 900, color: BRAND, fontSize: 15, marginTop: 4 }}>{c.price * c.qty} EGP</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <button onClick={() => onUpdateQty(c.key, -1)}
                  style={{ width: 27, height: 27, borderRadius: '50%', border: '1.5px solid #ddd', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Minus size={12} />
                </button>
                <span style={{ fontWeight: 800, minWidth: 19, textAlign: 'center', fontSize: 14 }}>{c.qty}</span>
                <button onClick={() => onUpdateQty(c.key, 1)}
                  style={{ width: 27, height: 27, borderRadius: '50%', border: 'none', background: BRAND, color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Plus size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: '16px 18px', borderTop: '1.5px solid #f5f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, fontSize: 19, marginBottom: 14 }}>
              <span>{T(lang, 'Total', 'المجموع')}</span>
              <span style={{ color: BRAND }}>{total} EGP</span>
            </div>
            <button onClick={onCheckout}
              style={{ width: '100%', background: BRAND, color: 'white', border: 'none', borderRadius: 13, padding: '13px 0', fontWeight: 900, fontSize: 15, cursor: 'pointer', transition: 'all .2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#7a0000'}
              onMouseLeave={e => e.currentTarget.style.background = BRAND}>
              {T(lang, 'Proceed to Checkout', 'متابعة للدفع')}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}