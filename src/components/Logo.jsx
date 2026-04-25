import { BRAND } from '../utils/helpers'

export default function Logo({ size = 52, inverted = false }) {
  const bg = inverted ? BRAND  : 'white'
  const fg = inverted ? 'white' : BRAND
  const bd = inverted ? 'white' : BRAND

  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="31" fill={bg} stroke={bd} strokeWidth="2.8" />
      <circle cx="32" cy="32" r="26" fill="none" stroke={bd} strokeWidth="1.1" strokeDasharray="3 2" />
      <circle cx="32" cy="32" r="21" fill="none" stroke={bd} strokeWidth="0.7" strokeDasharray="1.8 2.5" />
      <circle cx="32" cy="32" r="5.5" fill="none" stroke={bd} strokeWidth="0.6" />
      <text x="32" y="28" textAnchor="middle" fontSize="9" fontWeight="900"
        fill={fg} fontFamily="Arial Black,Arial,sans-serif" letterSpacing="0.6">
        ROCKIES
      </text>
      <text x="32" y="41" textAnchor="middle" fontSize="8.5" fontWeight="700"
        fill={fg} fontFamily="Arial,sans-serif">
        روكيز
      </text>
    </svg>
  )
}