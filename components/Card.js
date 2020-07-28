import '../styles/card.sass'
import HeaderWatermark from '../public/images/card-header-watermark.svg'
import EthicalBrandLogo from '../public/images/ethical-brand.svg'
import UserProfile from '../public/images/user-profile.svg'
import Alert from '../public/images/alert.svg'
import { useState, useEffect } from 'react'
import { UserProvider } from '../lib/UserContext'
import DAOView from './DAOView'
import LoginView from './LoginView'
import RampView from './RampView'
import SelectedView from './SelectedView'
import Step2View from './Step2View'
import Step3View from './Step3View'
import LoadingView from './LoadingView'
import { useTranslation } from 'react-i18next';

const Card = ({ className }) => {
  const [profileImage, setProfileImage] = useState(UserProfile)
  const [userName, setUserName] = useState('John Doe')
  const [selectNetwork, setSelectNetwork] = useState(false)
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(undefined)
  const [flying, setFlying] = useState(false)
  const [step, setStep] = useState(undefined)
  const [onRamp, setOnRamp] = useState(false)

  // Tor.us hooks
  const [account, setAccount] = useState(null)
  const [web3Obj, setWeb3Obj] = useState(null)
  const [xDaiBalance, setxDaiBalance] = useState(0)

  // Step1 hooks
  const [url, setUrl] = useState('')

  // Step2 hooks
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [logoHash, setLogoHash] = useState(
    'bafybeidsm72bt7kspzyfh4bbtoxmqvsxgt3su25afb77h23t4uw4ys3dtm',
  )

  // Step3 hooks
  const [currency, setCurrency] = useState('')

  useEffect(() => {
    async function loadTorus() {
      const { default: web3Obj } = await import('../lib/torus')
      setWeb3Obj(web3Obj)
    }
    loadTorus()
  }, [])

  const [onRampDone, setOnRampDone] = useState(false)
  const [onRampSuccess, setOnRampSuccess] = useState(false)
  const { t, i18n } = useTranslation();
  return (
    <div className={className ? `card ${className}` : 'card'}>
      <UserProvider
        value={{
          web3Obj,
          setSelectNetwork,
          setConnected,
          setStep,
          //Login
          xDaiBalance,
          setxDaiBalance,
          setOnRamp,
          setUserName,
          setProfileImage,
          //onRamp
          onRampDone,
          setOnRampDone,
          onRampSuccess,
          setOnRampSuccess,
          // Step1
          account,
          url,
          setUrl,
          // Step2
          name,
          setName,
          description,
          setDescription,
          logoHash,
          setLogoHash,
          // Step3
          currency,
          setCurrency,
          setLoading,
          done: setFlying,
        }}
      >
        {/* {connected && !loading && (
          <div className="card-user">
            <div className="user-profile">
              <img className="user-profile-img" src={profileImage} />
            </div>
            <div className="user-name">{userName}</div>
          </div>
        )} */}
        {!loading &&
          (connected ? (
            <div className="card-status connected">
              <div className="balance">
                {`${(xDaiBalance / 10 ** 18).toFixed(2)} xDai (USD)`}
              </div>
                {/* {onRamp && (
                  <div className="alert">
                    <img className="alert-img" src={Alert} />
                    {'Insufficient funds'}
                  </div>
                )} */}
            </div>
          ) : (
            <div className="card-status">
              <div className="status-icon false" />
              <div className="status-text">{t('not-connected')}</div>
            </div>
          ))}
        {!flying && !loading && (
          <div className="card-tabs">
            {/* <div
              className={step === 1 ? 'tab selected' : 'tab'}
              onClick={() => connected && setStep(1)}
            >
              <span className="tab-title">Step 01</span>
              <span className="tab-description">FB group URL</span>
            </div> */}
            <div
              className={step === 2 ? 'tab selected' : 'tab'}
              onClick={() => connected && setStep(2)}
            >
              <span className="tab-title">{t('step1')}</span>
              <span className="tab-description">{t('step1-desc')}</span>
            </div>
            <div
              className={step === 3 ? 'tab selected' : 'tab'}
              onClick={() => connected && setStep(3)}
            >
              <span className="tab-title">{t('step2')}</span>
              <span className="tab-description">{t('step2-desc')}</span>
            </div>
            <div
              className={step === 4 ? 'tab selected' : 'tab'}
              onClick={() => connected && setStep(4)}
            >
              <span className="tab-title">{t('step3')}</span>
              <span className="tab-description">{t('step3-desc')}</span>
            </div>
          </div>
        )}
        {loading ? (
          <LoadingView img={loading.img} />
        ) : onRamp ? (
          <RampView />
        ) : !selectNetwork ? (
          <SelectedView />
        ) : !connected ? (
          <LoginView />
        ) : flying ? (
          <DAOView />
        ) 
        : step === 2 ? (
          <Step2View />
        ) : step === 3 ? (
          <Step3View />
        ) : null}
      </UserProvider>
    </div>
  )
}

export default Card
