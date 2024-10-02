import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import { useNavigate } from "react-router-dom";
const Search = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('search') || '';
    const navigate = useNavigate();

    const handleSearch = useDebouncedCallback(
        (term: string) => {
          const params = new URLSearchParams(searchParams);
          if (term) {
            params.set('search', term);
          } else {
            params.delete('search');
          }
          navigate(`?${params.toString()}`);
        },
        500 // time
      );
    return (
      <input type="text" 
      placeholder='Введите для поиска...' 
      onChange={(e) => handleSearch(e.target.value)} 
      defaultValue={searchParams.get('search')?.toString()} 
      />
    );
}

export default Search;
