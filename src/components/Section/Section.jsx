import PropTypes from 'prop-types';

import { SectionTitle, SectionWrapper } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionWrapper>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export { Section };
