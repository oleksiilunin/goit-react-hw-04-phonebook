import React from 'react';
import PropTypes from 'prop-types';

import { HeaderTitle } from './Header.styled';

const Header = ({ headerTitle }) => {
  return <HeaderTitle>{headerTitle}</HeaderTitle>;
};

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};

export { Header };
