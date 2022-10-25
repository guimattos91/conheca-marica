import styled from 'styled-components'

export const InputStyled = styled.input`
  background-color: white;
  border: none;
  outline: none;
  flex: flex;
  flex-grow: 1;
`
export const SearchDiv = styled.div`
  border: 1px solid #2d6d7f;
  color: #6ebd00;
  border-radius: 2rem;
  background-color: white;
  padding: 5px 5px;
  width: 100%;
  border-image-repeat: no-repeat;
`
export const MapButton = styled.div`
  color: white;
  border-radius: 2rem;
  background-color: #2d677f;
  padding: 7px 25px;
  border-image-repeat: no-repeat;

  p {
    font-size: 14;
    padding: 0;
    margin: 0;
  }
`
export const TextStyled = styled.p`
  margin: 0px 10px 10px 0px;
  background-color: #32a852;
  color: white;
  flex: flex;
  flex-wrap: wrap;
  align-items: center;
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

export const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: flex;
  overflow-x: scroll;
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

    :hover {
      background-color: #81de00;
    }
  }
`
