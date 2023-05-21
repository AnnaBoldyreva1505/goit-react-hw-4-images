import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import {
  HeaderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonInput,
  Span,
} from './Searchbar.styled';
import toast from 'react-hot-toast';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Enter your requests');
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <HeaderSearchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <Span>
            <BsFillSearchHeartFill size="2em" fill="#3f51b5" />
          </Span>
        </SearchFormButton>
        <SearchFormButtonInput
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </HeaderSearchbar>
  );
};

Searchbar.propTypes = {
  searchQuery: PropTypes.string,
  onSubmit: PropTypes.func,
};
