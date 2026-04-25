import { useState } from 'react'

export function useCart() {
  const [cart, setCart] = useState([])

  const addItem = (item, cat, upgrade, sauce) => {
    const price = item.price + (upgrade?.extra || 0)
    const key   = `${item.id}|${upgrade?.key || ''}|${sauce?.en || ''}`
    setCart(prev => {
      const existing = prev.find(c => c.key === key)
      if (existing) return prev.map(c => c.key === key ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { key, id: item.id, en: item.en, ar: item.ar, price, qty: 1, upgrade, sauce, cat }]
    })
  }

  const updateQty = (key, delta) =>
    setCart(prev =>
      prev.map(c => c.key === key ? { ...c, qty: c.qty + delta } : c).filter(c => c.qty > 0)
    )

  const cartCount = cart.reduce((s, c) => s + c.qty, 0)
  const total     = cart.reduce((s, c) => s + c.price * c.qty, 0)

  return { cart, addItem, updateQty, cartCount, total }
}