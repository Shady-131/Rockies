import { ArrowRight } from 'lucide-react'
import ImgPlaceholder from '../components/ImgPlaceholder'
import { BRAND, T } from '../utils/helpers'

const STEPS = [
  { n: '01', en: 'Browse Menu',         ar: 'تصفح المنيو'     },
  { n: '02', en: 'Add to Cart',         ar: 'أضف للسلة'       },
  { n: '03', en: 'Confirm via WhatsApp',ar: 'أكد عبر واتساب' },
]

export default function OrderNowPage({ lang, goTo }) {
  return (
    <div style={{ minHeight: '82vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 28px', background: 'white' }}>
      <ImgPlaceholder w={280} h={240} radius={20} label="Signature dish photography" />

      <div style={{ display: 'inline-block', background: '#fdf0f0', color: BRAND, fontWeight: 700, fontSize: 10, letterSpacing: 2.5, padding: '5px 16px', borderRadius: 20, marginBottom: 18, marginTop: 32, textTransform: 'uppercase' }}>
        {T(lang, 'Start Your Order', 'ابدأ طلبك')}
      </div>

      <h1 style={{ fontSize: 34, fontWeight: 900, color: '#111', margin: '0 0 14px', letterSpacing: -1 }}>
        {T(lang, 'Build Your Perfect Meal', 'ابني وجبتك المثالية')}
      </h1>

      <p style={{ color: '#888', fontSize: 15, lineHeight: 1.8, maxWidth: 420, margin: '0 auto 40px' }}>
        {T(lang, 'Browse our full menu, customize your order, and confirm in seconds via WhatsApp.', 'تصفح منيونا الكامل، خصص طلبك، وأكد في ثوانٍ عبر واتساب.')}
      </p>

      {/* Steps */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 44, flexWrap: 'wrap', justifyContent: 'center' }}>
        {STEPS.map((s, i) => (
          <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {i > 0 && <div style={{ width: 24, height: 1, background: '#ddd' }} />}
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: BRAND, color: 'white', fontWeight: 900, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {s.n}
              </div>
              <span style={{ fontWeight: 700, fontSize: 13, color: '#444', whiteSpace: 'nowrap' }}>{T(lang, s.en, s.ar)}</span>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => goTo('menu')}
        style={{ background: BRAND, color: 'white', border: 'none', borderRadius: 14, padding: '17px 52px', fontSize: 17, fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, margin: '0 auto', boxShadow: '0 8px 28px rgba(168,16,16,0.28)', transition: 'all .2s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#7a0000'; e.currentTarget.style.transform = 'translateY(-2px)' }}
        onMouseLeave={e => { e.currentTarget.style.background = BRAND; e.currentTarget.style.transform = 'translateY(0)' }}>
        {T(lang, 'Browse Full Menu', 'استعرض المنيو الكامل')} <ArrowRight size={20} />
      </button>
    </div>
  )
}