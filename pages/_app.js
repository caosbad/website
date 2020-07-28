import '../styles/styles.sass'
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import enUsTrans from "../public/locales/en-us.json";
import zhCnTrans from "../public/locales/zh-cn.json";
import { initReactI18next } from 'react-i18next';
import { Main } from '@aragon/ui'

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: {
            translation: enUsTrans,
        },
        zh: {
            translation: zhCnTrans,
        },
    },
    fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
})

export default function App({ Component, pageProps }) {
  return  <Main><Component {...pageProps} /></Main>
}
