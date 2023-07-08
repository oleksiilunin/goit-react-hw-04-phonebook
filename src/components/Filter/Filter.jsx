import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Label, LabelWrapper, Input } from './Filter.styled';

import PropTypes from 'prop-types';

const Filter = ({ filterValue, onChangeInput }) => {
  return (
    <Label>
      <LabelWrapper>
        <FiSearch size="20" />
        Find contacts by name
      </LabelWrapper>

      <Input
        type="text"
        name="filter"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChangeInput}
      />
    </Label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export { Filter };
