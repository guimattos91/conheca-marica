import styled from 'styled-components'

export const BackDiv = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px;
`

export const StyledTitle = styled.h2`
  color: #2d677f;
  font-size: 18px;
  font-weight: 700;
`
export const StyledText = styled.p`
  color: #6c757d;
  font-size: 18px;
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
    font-size: 14px;
  }
`
export const ButtonDiv = styled.div`
  border-radius: 90px;
  padding: 5px 5px 5px 5px;
  background-color: #fff;
  border-color: #dedede;
  border-style: solid;
  border-width: thin;
  flex: flex;
  align-items: center;

  &:hover {
    border-color: #97ae76;
  }
`
