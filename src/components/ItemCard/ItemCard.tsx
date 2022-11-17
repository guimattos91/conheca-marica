import { memo } from 'react'

import { Ratio } from 'react-bootstrap'

import { getDay, getMonth, strToSlug } from 'helpers'

import { CollectionType } from 'types/CollectionType'

import {
  BackDiv,
  DataDiv,
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
            <LinkStyled
              to={`/${linkcategory}/${collection.id}/${strToSlug(
                collection.nome,
              )}`}
            >
              <StyledTitle className="pb-2">{collection.nome}</StyledTitle>
            </LinkStyled>
          </div>
        </div>
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
