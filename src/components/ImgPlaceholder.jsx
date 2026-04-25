export default function ImgPlaceholder({ w, h, radius = 14, label = 'Photo' }) {
  return (
    <div style={{
      width: w, minHeight: h, borderRadius: radius, flexShrink: 0,
      background: '#fdf4f4', border: '1.5px dashed #ddbaba',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      color: '#caa0a0', gap: 8, overflow: 'hidden',
    }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      {label && (
        <span style={{ fontSize: 10, textAlign: 'center', padding: '0 10px', lineHeight: 1.5, color: '#c9a0a0' }}>
          {label}
        </span>
      )}
    </div>
  )
}