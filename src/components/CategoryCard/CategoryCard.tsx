import { memo } from 'react'

import { IconType } from 'react-icons'

import { BackDiv, LinkStyled, TextStyled } from './style'

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
      <LinkStyled to={`/${page}`}>
        <div className="pt-5">{icon}</div>
      </LinkStyled>
      <LinkStyled to={`/${page}`}>
        <h2 className="pt-3">{title}</h2>
      </LinkStyled>
      <TextStyled className="p-3">{description}</TextStyled>
    </div>
  </BackDiv>
)

export default memo(CategoryCard)
