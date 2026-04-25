export const MENU_DATA = {
  sandwiches: {
    en: 'Sandwiches', ar: 'ساندوتشات', emoji: '🥪',
    subEn: 'Bite into happiness!', subAr: 'عض في السعادة!',
    hasOptions: true,
    items: [
      { id: 'sw1', en: 'Classic Rocky',      ar: 'كلاسيك روكي',      price: 195 },
      { id: 'sw2', en: 'Hot Honey Rocky',    ar: 'هوت هاني روكي',    price: 220 },
      { id: 'sw3', en: 'Buffalo Rocky',      ar: 'بافالو روكي',      price: 225 },
      { id: 'sw4', en: 'Cream Rocky',        ar: 'كريم روكي',        price: 225 },
      { id: 'sw5', en: 'Honey Garlic Rocky', ar: 'هاني جارليك روكي', price: 220 },
      { id: 'sw6', en: 'Truffle Rocky',      ar: 'تروفل روكي',       price: 270 },
    ],
  },
  twisters: {
    en: 'Twisters', ar: 'تويسترز', emoji: '🌯',
    items: [
      { id: 'tw1', en: 'Mighty Rocky',         ar: 'مايتي روكي',   price: 185 },
      { id: 'tw2', en: 'Truffle Rocky',         ar: 'تروفل روكي',   price: 200 },
      { id: 'tw3', en: 'Make Your Own Twister', ar: 'اصنع تويسترك', price: 185, hasSauce: true },
    ],
  },
  fries: {
    en: 'Fries', ar: 'بطاطس', emoji: '🍟',
    items: [
      { id: 'fr1', en: 'Regular', ar: 'عادي',    price: 60  },
      { id: 'fr2', en: 'Cheesy',  ar: 'بالجبنة', price: 75  },
      { id: 'fr3', en: 'Loaded',  ar: 'لوديد',   price: 145 },
    ],
  },
  pancakes: {
    en: 'Pancakes', ar: 'بانكيك', emoji: '🥞',
    items: [
      { id: 'pk1', en: 'Chocolate',      ar: 'شوكولاتة',       price: 70 },
      { id: 'pk2', en: 'Lotus',          ar: 'لوتس',           price: 85 },
      { id: 'pk3', en: 'Pistachio',      ar: 'فستق',           price: 85 },
      { id: 'pk4', en: 'Kinder',         ar: 'كيندر',          price: 85 },
      { id: 'pk5', en: 'Any Mix of Two', ar: 'أي خلطة اثنين',  price: 90 },
    ],
  },
  tenders: {
    en: 'Tenders Meals', ar: 'وجبات تندرز', emoji: '🍗',
    subEn: 'With fries, garlic bread & choice of sauce',
    subAr: 'مع بطاطس وخبز ثوم وصلصة من اختيارك',
    hasSauce: true,
    items: [
      { id: 'tm1', en: '3 pcs', ar: '٣ قطع', price: 275 },
      { id: 'tm2', en: '5 pcs', ar: '٥ قطع', price: 450 },
    ],
  },
  friedChicken: {
    en: 'Fried Chicken Meals', ar: 'وجبات فراخ مقلية', emoji: '🍖',
    subEn: 'With fries, garlic bread & choice of sauce',
    subAr: 'مع بطاطس وخبز ثوم وصلصة من اختيارك',
    hasSauce: true,
    items: [
      { id: 'fc1', en: '3 pcs', ar: '٣ قطع', price: 240 },
      { id: 'fc2', en: '4 pcs', ar: '٤ قطع', price: 300 },
      { id: 'fc3', en: '8 pcs', ar: '٨ قطع', price: 560 },
    ],
  },
  wings: {
    en: 'Wings', ar: 'وينجز', emoji: '🔥',
    hasSauce: true,
    items: [
      { id: 'wg1', en: '6 pcs',  ar: '٦ قطع',  price: 140 },
      { id: 'wg2', en: '12 pcs', ar: '١٢ قطع', price: 265 },
      { id: 'wg3', en: '24 pcs', ar: '٢٤ قطع', price: 500 },
    ],
  },
  drinks: {
    en: 'Softies & Drinks', ar: 'آيس كريم ومشروبات', emoji: '🧋',
    items: [
      { id: 'dk1', en: 'Vanilla Ice Cream', ar: 'آيس كريم فانيليا', price: 50 },
      { id: 'dk2', en: 'Water',             ar: 'مياه',             price: 20 },
      { id: 'dk3', en: 'Soft Drink',        ar: 'مشروب غازي',       price: 45 },
    ],
  },
}