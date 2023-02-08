import { memo } from 'react'

import { getDay, getMonth, strToSlug } from 'helpers'

import { CollectionType } from 'types/CollectionType'

import {
  BackDiv,
  BackInfoDiv,
  DataDiv,
  ImageRatioStyled,
  LinkStyled,
  LinkStyledPill,
  ListStyle,
  PositionDiv,
  StyledText,
  StyledTitle,
} from './style'

interface ICollectionTypeProps {
  collection: CollectionType
  linkcategory: string
}
const MapItemCard: React.FC<ICollectionTypeProps> = ({
  collection,
  linkcategory,
}) => {
  return (
    <PositionDiv>
      <BackDiv>
        <LinkStyled
          to={`/${linkcategory}/${collection.id}/${strToSlug(collection.nome)}`}
        >
          <ImageRatioStyled
            aspectRatio="16x9"
            style={{
              backgroundImage: `url(${collection.capa})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              borderTopLeftRadius: `${5}`,
            }}
          >
            <div />
          </ImageRatioStyled>
        </LinkStyled>
        <BackInfoDiv>
          <div className="d-flex">
            {collection.datahora_inicio && (
              <DataDiv>
                <p style={{ color: 'red' }}>
                  {getMonth(String(collection.datahora_inicio))}
                </p>
                <p>{getDay(String(collection.datahora_inicio))}</p>
              </DataDiv>
            )}
            <div>
              <StyledTitle className="pb-2">
                <LinkStyled
                  to={`/${linkcategory}/${collection.id}/${strToSlug(
                    collection.nome,
                  )}`}
                >
                  {collection.nome}{' '}
                </LinkStyled>
              </StyledTitle>
            </div>
          </div>
          <ListStyle className="d-flex">
            {collection?.categorias.slice(0, 4).map((categoria) => (
              <li key={categoria.id}>
                <LinkStyledPill
                  to={`/${linkcategory}/categorias/${categoria.id}/${strToSlug(
                    categoria.label,
                  )}`}
                >
                  {categoria.label}
                </LinkStyledPill>
              </li>
            ))}
          </ListStyle>
          <div>
            {collection.enderecos.map((endereco) => (
              <StyledText key={endereco.id}>{endereco.label}</StyledText>
            ))}
          </div>
        </BackInfoDiv>
      </BackDiv>
    </PositionDiv>
  )
}
export default memo(MapItemCard)
