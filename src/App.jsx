import { useState, useEffect, useCallback } from 'react';
import { 
  getContacts, 
  createContact, 
  handleApiError 
} from './services/contactService';
import './App.css';
import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactPinned from './components/ContactPinned';
import ContactForm from './components/ContactForm';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const fetchContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');
      const data = await getContacts();
      setContacts(data);
      !selectedContact && setSelectedContact(data[0]);
    } catch (error) {
      setErrorMessage(handleApiError(error));
    } finally {
      setIsLoading(false);
    }
  }, [selectedContact]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleCreateContact = async (contactData) => {
    try {
      setIsLoading(true);
      const newContact = await createContact(contactData);
      setContacts(prev => [...prev, newContact]);
      setSelectedContact(newContact);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: handleApiError(error)
      };
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        {isLoading ? (
          <LoadingSpinner />
        ) : errorMessage ? (
          <ErrorMessage 
            message={errorMessage}
            onRetry={fetchContacts}
          />
        ) : (
          <div style={styles.layout}>
            <div>
              <ContactForm onSave={handleCreateContact} />
              <ContactPinned 
                contact={selectedContact}
                onClear={() => setSelectedContact(null)}
              />
            </div>
            <ContactList 
              contacts={contacts}
              selectedContact={selectedContact}
              onContactSelect={setSelectedContact}
            />
          </div>
        )}
      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  main: {
    padding: '2rem'
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '2rem'
  }
};

export default App;
