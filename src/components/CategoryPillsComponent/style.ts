import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  flex: flex;
  flex-wrap: nowrap;
  width: fit-content;
  align-items: center;
  justify-content: center;
  background-color: #6ebd00;
  display: flex;
  padding: 5px 20px;
  border-radius: 20px;
  white-space: nowrap;

  > &:hover {
    color: white;
    background-color: #6ebd00;
  }
`
export const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex: flex;
  overflow-x: scroll;

  li {
    color: white;
    display: inline;
    list-style: none;
    margin: 0px 10px 10px 0px;
  }
`

export const StyleText = styled.p`
  color: white;
  flex: flex;
  flex-wrap: nowrap;
  padding: 0px;
  margin: 0px;
`

export const StyledA = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 0.5rem;

  :hover {
    color: white;
  }
`
