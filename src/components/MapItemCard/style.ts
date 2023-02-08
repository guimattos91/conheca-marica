import { Ratio } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PositionDiv = styled.div`
  position: absolute;
  border-radius: 0.25rem;
  height: 100%;
  width: 300px;
  bottom: 25px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
`
export const BackDiv = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const BackInfoDiv = styled.div`
  background-color: white;
  padding: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`

export const DataDiv = styled.div`
  flex: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 0.5rem;

  p {
    padding: 0;
    margin: 0;
    text-align: center;
  }
`
export const StyledTitle = styled.h2`
  font-style: normal;
  color: #2d677f;
  font-size: 18px;
  font-weight: 700;
`
export const StyledText = styled.p`
  color: #6c757d;
  font-size: 1.5em;
`
export const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
  flex: flex;
  flex-wrap: wrap;

  li {
    border-radius: 90px;
    padding: 5px 15px 5px 15px;
    margin: 0px 10px 10px 0px;
    background-color: #eeeeee;
    color: #666666;
    border-style: none;
    flex: flex;
    align-items: center;
  }
`

export const ImageRatioStyled = styled(Ratio)`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-style: normal;
  color: #2d677f;
  font-weight: 700;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  &:hover {
    color: #2d677f;
  }
`
export const LinkStyledPill = styled(Link)`
  text-decoration: none;
  color: #666666;

  &:hover {
    color: #666666;
  }
`
