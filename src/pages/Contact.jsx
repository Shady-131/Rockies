import { MapPin, Phone, ChevronRight } from 'lucide-react'
import ImgPlaceholder from '../components/ImgPlaceholder'
import { IGIcon, TTIcon, FBIcon } from '../components/SocialIcons'
import { BRAND, T } from '../utils/helpers'
import { PHONE_NUMBER } from '../utils/whatsapp'

export default function ContactPage({ lang }) {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '60px 20px 80px', background: 'white' }}>
      <div style={{ textAlign: 'center', marginBottom: 52 }}>
        <h1 style={{ fontSize: 'clamp(26px,5vw,36px)', fontWeight: 900, color: '#111', margin: '0 0 10px', letterSpacing: '-.5px' }}>
          {T(lang, 'Get in Touch', 'تواصل معنا')}
        </h1>
        <p style={{ color: '#aaa', fontSize: 14 }}>{T(lang, "We'd love to hear from you.", 'يسعدنا سماعك.')}</p>
      </div>

      <div className="contact-grid">

        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Location */}
          <div style={{ background: 'white', border: '1px solid #f0eded', borderRadius: 16, padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 13 }}>
              <div style={{ width: 42, height: 42, borderRadius: 11, background: '#fdf0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={19} color={BRAND} />
              </div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>{T(lang, 'Maadi Branch', 'فرع المعادي')}</div>
            </div>
            <a href="https://maps.app.goo.gl/J67b6NooijHUG7867?g_st=ic" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: BRAND, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
              {T(lang, 'Open in Google Maps', 'افتح في خرائط جوجل')} <ChevronRight size={13} />
            </a>
          </div>

          {/* Phone — direct call, no WhatsApp */}
          <div style={{ background: 'white', border: '1px solid #f0eded', borderRadius: 16, padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 13 }}>
              <div style={{ width: 42, height: 42, borderRadius: 11, background: '#fdf0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={19} color={BRAND} />
              </div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>{T(lang, 'Call Us', 'اتصل بينا')}</div>
            </div>
            <a href={`tel:${PHONE_NUMBER}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: BRAND, fontWeight: 800, fontSize: 17, textDecoration: 'none' }}>
              {PHONE_NUMBER}
            </a>
            <p style={{ margin: '6px 0 0', color: '#aaa', fontSize: 12 }}>
              {T(lang, 'Call to place your order or ask any questions.', 'اتصل لتطلب أو لأي استفسار.')}
            </p>
          </div>

          {/* Social */}
          <div style={{ background: '#111', borderRadius: 16, padding: '20px 22px' }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: 'white', marginBottom: 16 }}>
              {T(lang, 'Follow Us', 'تابعنا')}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="https://www.instagram.com/rockies.eg" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                <IGIcon size={17} />
                <span style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>@rockies.eg</span>
              </a>
              <a href="https://www.tiktok.com/@rockies.eg" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                <TTIcon size={17} />
                <span style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>@rockies.eg</span>
              </a>
              <a href="https://www.facebook.com/rockies.eg" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
                <FBIcon size={17} />
                <span style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>rockies.eg</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div>
          <ImgPlaceholder w="100%" h={360} radius={16} label="Embed Google Map here" />
          <a href="https://maps.app.goo.gl/J67b6NooijHUG7867?g_st=ic" target="_blank" rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12, background: BRAND, color: 'white', padding: '13px 0', borderRadius: 12, textDecoration: 'none', fontWeight: 800, fontSize: 14, transition: 'all .2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#7a0000'}
            onMouseLeave={e => e.currentTarget.style.background = BRAND}>
            <MapPin size={17} /> {T(lang, 'Get Directions', 'احصل على الاتجاهات')}
          </a>
        </div>

      </div>
    </div>
  )
}