import styled from '@emotion/styled';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 480px;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  font-weight: 600;

  color: #666666;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding-left: 8px;
`;

export const Field = styled(FormikField)`
  padding: 8px;
  height: 36px;

  border-radius: 8px;
  border: 1px solid #cececf;

  color: #5b5c6c;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  font-size: 16px;
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 160px;
  height: 36px;
  padding: 8px;
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

export const ErrorMessage = styled(FormikError)`
  max-width: 480px;
  color: tomato;
`;
