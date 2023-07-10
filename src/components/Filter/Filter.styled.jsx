import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  gap: 8px;

  color: #666666;

  font-weight: 600;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 8px;
`;

export const Input = styled.input`
  display: block;

  padding: 8px;
  height: 36px;

  font-size: 16px;

  border-radius: 8px;

  border: 1px solid #cececf;

  color: #5b5c6c;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
