import aragontext from '../public/images/aragon-text.svg'
import aragonlogo from '../public/images/aragon-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeibo, faWeixin ,faForumbee} from '@fortawesome/free-brands-svg-icons'
import weixin from '../public/images/weixin.png'
import { useState } from 'react'
import { Modal } from '@aragon/ui'
import '../styles/footer.sass'


const Footer = props => {
  const [opened, setOpened] = useState(false)

  const open = () => setOpened(true)
  const close = () => setOpened(false)
  return (
    <footer className="footer">
      <img className="logo-txt" src={aragontext} width="120" height="60" />
      <img className="logo-img" src={aragonlogo} width="50" height="50" />
      <div className="footer-menu">
        <a className="footer-item" href="https://weibo.com/aragonproject" target="_blank">
          <FontAwesomeIcon icon={faWeibo} />
        </a>
        <a className="footer-item" onClick={open}>
          <FontAwesomeIcon icon={faWeixin} />
        </a>
        <a className="footer-item" href="https://gov.aragonchina.xyz/" target="_blank">
          <FontAwesomeIcon icon={faForumbee} />
        </a>
        <Modal visible={opened} onClose={close}  width="100">
        <img className="weixin-img" src={weixin} />
        </Modal>
      </div>
    </footer>
  )
}
export default Footer
