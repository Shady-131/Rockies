import ImgPlaceholder from '../components/ImgPlaceholder'
import { BRAND, T } from '../utils/helpers'

const VALUES = (lang) => [
  { icon: '🔥', t: T(lang, 'Bold Flavours',   'نكهات جريئة'), d: T(lang, 'Every sauce crafted in-house with passion.',  'كل صلصة تُحضَّر عندنا بحب.')          },
  { icon: '✨', t: T(lang, 'Premium Quality',  'جودة عالية'),  d: T(lang, 'We never cut corners on ingredients.',        'لا مساومة على جودة مكوناتنا.')        },
  { icon: '❤️', t: T(lang, 'Made with Love',  'بُني بحب'),    d: T(lang, 'Every order treated with personal care.',     'كل طلب يُعامَل بعناية شخصية.')        },
]

export default function AboutPage({ lang }) {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 28px 80px', background: 'white' }}>

      {/* Story section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 56, alignItems: 'center', marginBottom: 68 }}>
        <div>
          <div style={{ display: 'inline-block', background: '#fdf0f0', color: BRAND, fontWeight: 700, fontSize: 10, letterSpacing: 2.5, padding: '5px 16px', borderRadius: 20, marginBottom: 20, textTransform: 'uppercase' }}>
            Our Story
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 900, color: '#111', margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-.5px' }}>
            {T(lang, 'Born in Maadi,\nMade for Everyone.', 'وُلدنا في المعادي،\nوصُنعنا للجميع.')}
          </h1>
          <p style={{ color: '#666', lineHeight: 1.85, fontSize: 15, marginBottom: 16 }}>
            {T(lang,
              'Rockies was built on a single obsession — the perfect piece of fried chicken. Crispy on the outside, juicy on the inside, bold in every bite.',
              'روكيز بُنيت على هوس واحد — القطعة المثالية من الفراخ المقلية. مقرمشة من الخارج، عصيرية من الداخل، جريئة في كل قضمة.'
            )}
          </p>
          <p style={{ color: '#666', lineHeight: 1.85, fontSize: 15 }}>
            {T(lang,
              "We believe great food isn't complicated — it's consistent, honest, and made with care. That's the Rockies promise.",
              "نؤمن أن الطعام الرائع ليس معقدًا — بل متسق وصادق ومصنوع باهتمام. هذا وعد روكيز."
            )}
          </p>
        </div>
        <ImgPlaceholder w="100%" h={360} radius={20} label="Restaurant or team photography" />
      </div>

      {/* Values */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 18 }}>
        {VALUES(lang).map(({ icon, t, d }) => (
          <div key={t} style={{ background: '#fafafa', border: '1px solid #f0eded', borderRadius: 16, padding: '26px 22px', textAlign: 'center' }}>
            <div style={{ fontSize: 30, marginBottom: 12 }}>{icon}</div>
            <div style={{ fontWeight: 800, fontSize: 15, color: '#111', marginBottom: 8 }}>{t}</div>
            <div style={{ color: '#aaa', fontSize: 13, lineHeight: 1.65 }}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  )
}