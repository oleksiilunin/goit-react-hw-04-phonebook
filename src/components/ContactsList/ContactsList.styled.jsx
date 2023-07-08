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

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #d2d8db;
  color: #666666;

  font-size: 16px;
  font-weight: 500;
`;

export const NameSpan = styled.span`
  display: block;
  width: 100%;
  max-width: 160px;
  white-space: nowrap;
`;
