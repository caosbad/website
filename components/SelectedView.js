import { useState,useContext } from 'react'
import UserContext from '../lib/UserContext'
import Login from '../public/images/login.svg'
import { useTranslation } from 'react-i18next';
import { DropDown } from '@aragon/ui'
import '../styles/step1-view.sass'

const SelectedView = () => {
  const { setSelectNetwork } = useContext(UserContext)

  const submit = () => {
    setSelectNetwork(true)
  }
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(0)


  return (

    <div className="card-inner">
      <img className="login-img" src={Login} />
      <span className="login-title">{t('select-network')}</span>
      <DropDown
      items={['Ethereum', 'xDAI']}
      selected={selected}
      onChange={setSelected}
    />
    <a className="step1-button" onClick={submit}>{t('next')}</a>
    </div>
  )
}

export default SelectedView
