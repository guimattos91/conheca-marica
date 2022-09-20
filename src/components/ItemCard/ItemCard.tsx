import { memo } from 'react'

import { Ratio } from 'react-bootstrap'

import { CollectionType } from 'types/CollectionTypes'

import { BackDiv, StyledText, StyledTitle } from './style'

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
      <div>
        {collection.enderecos.map((endereco) => (
          <p key={endereco.id}>{endereco.label}</p>
        ))}
      </div>
    </div>
  </BackDiv>
)

export default memo(CategoryCard)
