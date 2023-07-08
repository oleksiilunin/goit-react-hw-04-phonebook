import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;
  margin: 24px auto;
  max-width: 640px;

  background-color: #ececec;
  border-radius: 8px;
  border: 1px solid #cececf;

  box-shadow: rgb(125, 123, 131) -1px -1px 15px,
    rgb(255, 255, 255) 15px 15px 35px;
  color: #666666;
`;

export { AppContainer };
