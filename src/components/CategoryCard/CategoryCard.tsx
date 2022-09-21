import { memo } from 'react'

import { IconType } from 'react-icons'

import { BackDiv, ButtonDiv, H2Styled, LinkStyled, TextStyled } from './style'

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
}) => {
  const Icon = icon

  return (
    <BackDiv className="w-100 h-100 pb-3">
      <div className="d-flex flex-column text-center align-itens-center">
        <LinkStyled href={page}>
          <div className="pt-5">
            <Icon size={70} />
          </div>
        </LinkStyled>
        <LinkStyled href={page}>
          <H2Styled className="m-0 pt-2">{title}</H2Styled>
        </LinkStyled>
        <TextStyled className="ps-2 pe-2 ">{description}</TextStyled>
      </div>
      <div className="d-flex justify-content-center align-items-end">
        <LinkStyled href={page}>
          <ButtonDiv className="d-inline-flex">Acessar</ButtonDiv>
        </LinkStyled>
      </div>
    </BackDiv>
  )
}

export default memo(CategoryCard)
