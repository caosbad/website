import '../styles/example-card.sass'
import example from '../public/images/example.svg'


const ExampleCard = ({ className }) => {
  const userName = 'Adrian G.'
  const connectionStatus = true

  return (
    <div className={className ? `example-card ${className}` : 'example-card'}>
      <div className="example-card-inner">
      <span class="start-now-text">超过1400个DAO在Aragon创建</span>
      <span class="start-now-text">储存的资产价值1900万美元</span>
      <img className="logo-watermark" src={example} />
      </div>
    </div>
  )
}

export default ExampleCard
