import { memo } from 'react'

import { Link } from 'react-router-dom'

import { AboutType } from 'types/AboutType'

import { BackDiv } from './style'

interface IAboutProps {
  about: AboutType
}
const AboutCard: React.FC<IAboutProps> = ({ about }) => (
  <BackDiv>
    <div>{image}</div>
    <h2 className="pt-3">{title}</h2>
    <p>{description}</p>
  </BackDiv>
)

export default memo(AboutCard)
