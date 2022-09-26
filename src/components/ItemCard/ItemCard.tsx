import { memo } from 'react'

import { Ratio } from 'react-bootstrap'

import { strToSlug } from 'helpers'

import { CollectionType } from 'types/CollectionTypes'

import {
  BackDiv,
  LinkStyled,
  ListStyle,
  StyledText,
  StyledTitle,
} from './style'

interface ICollectionTypeProps {
  collection: CollectionType
}
const CategoryCard: React.FC<ICollectionTypeProps> = ({ collection }) => (
  <BackDiv className="d-flex flex-column w-100">
    <LinkStyled to={`${collection.id}/${strToSlug(collection.nome)}`}>
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
      <LinkStyled to={`${collection.id}/${strToSlug(collection.nome)}`}>
        <StyledTitle className="pb-2">{collection.nome}</StyledTitle>
      </LinkStyled>
      <ListStyle className="d-flex">
        {collection?.categorias.slice(0, 4).map((categoria) => (
          <li key={categoria.id}>{categoria.label}</li>
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

export default memo(CategoryCard)
