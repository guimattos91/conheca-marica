import { memo } from 'react'

import { Container } from 'react-bootstrap'

import { StyledA, StyleFooter } from './style'

const SiteSignature: React.FC = () => (
  <StyleFooter>
    <Container className="d-flex justify-content-center py-2">
      <p>
        Site por:{' '}
        <StyledA
          href="https://www.linkedin.com/in/guimattos91/"
          target="_blank"
          rel="noreferrer"
        >
          Guilherme Mattos
        </StyledA>
      </p>
    </Container>
  </StyleFooter>
)

export default memo(SiteSignature)
