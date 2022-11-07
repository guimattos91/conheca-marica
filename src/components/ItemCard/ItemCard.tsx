import { memo } from 'react'

import { Ratio } from 'react-bootstrap'

import { getDay, getMonth, strToSlug } from 'helpers'

import { CollectionType } from 'types/CollectionType'

import {
  BackDiv,
  LinkStyled,
  ListStyle,
  StyledText,
  StyledTitle,
} from './style'

interface ICollectionTypeProps {
  collection: CollectionType
  linkcategory: string
}
const CategoryCard: React.FC<ICollectionTypeProps> = ({
  collection,
  linkcategory,
}) => {
  console.log(getDay(String(collection.datahora_inicio)))

  return (
    <BackDiv className="d-flex flex-column w-100">
      <LinkStyled
        to={`/${linkcategory}/${collection.id}/${strToSlug(collection.nome)}`}
      >
        <Ratio
          aspectRatio="16x9"
          style={{
            backgroundImage: `url(${collection.capa})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        >
          <div />
        </Ratio>
      </LinkStyled>
      <div className="p-3">
        <LinkStyled
          to={`/${linkcategory}/${collection.id}/${strToSlug(collection.nome)}`}
        >
          <StyledTitle className="pb-2">{collection.nome}</StyledTitle>
        </LinkStyled>
        <ListStyle className="d-flex">
          {collection?.categorias.slice(0, 4).map((categoria) => (
            <li key={categoria.id}>
              <LinkStyled
                to={`/${linkcategory}/categorias/${categoria.id}/${strToSlug(
                  categoria.label,
                )}`}
              >
                {categoria.label}
              </LinkStyled>
            </li>
          ))}
        </ListStyle>
        <div>
          {collection.enderecos.map((endereco) => (
            <StyledText key={endereco.id}>{endereco.label}</StyledText>
          ))}
        </div>
      </div>
    </BackDiv>
  )
}
export default memo(CategoryCard)
