import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import FloatingCartBtn from './components/Cart/FloatingCartBtn'
import CartDrawer from './components/Cart/CartDrawer'
import ItemModal from './components/Modals/ItemModal'
import CheckoutModal from './components/Modals/CheckoutModal'
import HomePage from './pages/Home'
import MenuPage from './pages/Menu'
import OrderNowPage from './pages/OrderNow'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import { useCart } from './hooks/useCart'
import { UPGRADES } from './data/upgrades'
import { MENU_DATA } from './data/menu'

export default function App() {
  const [page, setPage]                 = useState('home')
  const [lang, setLang]                 = useState('en')
  const [cartOpen, setCartOpen]         = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [modal, setModal]               = useState(null)
  const [selUpgrade, setSelUpgrade]     = useState(UPGRADES[0])
  const [selSauce, setSelSauce]         = useState(null)
  const [orderType, setOrderType]       = useState(null)

  const { cart, addItem, updateQty, cartCount, total } = useCart()

  const goTo = (p) => { setPage(p); window.scrollTo(0, 0) }

  const openModal = (item, cat) => {
    setModal({ item, cat, catData: MENU_DATA[cat] })
    setSelUpgrade(UPGRADES[0])
    setSelSauce(null)
  }

  const confirmAdd = () => {
    if (!modal) return
    const { item, cat } = modal
    const upgrade = cat === 'sandwiches' ? selUpgrade : null
    addItem(item, cat, upgrade, selSauce)
    setModal(null)
  }

  const showFloating = cartCount > 0 && !cartOpen && !checkoutOpen && !modal

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      style={{ fontFamily: 'system-ui,-apple-system,sans-serif', background: 'white', minHeight: '100vh' }}
    >
      <NavBar
        page={page} goTo={goTo} lang={lang} setLang={setLang}
        cartCount={cartCount} onCart={() => setCartOpen(true)}
      />

      <main>
        {page === 'home'    && <HomePage     lang={lang} goTo={goTo} />}
        {page === 'menu'    && <MenuPage     lang={lang} openModal={openModal} />}
        {page === 'order'   && <OrderNowPage lang={lang} goTo={goTo} />}
        {page === 'about'   && <AboutPage    lang={lang} />}
        {page === 'contact' && <ContactPage  lang={lang} />}
      </main>

      <Footer lang={lang} goTo={goTo} />

      {showFloating && (
        <FloatingCartBtn cartCount={cartCount} total={total} lang={lang} onClick={() => setCartOpen(true)} />
      )}

      {modal && (
        <ItemModal
          modal={modal} lang={lang}
          selUpgrade={selUpgrade} setSelUpgrade={setSelUpgrade}
          selSauce={selSauce} setSelSauce={setSelSauce}
          onClose={() => setModal(null)} onConfirm={confirmAdd}
        />
      )}

      {cartOpen && (
        <CartDrawer
          cart={cart} lang={lang} total={total}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onCheckout={() => { setCartOpen(false); setCheckoutOpen(true); setOrderType(null) }}
        />
      )}

      {checkoutOpen && (
        <CheckoutModal
          cart={cart} total={total} lang={lang}
          orderType={orderType} setOrderType={setOrderType}
          onClose={() => setCheckoutOpen(false)}
        />
      )}
    </div>
  )
}