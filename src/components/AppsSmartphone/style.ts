import styled from 'styled-components'

export const StyleBackgrounDiv = styled.div`
  background-color: #2d677f;
  color: white;
  position: relative;
  overflow: hidden;
`
export const StyleDetailDiv = styled.div`
  position: absolute;
  width: 600px;
  height: 0px;
  top: 0px;
  right: 0px;
  border-style: solid;
  border-top: 600px solid white;
  border-left: 300px solid transparent;
  z-index: 0;
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
