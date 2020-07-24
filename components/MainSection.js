import '../styles/main.sass'
import Section1 from '../public/images/section1.svg'
import Section2 from '../public/images/section2.svg'
import Section3 from '../public/images/section3.svg'
import ExampleCard from './ExampleCard'

const MainSection = props => (
  <main className="main">
    <section className="main-header">
      <span className="main-header-title">
        正和之道
      </span>
      <span className="main-header-subtitle">
        运行于Aragon的新型组织
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
          <div className="section-title">正和之道</div>
          <div className="section-description">
            Aragon为人类提供了前所未有的力量，让人类可以基于价值互联而创造更大价值，正所谓：正和之道
          </div>
        </div>
        <div className="main-sections-item">
          <img className="section-img" src={Section2} />
          <div className="section-title">下一代组织</div>
          <div className="section-description">
            我们正在帮助东方的组织和个人构建基于Aragon的下一代新型组织，并支持他们成长。
          </div>
        </div>
        <div className="main-sections-item">
          <img className="section-img" src={Section3} />
          <div className="section-title">构建社区</div>
          <div className="section-description">
           我们正在构建东方的Aragon社区，以帮助所有Aragon的参与者构建一个可持续发展的生态，包括 ANT 和 DAO。
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default MainSection
