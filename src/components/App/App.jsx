import { useState } from 'react';

import { AppContainer } from './App.styled';
import { Header } from 'components/Header';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';
import { GlobalStyles } from 'components/GlobalStyles';
// import dataContacts from '../../data/contacts.json';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLocalStorage from 'hooks/useLocalStorage';

const notifyOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filterValue, setFilterValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addContact = newContact => {
    contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? toast.error(
          `The contact with name: ${newContact.name} or phone number: ${newContact.number} already exists in your list.`,
          notifyOptions
        )
      : setContacts(prevContacts => {
          return [...prevContacts, newContact].sort(
            (firstContact, secondContact) =>
              firstContact.name
                .toLowerCase()
                .localeCompare(secondContact.name.toLowerCase())
          );
        });
  };
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  // useEffect(() => {
  //   const contacts = JSON.parse(window.localStorage.getItem('contacts'));
  //   if (contacts) {
  //     setContacts(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const deleteContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
    setFilterValue('');
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLocaleLowerCase())
    );
  };

  const handleChangeFilterInput = e => {
    const { value } = e.currentTarget;
    if (value.charAt(0) === ' ') {
      // If the first symbol is a gap(space), we ignore it
      setFilterValue(value.slice(1));
    } else {
      setFilterValue(value);
    }
  };

  // const toggleLoading = () => {
  //   setIsLoading(isLoading => !isLoading);
  // };

  return (
    <AppContainer>
      <Header headerTitle="Phonebook" />
      <Section>
        <ContactForm onAddContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter
          filterValue={filterValue}
          onChangeInput={handleChangeFilterInput}
        />
        <ContactsList
          loadSpinner={isLoading}
          filteredContacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>

      <GlobalStyles />
      <ToastContainer />
    </AppContainer>
  );
}

export default App;
