import { memo } from 'react'

import { IconType } from 'react-icons'

import { BackDiv, H2Styled, LinkStyled, TextStyled } from './style'

interface ICategoryCardsProps {
  title: string
  description: string
  icon: IconType
  page: string
}
const CategoryCard: React.FC<ICategoryCardsProps> = ({
  title,
  icon,
  description,
  page,
}) => (
  <BackDiv className="w-100 h-100">
    <div className="d-flex flex-column text-center align-itens-center">
      <LinkStyled to={page}>
        <div className="pt-5">{icon}</div>
      </LinkStyled>
      <H2Styled className="m-0 pt-2">
        <LinkStyled to={page}>{title}</LinkStyled>
      </H2Styled>

      <TextStyled className="ps-2 pe-2 pb-2">{description}</TextStyled>
    </div>
  </BackDiv>
)

export default memo(CategoryCard)
