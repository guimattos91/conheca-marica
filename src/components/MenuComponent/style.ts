import { Button, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyleBackgrounDiv = styled.div`
  background-color: #2d677f;
  color: white;
`
export const DivStripes = styled.div`
  color: white;
  border-style: none none solid none;
  border: 1px;
  border-color: white;

  ::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: white;
  }
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 1rem 0 0 0;
  flex: flex;

  &:hover {
    color: white;
  }
`
export const ButtonStyled = styled(Button)`
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: white;
  &:hover {
    text-decoration: none;
    background-color: transparent;
    border: none;
    color: white;
  }
`
export const OffCanvasStyled = styled(Offcanvas)`
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
`

export const StyleText = styled.p`
  font-size: 22px;
  color: white;
`
export const StyleTitle = styled.h3`
  font-size: 60px;
  color: white;
`
export const StyledA = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 0.5rem;

  :hover {
    color: white;
  }
`
