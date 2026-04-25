import { WA_NUMBER } from './helpers'

export const openWhatsApp = (cart, total, orderType) => {
  let msg = `🍗 *Rockies Order*\n\n📋 Order Type: *${orderType}*\n\n*Items:*\n`
  cart.forEach(c => {
    msg += `• ${c.en}`
    if (c.upgrade?.key && c.upgrade.key !== 'regular') msg += ` (${c.upgrade.en})`
    if (c.sauce) msg += ` — ${c.sauce.en}`
    msg += ` ×${c.qty} = ${c.price * c.qty} EGP\n`
  })
  msg += `\n💰 *Total: ${total} EGP*\nThank you! 🙏`
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
}