import { X, Phone } from 'lucide-react'
import { BRAND, T } from '../../utils/helpers'
import { PHONE_NUMBER } from '../../utils/whatsapp'

const ORDER_TYPES = [
  { k: 'Eat In',   en: 'Eat In',   ar: 'داخل المطعم', icon: '🍽️' },
  { k: 'Takeaway', en: 'Takeaway', ar: 'تيك أواي',    icon: '🥡'  },
]

export default function CheckoutModal({ cart, total, lang, orderType, setOrderType, onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ background: 'white', borderRadius: 24, width: '100%', maxWidth: 460, padding: 28, maxHeight: '90vh', overflowY: 'auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <h3 style={{ margin: 0, fontWeight: 900, fontSize: 21, color: '#111' }}>
            {T(lang, 'Your Order', 'طلبك')}
          </h3>
          <button onClick={onClose}
            style={{ background: '#f5f5f5', border: 'none', borderRadius: '50%', width: 34, height: 34, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={17} />
          </button>
        </div>

        {/* Order type */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: '#555', marginBottom: 12 }}>
            {T(lang, 'How are you having it?', 'هتاكله إزاي؟')}
          </div>
          <div className="checkout-type-grid" style={{ display: 'grid', gap: 12 }}>
            {ORDER_TYPES.map(ot => (
              <button key={ot.k} onClick={() => setOrderType(ot.k)}
                style={{ border: `2px solid ${orderType === ot.k ? BRAND : '#eee'}`, borderRadius: 14, padding: '16px 10px', background: orderType === ot.k ? '#fdf5f5' : 'white', cursor: 'pointer', textAlign: 'center', transition: 'all .2s' }}>
                <div style={{ fontSize: 26, marginBottom: 6 }}>{ot.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 14, color: orderType === ot.k ? BRAND : '#333' }}>
                  {T(lang, ot.en, ot.ar)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Order summary */}
        <div style={{ borderTop: '1px solid #f5f5f5', paddingTop: 14, marginBottom: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 11, color: '#aaa', marginBottom: 10, letterSpacing: 1, textTransform: 'uppercase' }}>
            {T(lang, 'Order Summary', 'ملخص الطلب')}
          </div>
          {cart.map(c => (
            <div key={c.key} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #fafafa', fontSize: 13 }}>
              <div style={{ flex: 1, paddingRight: 8 }}>
                <span style={{ fontWeight: 700 }}>{T(lang, c.en, c.ar)}</span>
                {c.upgrade?.key && c.upgrade.key !== 'regular' && (
                  <span style={{ color: '#bbb' }}> ({T(lang, c.upgrade.en, c.upgrade.ar)})</span>
                )}
                {c.sauce && <span style={{ color: '#bbb' }}> · {T(lang, c.sauce.en, c.sauce.ar)}</span>}
                <span style={{ color: '#ccc' }}> ×{c.qty}</span>
              </div>
              <span style={{ fontWeight: 800, flexShrink: 0 }}>{c.price * c.qty} EGP</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, fontSize: 20, marginTop: 14 }}>
            <span>{T(lang, 'Total', 'المجموع')}</span>
            <span style={{ color: BRAND }}>{total} EGP</span>
          </div>
        </div>

        {/* Phone CTA */}
        <div style={{ background: '#fdf0f0', border: `1.5px solid #f5d5d5`, borderRadius: 14, padding: '18px 20px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 14px', fontWeight: 700, fontSize: 14, color: '#555', lineHeight: 1.6 }}>
            {T(lang,
              'Ready to place your order? Give us a call and we\'ll take care of the rest.',
              'جاهز تطلب؟ اتصل بينا وإحنا نكمل الباقي.'
            )}
          </p>
          <a href={`tel:${PHONE_NUMBER}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: BRAND, color: 'white', textDecoration: 'none', borderRadius: 13, padding: '13px 32px', fontWeight: 900, fontSize: 16, transition: 'background .2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#7a0000'}
            onMouseLeave={e => e.currentTarget.style.background = BRAND}>
            <Phone size={18} /> {PHONE_NUMBER}
          </a>
          {orderType && (
            <p style={{ margin: '12px 0 0', fontSize: 12, color: '#bbb' }}>
              {T(lang, `Mention: ${orderType}`, `أذكر: ${orderType === 'Eat In' ? 'داخل المطعم' : 'تيك أواي'}`)}
            </p>
          )}
        </div>

      </div>
    </div>
  )
}