import { render } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import ItemCard from './CarouselComponent'

describe('BaseComponent', () => {
  it('should render a children', () => {
    const { getByText } = render(
      <ItemCard>
        <div>TEST</div>
      </ItemCard>,
    )

    const children = getByText('TEST')

    expect(children).toBeTruthy()
  })
})
