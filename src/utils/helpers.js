export const BRAND      = '#a81010'
export const BRAND_DARK = '#7a0000'
export const WA_NUMBER  = '201501044604'

/** Returns the English or Arabic string based on current lang */
export const T = (lang, en, ar) => lang === 'ar' ? ar : en