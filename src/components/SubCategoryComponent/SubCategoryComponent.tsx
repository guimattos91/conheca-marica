import { memo } from 'react'

import { strToSlug } from 'helpers'

import { ItemType } from 'types/ItemType'

import { LinkStyled, ListStyle } from './style'

interface ISearchProps {
  loading: boolean
  error: string | null
  categoryName: string
  categories: ItemType
}

const SubCategoryComponent: React.FC<ISearchProps> = ({
  loading,
  error,
  categories,
  categoryName,
}) => {
  return (
    <ListStyle className="d-flex flex-nowrap flex-md-wrap g-3">
      {!loading &&
        !error &&
        categories.categorias.map(
          (category: {
            id: number
            label: string
            count?: number | undefined
          }) => (
            <li key={category.id}>
              <LinkStyled
                className="button button-md"
                to={`/${categoryName}/categorias/${category.id}/${strToSlug(
                  category.label,
                )}`}
              >
                {category.label}
              </LinkStyled>
            </li>
          ),
        )}
    </ListStyle>
  )
}
export default memo(SubCategoryComponent)
