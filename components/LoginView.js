import '../styles/login-view.sass'
import { useContext } from 'react'
import UserContext from '../lib/UserContext'
import Login from '../public/images/login.svg'
import Wallet from '../public/images/wallet.svg'
import { useTranslation } from 'react-i18next';
import { DropDown } from '@aragon/ui'
import { useState } from 'react'


const LoginView = () => {
  const {
    web3Obj,
    setLoading,
    setConnected,
    setStep,
    setxDaiBalance,
    setOnRamp,
    setUserName,
    setProfileImage,
  } = useContext(UserContext)

  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(0)

  async function loginWithTorus() {
    try {
      setLoading({ img: Wallet, title: 'Your wallet is being created' })
      await web3Obj.initialize('xdai')
    
      const userInfo = await web3Obj.torus.getUserInfo()
      console.log("userInfo")
      const xDaiBalance = await web3Obj.balance()
      setxDaiBalance(xDaiBalance)
      // if (xDaiBalance < 1) {
      setOnRamp(true)
      // } else {
      //   setStep(1)
      // }
      setLoading(undefined)
      setUserName(userInfo.name)
      setProfileImage(userInfo.profileImage)
      setConnected(true)
    } catch (error) {
      console.error(error)
    }
  }

  async function loginWithMetaMask() {
    try {
      setLoading({ img: Wallet, title: 'Your wallet is being created' })
      // await web3Obj.initialize('xdai')
       // 获取用户信息
      const userInfo = await web3Obj.metamask.user
      console.log("userInfo",userInfo)
      // const xDaiBalance = await web3Obj.balance()
      // setxDaiBalance(xDaiBalance)
      // if (xDaiBalance < 1) {
      setOnRamp(true)
      // } else {
      //   setStep(1)
      // }
      setLoading(undefined)
      setUserName(userInfo.name)
      // setProfileImage(userInfo.profileImage)
      setConnected(true)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="card-inner">
      <img className="login-img" src={Login} />
      <span className="login-title">{t('login-tittle')}</span>

      <a
        className="login-button"
        onClick={() => {
          // loginWithTorus()
          loginWithMetaMask()
        }}
      >

        {/* <img className="" src={FbLogin} /> */}
        {t('login-button')}
      </a>
      {/* <DropDown
      items={['Wandering Thunder', 'Black Wildflower', 'Ancient Paper']}
      selected={selected}
      onChange={setSelected}
    /> */}
    </div>
  )
}

export default LoginView
