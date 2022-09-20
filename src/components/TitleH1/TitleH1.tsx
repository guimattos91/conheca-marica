import { memo } from 'react'

import { BsArrowLeft } from 'react-icons/bs'

import { StyledH1, StyledLink } from './style'

interface ICategoryCardsProps {
  title: string
}
const TitleH1: React.FC<ICategoryCardsProps> = ({ title }) => (
  <StyledLink to="/">
    <div className="d-flex align-items-center py-4">
      <BsArrowLeft color="#333" />
      <StyledH1 className="ps-2">{title}</StyledH1>
    </div>
  </StyledLink>
)

export default memo(TitleH1)
