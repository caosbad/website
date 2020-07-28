import '../styles/step3-view.sass'
import Back from '../public/images/back.svg'
import { useContext } from 'react'
import Loading from '../public/images/loading.svg'
import UserContext from '../lib/UserContext'
import InfoButton from './InfoButton'
import ipldService from '../lib/ipld'
import createDao from '../lib/createDao'
import { useTranslation } from 'react-i18next';


const Step3View = () => {
  const {
    web3Obj,
    setStep,
    setLoading,
    currency,
    setCurrency,
    balance,
    name,
    url,
    description,
    logoHash,
  } = useContext(UserContext)
  const { t, i18n } = useTranslation();

  const createNewDao = async () => {
    setLoading({ img: Loading})
    const torusProvider = web3Obj.provider
    const userInfo = await web3Obj.metamask.user
    // const userInfo = web3Obj.getUserInfo()

    const daoMetadata = {
      creatorName: userInfo.name,
      groupID: url.replace(/^.*[\\\/]/, ''),
      groupURL: url,
      name,
      currency,
      description,
      logoHash,
    }

    const metadataHash = ipldService.uploadMetadata(daoMetadata)
    // also call fbFly to store group data and metadata
    // const error = createDAO(web3Obj.torus, metadata)

    await createDao(torusProvider)

    setTimeout(() => {
      setLoading(undefined)
    }, 3000)
  }

  const back = () => {
    setStep(2)
  }


  return (
    <div className="card-inner">
      <span className="step3-label">
      {t('what-hope')}
      </span>
      <input
        className="step3-input"
        placeholder={t('Ethiacl')}
        value={currency}
        onChange={e => {
          setCurrency(e.target.value)
        }}
      />

      <InfoButton
        title={t('what-hope-tip')}
        content={'Because they just do!'}
      />
      <a className="step3-button" onClick={createNewDao}>
      {t('start')}
      </a>
      <a className="step3-back-button" onClick={back}>
        <img className="back-img" src={Back} />
        {t('back')}
      </a>
    </div>
  )
}

export default Step3View
