import { memo } from 'react'

import { Link } from 'react-router-dom'

import { BackDiv } from './style'

interface ICategoryCardsProps {
  title: string
  description: string
  image: string
}
const Banners: React.FC<ICategoryCardsProps> = ({
  title,
  image,
  description,
}) => (
  <BackDiv>
    <Link to="/">
      <div>{image}</div>
    </Link>
    <h2 className="pt-3">{title}</h2>
    <p>{description}</p>
  </BackDiv>
)

export default memo(Banners)
