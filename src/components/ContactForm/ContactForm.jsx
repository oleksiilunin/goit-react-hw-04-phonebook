import { Formik } from 'formik';
import {
  Form,
  Label,
  LabelWrapper,
  Field,
  FormButton,
  ErrorMessage,
} from './ContactForm.styled';
import { FiPhone, FiUserPlus, FiUser } from 'react-icons/fi';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(20)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};
const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Label>
          <LabelWrapper>
            <FiUser size="20" />
            Name
          </LabelWrapper>
          <Field
            type="text"
            name="name"
            maxLength="20"
            // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
          <ErrorMessage name="name" component="span" />
        </Label>
        <Label>
          <LabelWrapper>
            <FiPhone size="20" />
            Number
          </LabelWrapper>
          <Field
            type="tel"
            name="number"
            maxLength="28"
            // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          <ErrorMessage name="number" component="span" />
        </Label>
        <FormButton type="submit">
          <FiUserPlus size="20" />
          Add contact
        </FormButton>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export { ContactForm };
