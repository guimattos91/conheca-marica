import { memo, SetStateAction } from 'react'

import { BsSearch } from 'react-icons/bs'

import { ButtonStyled, InputStyled, SearchDiv } from './style'

interface ISearchProps {
  placeholderText: string
  handleSearch: () => Promise<void>
  clearSearch: () => void
  setSearch: (value: SetStateAction<string>) => void
  search: string
}

const SearchComponent: React.FC<ISearchProps> = ({
  placeholderText,
  handleSearch,
  clearSearch,
  search,
  setSearch,
}) => {
  return (
    <SearchDiv className="d-flex align-items-center flex-grow-1 px-3">
      <InputStyled
        type="text"
        placeholder={placeholderText}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search.length > 1 && (
        <ButtonStyled type="button" onClick={clearSearch}>
          <p className="p-0 m-0 pe-2">x</p>
        </ButtonStyled>
      )}
      <ButtonStyled type="button" onClick={handleSearch}>
        <BsSearch />
      </ButtonStyled>
    </SearchDiv>
  )
}
export default memo(SearchComponent)
