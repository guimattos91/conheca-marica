import { memo } from 'react'

import { strToSlug } from 'helpers'

import { CollectionType } from 'types/CollectionType'

import { LinkStyled, ListStyle, StyledText, StyledTitle } from './style'

interface ICollectionTypeProps {
  collection: CollectionType
}
const CategoryCard: React.FC<ICollectionTypeProps> = ({ collection }) => (
  <div className="d-flex flex-column w-100">
    <LinkStyled to={`${collection.id}/${strToSlug(collection.nome)}`} />
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
  </div>
)

export default memo(CategoryCard)
