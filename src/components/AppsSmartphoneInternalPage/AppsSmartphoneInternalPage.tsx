import { memo } from 'react'

import AppleStoreLogo from 'assets/AppleApp.png'
import GoogleStoreLogo from 'assets/GoogleApp.png'

import { StyledH2 } from 'components/TitleH2Intern/style'

const AppsSmartphoneInternalPage: React.FC = () => (
  <>
    <StyledH2 className="pt-5">Conheça nosso app</StyledH2>
    <div className="d-flex pt-2">
      <a
        href="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={AppleStoreLogo}
          alt="Logo-Turismo"
          width="auto"
          className="pe-3 img-fluid"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.marica2030.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={GoogleStoreLogo}
          alt="Logo-Turismo"
          width="auto"
          className="img-fluid"
        />
      </a>
    </div>
  </>
)

export default memo(AppsSmartphoneInternalPage)
