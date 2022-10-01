import { memo } from 'react'

import { StyledDiv, StyledH2 } from './style'

interface ICategoryCardsProps {
  title: string
}
const TitleH2Intern: React.FC<ICategoryCardsProps> = ({ title }) => (
  <StyledDiv className="d-flex flex-column py-4">
    <StyledH2 className="py-2">{title}</StyledH2>
  </StyledDiv>
)

export default memo(TitleH2Intern)
