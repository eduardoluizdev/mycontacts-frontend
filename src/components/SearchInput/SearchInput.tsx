import { ChangeEvent } from 'react';
import { InputSearchContainer } from './styles';

type SearchInputProps = {
  searchTerm: string;
  handleChangeSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchInput({ searchTerm, handleChangeSearchTerm }:SearchInputProps) {
  return (
    <InputSearchContainer>
      <input type="text" value={searchTerm} onChange={handleChangeSearchTerm} placeholder="Pesquisar contato" />
    </InputSearchContainer>
  );
}
