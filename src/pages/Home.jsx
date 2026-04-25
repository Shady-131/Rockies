import { ArrowRight } from 'lucide-react'
import ImgPlaceholder from '../components/ImgPlaceholder'
import { BRAND, T } from '../utils/helpers'

export default function HomePage({ lang, goTo }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 28px 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 48, alignItems: 'center' }}>

          <div style={{ order: lang === 'ar' ? 2 : 1 }}>
            <div className="anim-badge"
              style={{ display: 'inline-block', background: '#fdf0f0', color: BRAND, fontWeight: 700, fontSize: 10, letterSpacing: 2.5, padding: '5px 16px', borderRadius: 20, marginBottom: 22, textTransform: 'uppercase' }}>
              {T(lang, "Maadi's Finest Fried Chicken", 'الأفضل في المعادي')}
            </div>

            <h1 className="anim-h1"
              style={{ margin: '0 0 20px', fontSize: 'clamp(38px,5.5vw,60px)', fontWeight: 900, lineHeight: 1.07, color: '#111', letterSpacing: '-2px' }}>
              {lang === 'ar'
                ? <> مقرمش.<br /><span style={{ color: BRAND }}>جريء.</span><br />أسطوري.</>
                : <> Crispy.<br /><span style={{ color: BRAND }}>Bold.</span><br />Legendary.</>}
            </h1>

            <p className="anim-p"
              style={{ margin: '0 0 36px', fontSize: 15, color: '#666', lineHeight: 1.8, maxWidth: 340 }}>
              {T(lang, 'Handcrafted fried chicken made with passion. Every bite tells a story.', 'فراخ مقلية بحب واهتمام — كل قضمة لها حكاية.')}
            </p>

            <div className="anim-cta" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={() => goTo('order')}
                style={{ background: BRAND, color: 'white', border: 'none', borderRadius: 14, padding: '16px 38px', fontSize: 17, fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 28px rgba(168,16,16,0.28)', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#7a0000'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = BRAND; e.currentTarget.style.transform = 'translateY(0)' }}>
                {T(lang, 'Order Now', 'اطلب الآن')} <ArrowRight size={18} />
              </button>
              <button onClick={() => goTo('menu')}
                style={{ background: 'white', color: '#333', border: '1.5px solid #ddd', borderRadius: 14, padding: '16px 26px', fontSize: 15, fontWeight: 700, cursor: 'pointer', transition: 'all .2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = BRAND}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#ddd'}>
                {T(lang, 'View Menu', 'عرض المنيو')}
              </button>
            </div>
          </div>

          <div className="anim-img" style={{ order: lang === 'ar' ? 1 : 2 }}>
            <ImgPlaceholder w="100%" h={480} radius={24} label="Hero food photography — replace with high-resolution image" />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: '#fafafa', borderTop: '1px solid #f0eded', borderBottom: '1px solid #f0eded', padding: '24px 28px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', justifyContent: 'space-around', textAlign: 'center', gap: 20 }}>
          {[
            { n: '100%', l: T(lang, 'Fresh Daily',    'طازج يوميًا')   },
            { n: '6+',   l: T(lang, 'House Sauces',   'صوصات بيتية')  },
            { n: '∞',    l: T(lang, 'Bold Flavours',  'نكهات جريئة')  },
          ].map(({ n, l }) => (
            <div key={n}>
              <div style={{ fontSize: 28, fontWeight: 900, color: BRAND }}>{n}</div>
              <div style={{ fontSize: 12, color: '#999', marginTop: 3, fontWeight: 600, letterSpacing: 0.5 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured cards */}
      <section style={{ padding: '72px 28px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: '#111', margin: '0 0 10px', letterSpacing: '-.5px' }}>
            {T(lang, 'Our Signature Lineup', 'أبرز أطباقنا')}
          </h2>
          <p style={{ color: '#aaa', fontSize: 14 }}>{T(lang, 'Crafted for the bold.', 'صُنعت للجريئين.')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 22 }}>
          {[
            { label: T(lang, 'Sandwiches', 'ساندوتشات'),         desc: T(lang, 'Bite into happiness', 'عض في السعادة'),           img: T(lang, 'Sandwiches photography', 'صورة ساندوتشات')       },
            { label: T(lang, 'Fried Chicken Meals', 'وجبات فراخ مقلية'), desc: T(lang, 'Full meals, full flavour', 'وجبة كاملة ونكهة مكتملة'), img: T(lang, 'Fried Chicken photography', 'صورة فراخ مقلية') },
            { label: T(lang, 'Wings', 'وينجز'),                  desc: T(lang, 'Saucy & bold', 'حارة وجريئة'),                   img: T(lang, 'Wings photography', 'صورة وينجز')               },
          ].map(({ label, desc, img }) => (
            <div key={label} onClick={() => goTo('menu')}
              style={{ background: 'white', borderRadius: 20, border: '1px solid #f0eded', overflow: 'hidden', cursor: 'pointer', transition: 'all .25s' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 36px rgba(168,16,16,0.11)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <ImgPlaceholder w="100%" h={188} radius={0} label={img} />
              <div style={{ padding: '18px 20px 22px' }}>
                <div style={{ fontWeight: 900, fontSize: 16, color: '#111', marginBottom: 4 }}>{label}</div>
                <div style={{ color: '#aaa', fontSize: 13, marginBottom: 14 }}>{desc}</div>
                <span style={{ color: BRAND, fontWeight: 700, fontSize: 13 }}>{T(lang, 'Explore →', 'استكشف →')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}