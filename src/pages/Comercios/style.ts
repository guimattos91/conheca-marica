import { Container } from 'react-bootstrap'
import styled from 'styled-components'

export const BackDiv = styled.div`
  background-color: white;
  border-radius: 0.25rem;
`
export const StyledH1 = styled.h1`
  color: #333333;
  font-weight: 700;
  font-size: 28px;
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
