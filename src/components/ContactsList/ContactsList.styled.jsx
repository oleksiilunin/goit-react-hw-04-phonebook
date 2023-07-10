import styled from '@emotion/styled';

export const List = styled.ul`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 0 8px;
  max-width: 480px;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 42px;
  width: 100%;
  /* max-width: 480px; */
`;

export const ItemWrapper = styled.p`
  display: flex;
  gap: 36px;
  /* max-width: 320px; */
  width: 100%;
  /* justify-content: space-between; */
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  border-radius: 8px;
  border: 1px solid #cececf;

  font-size: 16px;
  font-weight: 500;

  background-color: #d2d8db;
  color: #666666;
  box-shadow: #b4b4b4 2px 2px 0px;
  transition: transform 200ms, box-shadow 200ms;

  &:active {
    transform: translateX(2px) translateY(2px);
    box-shadow: #b4b4b4 0px 0px 0px;
  }
`;

export const NameSpan = styled.span`
  display: block;
  width: 100%;
  max-width: 160px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;
export const NumberSpan = styled.span`
  /* display: block; */
  word-break: break-all;
  /* white-space: wrap; */
  overflow-wrap: break-word;
`;
