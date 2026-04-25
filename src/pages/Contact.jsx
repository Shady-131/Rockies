import { MapPin, MessageCircle, ChevronRight } from 'lucide-react'
import ImgPlaceholder from '../components/ImgPlaceholder'
import { IGIcon, TTIcon } from '../components/SocialIcons'
import { BRAND, T } from '../utils/helpers'

export default function ContactPage({ lang }) {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '60px 28px 80px', background: 'white' }}>
      <div style={{ textAlign: 'center', marginBottom: 52 }}>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: '#111', margin: '0 0 10px', letterSpacing: '-.5px' }}>
          {T(lang, 'Get in Touch', 'تواصل معنا')}
        </h1>
        <p style={{ color: '#aaa', fontSize: 14 }}>{T(lang, "We'd love to hear from you.", 'يسعدنا سماعك.')}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28 }}>

        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Location card */}
          <div style={{ background: 'white', border: '1px solid #f0eded', borderRadius: 16, padding: '22px 24px' }}>
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

          {/* WhatsApp card */}
          <div style={{ background: 'white', border: '1px solid #f0eded', borderRadius: 16, padding: '22px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 13 }}>
              <div style={{ width: 42, height: 42, borderRadius: 11, background: '#f0fdf6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MessageCircle size={19} color="#25d366" />
              </div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>{T(lang, 'WhatsApp & Phone', 'واتساب وهاتف')}</div>
            </div>
            <a href="https://wa.me/201501044604" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#25d366', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              📞 01501044604
            </a>
          </div>

          {/* Social card */}
          <div style={{ background: '#111', borderRadius: 16, padding: '22px 24px' }}>
            <div style={{ fontWeight: 800, fontSize: 14, color: 'white', marginBottom: 14 }}>{T(lang, 'Follow Us', 'تابعنا')}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="https://www.instagram.com/rockies.eg" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <IGIcon size={17} />
                </div>
                <span style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>@rockies.eg</span>
              </a>
              <a href="https://www.tiktok.com/@rockies.eg" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: '#010101', border: '1px solid #2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <TTIcon size={17} />
                </div>
                <span style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>@rockies.eg</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right column — map placeholder */}
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