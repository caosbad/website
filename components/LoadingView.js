import '../styles/loading-view.sass'
import { useEffect, useContext } from 'react'
import Loading from '../public/images/loading.svg'
import UserContext from '../lib/UserContext'
import { useTranslation } from 'react-i18next';

const LoadingView = ({ img, title }) => {
  const { setLoading } = useContext(UserContext)
  const { t, i18n } = useTranslation();
  return (
    <div className="loading-view">
      <img className="loading-img" src={img} />
      <span className="loading-title">{t('building')}</span>
      <span className="loading-description">
      {t('building-desc')}
      </span>
    </div>
  )
}

export default LoadingView
