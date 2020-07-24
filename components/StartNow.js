import '../styles/startnow.sass'
import start from '../public/images/start-now-inner-back.svg'

const StartNow = props => (
  <section className="start-now">
    <div className="start-now-inner">
      <img className="logo-watermark" src={start} />
      <span className="start-now-text">
          帮助东方的组织和个人构建基于Aragon的下一代新型组织
      </span>
      <a href="/onboarding" className="start-now-button">
        Start now
      </a>
    </div>
  </section>
)

export default StartNow
