import '../styles/example-card.sass'
import HeaderWatermark from '../public/images/card-header-watermark.svg'
import EthicalBrand from '../public/images/ethical-brand.svg'
import FbLogo from '../public/images/fb-logo.svg'
import UserProfile from '../public/images/user-profile.svg'

const ExampleCard = ({ className }) => {
  const userName = 'Adrian G.'
  const connectionStatus = true

  return (
    <div className={className ? `example-card ${className}` : 'example-card'}>
      <div className="example-card-inner">
      </div>
    </div>
  )
}

export default ExampleCard
