import { memo } from 'react'

import { ItemType } from 'types/ItemTypes'

import { BackDiv, StyledText, StyledTitle } from './style'

interface IItemTypeProps {
  unity: ItemType
}
const ItemMain: React.FC<IItemTypeProps> = ({ unity }) => (
  <BackDiv className="d-flex flex-column w-100">
    <h1>{unity.nome}</h1>
    <div className="d-flex">
      {unity.images.map((imagem) => (
        <img key={imagem.id} src={imagem.src} alt={imagem.src} />
      ))}
    </div>
  </BackDiv>
)

export default memo(ItemMain)
