import { memo } from 'react'

import { strToSlug } from 'helpers'

import { CategoryType } from 'types/CategoryType'

import { LinkStyled, ListStyle } from './style'

interface ICategoryPillsProps {
  Loading: boolean
  Categories: CategoryType[]
  Error: string | null
}

const CategoryPillsComponent: React.FC<ICategoryPillsProps> = ({
  Loading,
  Error,
  Categories,
}) => {
  const pathArray = window.location.pathname.split('/')
  const categoryName = pathArray[1]

  return (
    <ListStyle className="d-flex flex-nowrap flex-md-wrap g-3">
      {!Loading &&
        !Error &&
        Categories.map(
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

export default memo(CategoryPillsComponent)
