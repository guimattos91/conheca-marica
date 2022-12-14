import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BackDiv = styled.div`
  background-color: white;
  border-radius: 0.25rem;
`
export const StyledH1 = styled.h1`
  color: #333333;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
`
export const StyledSmallText = styled.p`
  color: #333333;
  font-weight: 300;
  margin: 0;
`
export const StyledContainer = styled(Container)`
  color: #333333;
`
export const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: flex;
  li {
    border-radius: 90px;
    padding: 0px 15px;
    margin: 0px 10px 10px 0px;
    background-color: #6ebd00;
    color: white;
    border-style: none;
    display: inline;
    flex: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 30px;
  }
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;

  :hover {
    color: white;
  }
`
export const InputStyled = styled.input`
  background-color: white;
  border: none;
  outline: none;
`
export const SearchDiv = styled.div`
  border: 1px solid #2d6d7f;
  color: #6ebd00;
  border-radius: 2rem;
  background-color: white;
  padding: 5px 15px;
  border-image-repeat: no-repeat;
`
export const ButtonStyled = styled.button`
  background: none;
  color: #333;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`
