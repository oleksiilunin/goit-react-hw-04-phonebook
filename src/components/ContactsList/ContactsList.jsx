import { BeatLoader } from 'react-spinners';
import { FiUserMinus } from 'react-icons/fi';
import {
  List,
  Item,
  ItemWrapper,
  DeleteButton,
  NameSpan,
  NumberSpan,
} from './ContactsList.styled';
import PropTypes from 'prop-types';

<BeatLoader
  color="#36d7b7"
  cssOverride={{}}
  margin={2}
  size={16}
  speedMultiplier={1}
/>;

const ContactsList = ({ filteredContacts, onDeleteContact, loadSpinner }) => {
  const sortedList = filteredContacts.sort((firstContact, secondContact) =>
    firstContact.name
      .toLowerCase()
      .localeCompare(secondContact.name.toLowerCase())
  );
  return (
    <>
      {loadSpinner ? (
        <BeatLoader
          color="#666666"
          // cssOverride={{}}
          margin={2}
          size={12}
          speedMultiplier={1}
        />
      ) : (
        !!filteredContacts.length && (
          <List>
            {sortedList.map(({ id, name, number }) => (
              <Item key={id}>
                <ItemWrapper>
                  <NameSpan>{name}:</NameSpan> <NumberSpan>{number}</NumberSpan>
                </ItemWrapper>
                <DeleteButton
                  type="button"
                  onClick={() => onDeleteContact(id)}
                  aria-label="Delete contact"
                >
                  <FiUserMinus />
                </DeleteButton>
              </Item>
            ))}
          </List>
        )
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export { ContactsList };
