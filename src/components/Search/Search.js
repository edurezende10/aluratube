import React from 'react';
import { StyledSearch } from './SearchStyles';

export default function Search({setValorDaBusca,valorDaBusca}) {
  
  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => {
          setValorDaBusca(e.target.value);
        }}
        value={valorDaBusca}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
