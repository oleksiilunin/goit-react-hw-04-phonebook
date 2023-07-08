import styled from '@emotion/styled';

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  /* max-width: 540px; */
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  color: #5b5c6c;
  margin-bottom: 12px;
  font-size: 36px;
`;

export { SectionWrapper, SectionTitle };
