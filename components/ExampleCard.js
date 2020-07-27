import '../styles/example-card.sass'
import example from '../public/images/example.svg'
import { useTranslation } from 'react-i18next';


const ExampleCard = ({ className }) => {
  const userName = 'Adrian G.'
  const connectionStatus = true
  const { t, i18n } = useTranslation()


  return (
    <div className={className ? `example-card ${className}` : 'example-card'}>
      <div className="example-card-inner">
      <span class="start-now-text"> {t('card-p1')}</span>
      <span class="start-now-text">{t('card-p2')}</span>
      </div>
      <img className="logo-watermark" src={example}/>
    </div>
  )
}

export default ExampleCard
