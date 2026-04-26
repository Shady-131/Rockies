import Logo from './Logo'
import { IGIcon, TTIcon, FBIcon } from './SocialIcons'
import { T } from '../utils/helpers'

const NAV_LINKS = [
  { k: 'home',    en: 'Home',      ar: 'الرئيسية' },
  { k: 'menu',    en: 'Menu',      ar: 'المنيو'   },
  { k: 'order',   en: 'Order Now', ar: 'اطلب الآن'},
  { k: 'about',   en: 'About Us',  ar: 'عن روكيز' },
  { k: 'contact', en: 'Contact',   ar: 'تواصل'    },
]

export default function Footer({ lang, goTo }) {
  return (
    <footer style={{ background: '#0f0f0f', color: 'white', padding: '48px 20px 28px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="footer-grid" style={{ marginBottom: 44 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
              <Logo size={46} inverted />
              <div>
                <div style={{ fontWeight: 900, fontSize: 15, color: 'white' }}>ROCKIES</div>
                <div style={{ fontSize: 11, color: '#555' }}>روكيز</div>
              </div>
            </div>
            <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, maxWidth: 200, margin: 0 }}>
              {T(lang, 'Crispy fried chicken made with passion in the heart of Maadi.', 'فراخ مقلية بحب من قلب المعادي.')}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 11, color: '#555', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>
              {T(lang, 'Navigate', 'روابط')}
            </div>
            {NAV_LINKS.map(l => (
              <button key={l.k} onClick={() => goTo(l.k)}
                style={{ display: 'block', background: 'none', border: 'none', color: '#666', fontWeight: 600, fontSize: 13, cursor: 'pointer', padding: '4px 0', textAlign: 'left', transition: 'color .2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = '#666'}>
                {T(lang, l.en, l.ar)}
              </button>
            ))}
          </div>

          {/* Contact — phone only, no WhatsApp */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 11, color: '#555', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>
              {T(lang, 'Contact', 'تواصل')}
            </div>
            <a href="tel:01501044604"
              style={{ color: '#ccc', fontSize: 14, display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none', fontWeight: 600, marginBottom: 8 }}>
              📞 01501044604
            </a>
            <a href="https://maps.app.goo.gl/J67b6NooijHUG7867?g_st=ic" target="_blank" rel="noreferrer"
              style={{ color: '#666', fontSize: 13, display: 'block', textDecoration: 'none' }}>
              📍 {T(lang, 'Maadi, Cairo', 'المعادي، القاهرة')}
            </a>
          </div>

          {/* Social */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 11, color: '#555', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              {T(lang, 'Follow', 'تابعنا')}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="https://www.instagram.com/rockies.eg" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <IGIcon size={17} />
                <span style={{ color: '#777', fontSize: 13 }}>@rockies.eg</span>
              </a>
              <a href="https://www.tiktok.com/@rockies.eg" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <TTIcon size={17} />
                <span style={{ color: '#777', fontSize: 13 }}>@rockies.eg</span>
              </a>
              <a href="https://www.facebook.com/rockies.eg" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <FBIcon size={17} />
                <span style={{ color: '#777', fontSize: 13 }}>rockies.eg</span>
              </a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: 22, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ color: '#3a3a3a', fontSize: 12, margin: 0 }}>© 2025 Rockies. All rights reserved.</p>
          <p style={{ color: '#3a3a3a', fontSize: 12, margin: 0 }}>{T(lang, 'Made with ❤️ in Maadi, Cairo', 'صُنع بحب في المعادي، القاهرة')}</p>
        </div>
      </div>
    </footer>
  )
}