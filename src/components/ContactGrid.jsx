import ContactCard from './ContactCard';

const ContactGrid = ({ contacts, selectedContact, onContactSelect }) => {
  return (
    <div style={styles.grid}>
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          isSelected={selectedContact?.id === contact.id}
          onClick={() => onContactSelect(contact)}
        />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px 0'
  }
};

export default ContactGrid;