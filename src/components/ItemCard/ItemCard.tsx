import { memo } from 'react'

import { Ratio } from 'react-bootstrap'

import { CollectionType } from 'types/CollectionTypes'

import { BackDiv, ListStyle, StyledText, StyledTitle } from './style'

interface ICollectionTypeProps {
  collection: CollectionType
}
const CategoryCard: React.FC<ICollectionTypeProps> = ({ collection }) => (
  <BackDiv className="d-flex flex-column w-100">
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
    <div className="p-3">
      <StyledTitle className="pb-2">{collection.nome}</StyledTitle>
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
