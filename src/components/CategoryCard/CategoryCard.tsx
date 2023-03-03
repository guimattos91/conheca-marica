import { memo, useEffect, useState } from 'react'

import { IconType } from 'react-icons'

import {
  BackDiv,
  ButtonDiv,
  H2Styled,
  LinkOutsideStyled,
  LinkStyled,
  TextStyled,
} from './style'

interface ICategoryCardsProps {
  title: string
  description: string
  icon: IconType
  page: string
  target: string
  rel: string
  turnOn: string
}
const CategoryCard: React.FC<ICategoryCardsProps> = ({
  title,
  icon,
  description,
  page,
  target,
  rel,
  turnOn,
}) => {
  const Icon = icon
  const [linkState, setLinkState] = useState(true)

  useEffect(() => {
    if (turnOn === 'on') setLinkState(true)
    if (turnOn === 'off') setLinkState(false)
  }, [turnOn])

  return (
    <BackDiv className="w-100 h-100 pb-3">
      {linkState && (
        <>
          <div className="d-flex flex-column text-center align-itens-center">
            <LinkStyled to={page} target={target} rel={rel}>
              <div className="pt-5">
                <Icon size={70} color="295C7A" />
              </div>
            </LinkStyled>
            <LinkStyled to={page} target={target} rel={rel}>
              <H2Styled className="m-0 pt-2">{title}</H2Styled>
            </LinkStyled>
            <TextStyled className="ps-2 pe-2 ">{description}</TextStyled>
          </div>
          <div className="d-flex justify-content-center align-items-end">
            <LinkStyled to={page} target={target} rel={rel}>
              <ButtonDiv className="d-inline-flex">Acessar</ButtonDiv>
            </LinkStyled>
          </div>{' '}
        </>
      )}
      {!linkState && (
        <>
          <div className="d-flex flex-column text-center align-itens-center">
            <LinkOutsideStyled href={page} target={target} rel={rel}>
              <div className="pt-5">
                <Icon size={70} color="295C7A" />
              </div>
            </LinkOutsideStyled>
            <LinkOutsideStyled href={page} target={target} rel={rel}>
              <H2Styled className="m-0 pt-2">{title}</H2Styled>
            </LinkOutsideStyled>
            <TextStyled className="ps-2 pe-2 ">{description}</TextStyled>
          </div>
          <div className="d-flex justify-content-center align-items-end">
            <LinkOutsideStyled href={page} target={target} rel={rel}>
              <ButtonDiv className="d-inline-flex">Acessar</ButtonDiv>
            </LinkOutsideStyled>
          </div>
        </>
      )}
    </BackDiv>
  )
}

export default memo(CategoryCard)
