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

const ContactsList = ({ filteredContacts, onDeleteContact }) => {
  const sortedList = filteredContacts.sort((firstContact, secondContact) =>
    firstContact.name
      .toLowerCase()
      .localeCompare(secondContact.name.toLowerCase())
  );
  return (
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
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export { ContactsList };
