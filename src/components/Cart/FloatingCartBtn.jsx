import { ShoppingCart } from 'lucide-react'
import { BRAND, T } from '../../utils/helpers'

export default function FloatingCartBtn({ cartCount, total, lang, onClick }) {
  if (cartCount === 0) return null

  return (
    <button onClick={onClick}
      style={{
        position: 'fixed', bottom: 22, left: '50%', transform: 'translateX(-50%)',
        background: BRAND, color: 'white', border: 'none', borderRadius: 32,
        padding: '13px 30px', fontWeight: 900, fontSize: 14, cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 11,
        boxShadow: '0 8px 30px rgba(168,16,16,0.38)', zIndex: 150,
        whiteSpace: 'nowrap', transition: 'all .2s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#7a0000'}
      onMouseLeave={e => e.currentTarget.style.background = BRAND}>
      <ShoppingCart size={17} />
      {T(lang, 'View Cart', 'عرض السلة')} · {total} EGP
      <span style={{
        background: '#f59e0b', color: '#111', borderRadius: '50%',
        width: 21, height: 21, fontSize: 10, fontWeight: 900,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {cartCount}
      </span>
    </button>
  )
}