import styled from 'styled-components'

export const StyleBackgrounDiv = styled.div`
  background-color: #2d677f;
  color: white;
  position: relative;
`
// export const StyleDetailDiv = styled.div`
//   position: absolute;
//   width: 600px;
//   height: 0px;
//   top: 0px;
//   right: 0px;
//   border-style: solid;
//   border-top: 600px solid white;
//   border-left: 300px solid transparent;
//   z-index: 0;
// `
export const StyleDetailDiv = styled.div`
  position: absolute;
  background-color: white;
  width: 600px;
  height: 100%;
  top: 0px;
  right: 0px;
  z-index: 0;
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 57% 100%);

  /* @media (max-width: 1024px) {
    width: 600px;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 57% 100%);
  } */

  @media (max-width: 768px) {
    width: 400px;
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 85% 100%);
  }
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
