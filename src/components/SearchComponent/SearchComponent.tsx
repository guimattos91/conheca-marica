import { memo, SetStateAction } from 'react'

import { BsSearch } from 'react-icons/bs'

import { ButtonStyled, InputStyled, SearchDiv } from './style'

interface ISearchProps {
  placeholderText: string
  handleSearch: () => Promise<void>
  setSearch: (value: SetStateAction<string>) => void
  search: string
}

const SearchComponent: React.FC<ISearchProps> = ({
  placeholderText,
  handleSearch,
  search,
  setSearch,
}) => {
  return (
    <SearchDiv className="d-flex  align-items-center px-3">
      <InputStyled
        type="text"
        placeholder={placeholderText}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ButtonStyled type="button" onClick={handleSearch}>
        <BsSearch />
      </ButtonStyled>
    </SearchDiv>
  )
}
export default memo(SearchComponent)
