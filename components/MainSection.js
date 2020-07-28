import '../styles/main.sass'
import Section1 from '../public/images/section1.svg'
import Section2 from '../public/images/section2.svg'
import Section3 from '../public/images/section3.svg'
import ExampleCard from './ExampleCard'
import { useTranslation } from 'react-i18next';

const MainSection = props => {
  const { t, i18n } = useTranslation()
  return(
    <main className="main">
      <section className="main-header">
        <span className="main-header-title">
          Aragon China
      </span>
        <span className="main-header-subtitle">
          {t('subtitle')}
        </span>
      </section>
      <section className="main-examples">
        <ExampleCard className="background-card" />
        <ExampleCard className="foreground-card" />
      </section>
      <section className="main-sections">
        <span className="main-sections-text">AragonChina</span>
        <div className="main-sections-grid">
          <div className="main-sections-item">
            <img className="section-img" src={Section1} />
            <div className="section-title">{t('section-title-1')}</div>
            <div className="section-description">
            {t('section-desc-1')}

          </div>
          </div>
          <div className="main-sections-item">
            <img className="section-img" src={Section2} />
            <div className="section-title">{t('section-title-2')}</div>
            <div className="section-description">
            {t('section-desc-2')}
          </div>
          </div>
          <div className="main-sections-item">
            <img className="section-img" src={Section3} />
            <div className="section-title">{t('section-title-3')}</div>
            <div className="section-description">
            {t('section-desc-3')}
          </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainSection
