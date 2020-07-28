import '../styles/step2-view.sass'
import Back from '../public/images/back.svg'
import { useContext, useState, useEffect } from 'react'
import UserContext from '../lib/UserContext'
import fleekStorage from '@fleekhq/fleek-storage-js'
import { useTranslation } from 'react-i18next';

const Step2View = () => {
  const {
    setStep,
    name,
    setName,
    description,
    setDescription,
    logoHash,
    setLogoHash,
  } = useContext(UserContext)

  const submit = () => {
    setStep(3)
  }
  const back = () => {
    setStep(1)
  }

  const [logoFile, setLogoFile] = useState('')

  useEffect(() => {
    fleekStorage
      .getFileFromHash({
        hash: logoHash,
      })
      .then(logoFile => setLogoFile(encodeURIComponent(logoFile)))
  }, [logoHash])

  const uploadFile = async file => {
    console.log('file uploading to ipfs')
    const uploadedFile = await fleekStorage.upload({
      apiKey: '9cILwykg8eJ7JifGfuS4zA==',
      apiSecret: 'u1gcUczk4+o3B0XBP2A0DcWABEvDqUdxz06MgXc3FRA=',
      key: file.name,
      data: file,
    })
    console.log('file upload done')
    setLogoHash(uploadedFile.hash)
  }
  const { t, i18n } = useTranslation();

  return (
    <div className="card-inner">
      <div className="step2-inner">
        <div className="text-section">
          <span className="name-label">{t("dao-name")}</span>
          <input
            className="name-input"
            placeholder={t("dao-name-tip")}
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
          />
          <span className="description-label">{t("dao-desc")}</span>
          <textarea
            className="description-input"
            placeholder={t("dao-desc-tip")}
            value={description}
            onChange={e => {
              setDescription(e.target.value)
            }}
          />
        </div>
        <div className="logo-section">
          <span className="logo-label label">DAO Logo</span>
          <div className="logo-input">
            <div className="logo-container">
              <img
                className="logo-img"
                src={`data:image/svg+xml;utf8,${logoFile}`}
              />
            </div>
            <label className="logo-upload-button">
            {t("up-new")}
              <input
                style={{ display: 'none' }}
                type="file"
                onChange={e => {
                  const file = e.target.files[0]
                  uploadFile(file)
                }}
                accept="image/svg+xml"
              />
            </label>
          </div>
        </div>
      </div>
      <a className="step2-button" onClick={submit}>
      {t("next")}
      </a>
      <a className="step2-back-button" onClick={back}>
        <img className="back-img" src={Back} />
        Back
      </a>
    </div>
  )
}

export default Step2View
