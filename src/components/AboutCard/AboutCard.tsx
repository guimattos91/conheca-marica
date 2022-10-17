import { memo, useEffect } from 'react'

import { Spinner } from 'react-bootstrap'

import { useAbout } from 'context/AboutContext'

import TitleH1 from 'components/TitleH1'

import { BackDiv, DivStyled } from './style'

const AboutCard: React.FC = () => {
  const { about, isLoading, error, fetchAbout } = useAbout()
  useEffect(() => {
    fetchAbout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <BackDiv>
      {isLoading && (
        <div className="text-center">
          <Spinner animation="grow" variant="success" />
        </div>
      )}
      {error && <p>Deu Erro</p>}
      {!isLoading && !error && about?.sobre?.content && (
        <div
          key={about?.sobre?.id}
          className="fs-md text-justify px-4 px-md-5 pb-4 pb-md-5"
        >
          <div className="pt-4">
            <TitleH1 title="Conheça Maricá" />
          </div>
          <DivStyled
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: about.sobre.content }}
          />
        </div>
      )}
    </BackDiv>
  )
}

export default memo(AboutCard)
