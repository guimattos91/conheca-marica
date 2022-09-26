import { render } from '@testing-library/react'
import { expect, describe, it } from 'vitest'

import ItemMain from './ItemMain'

describe('BaseComponent', () => {
  it('should render a children', () => {
    const { getByText } = render(
      <ItemMain>
        <div>TEST</div>
      </ItemMain>,
    )

    const children = getByText('TEST')

    expect(children).toBeTruthy()
  })
})
