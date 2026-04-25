import { X, MessageCircle } from 'lucide-react'
import { BRAND, T } from '../../utils/helpers'
import { openWhatsApp } from '../../utils/whatsapp'

const ORDER_TYPES = [
  { k: 'Eat In',   en: 'Eat In',   ar: 'داخل المطعم', icon: '🍽️' },
  { k: 'Takeaway', en: 'Takeaway', ar: 'تيك أواي',    icon: '🥡'  },
]

export default function CheckoutModal({ cart, total, lang, orderType, setOrderType, onClose }) {
  const canSend = !!orderType

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ background: 'white', borderRadius: 24, width: '100%', maxWidth: 460, padding: 28, maxHeight: '90vh', overflowY: 'auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <h3 style={{ margin: 0, fontWeight: 900, fontSize: 21, color: '#111' }}>{T(lang, 'Almost there!', 'تقريبًا وصلنا!')}</h3>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {ORDER_TYPES.map(ot => (
              <button key={ot.k} onClick={() => setOrderType(ot.k)}
                style={{
                  border: `2px solid ${orderType === ot.k ? BRAND : '#eee'}`,
                  borderRadius: 14, padding: '18px 10px',
                  background: orderType === ot.k ? '#fdf5f5' : 'white',
                  cursor: 'pointer', textAlign: 'center', transition: 'all .2s',
                }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{ot.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 14, color: orderType === ot.k ? BRAND : '#333' }}>
                  {T(lang, ot.en, ot.ar)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div style={{ borderTop: '1px solid #f5f5f5', paddingTop: 14, marginBottom: 18 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: '#aaa', marginBottom: 10, letterSpacing: 0.5, textTransform: 'uppercase' }}>
            {T(lang, 'Order Summary', 'ملخص الطلب')}
          </div>
          {cart.map(c => (
            <div key={c.key} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #fafafa', fontSize: 13 }}>
              <div>
                <span style={{ fontWeight: 700 }}>{T(lang, c.en, c.ar)}</span>
                {c.upgrade?.key && c.upgrade.key !== 'regular' && (
                  <span style={{ color: '#bbb' }}> ({T(lang, c.upgrade.en, c.upgrade.ar)})</span>
                )}
                {c.sauce && <span style={{ color: '#bbb' }}> · {T(lang, c.sauce.en, c.sauce.ar)}</span>}
                <span style={{ color: '#ccc' }}> ×{c.qty}</span>
              </div>
              <span style={{ fontWeight: 800, flexShrink: 0, marginLeft: 8 }}>{c.price * c.qty} EGP</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, fontSize: 19, marginTop: 12 }}>
            <span>{T(lang, 'Total', 'المجموع')}</span>
            <span style={{ color: BRAND }}>{total} EGP</span>
          </div>
        </div>

        {/* WhatsApp */}
        <button onClick={() => openWhatsApp(cart, total, orderType)} disabled={!canSend}
          style={{
            width: '100%', background: canSend ? '#25d366' : '#ddd', color: 'white',
            border: 'none', borderRadius: 13, padding: '15px 0', fontWeight: 900, fontSize: 15,
            cursor: canSend ? 'pointer' : 'not-allowed',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'all .2s',
          }}
          onMouseEnter={e => { if (canSend) e.currentTarget.style.background = '#1da851' }}
          onMouseLeave={e => { if (canSend) e.currentTarget.style.background = '#25d366' }}>
          <MessageCircle size={19} />
          {T(lang, 'Confirm via WhatsApp', 'تأكيد عبر واتساب')}
        </button>
        {!canSend && (
          <p style={{ textAlign: 'center', fontSize: 12, color: '#e57373', marginTop: 10 }}>
            {T(lang, "Please select how you'd like your order", 'اختار طريقة استلام طلبك')}
          </p>
        )}
      </div>
    </div>
  )
}