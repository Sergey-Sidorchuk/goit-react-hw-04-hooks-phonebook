import { useState, useEffect, useRef } from "react";
import shortid from 'shortid';
// import PropTypes, { shape } from 'prop-types';
import './App.css';
import listOfContact from "./data/contacts.json";

import ContactsList from "./Components/ContactsList";
import ContactsForm from "./Components/ContactsForm";
import Filter from "./Components/Filter";

export default function App() {

    const [contacts, setContacts] = useState(listOfContact);
    const [filter, setFilter] = useState("");
    const firstRender = useRef(true);
    
    
    useEffect(() => {
        if (firstRender.current) {
            const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
            
            if (parsedContacts) {
                setContacts(parsedContacts);
            }
            
            firstRender.current = false;
            return;
        }
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);
    
    
    function addContact(name, number) {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already added.`)
      : setContacts((prevContacts) => [contact, ...prevContacts]);
  }
    
    function changeFilter(event) {
        setFilter(event.currentTarget.value);
    };

  const getContacts = () => {
    const normalizeFilter = filter.toLowerCase();
      return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizeFilter),
    );
  }
    
    function deleteContact(contactId) {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
    };
    
    return (
        <div className="App">
            <h1>Phonebook</h1>
            <ContactsForm
                onSubmit={addContact}
            />

            <h2>Contacts</h2>

            <Filter
                value={filter}
                onChange={changeFilter}
            />

            <ContactsList
                contacts={getContacts()}
                onDeleteContact={deleteContact}
            />
        </div>
    );

}

// export default App;
// class App extends Component {
    //     static defaultProps = {
//         totalContactsCount: null,
//         visibleContacts: null,
//     }
//     static propTypes = {
    //         contacts: PropTypes.arrayOf(
//             PropTypes, shape(
//                 {
//                     id: PropTypes.any.isRequired,
//                     name: PropTypes.string.isRequired,
//                     number: PropTypes.string.isRequired,
//                 }
//             )
//         ),
//         filter: PropTypes.string,
//         totalContactsCount: PropTypes.number,
//         visibleContacts: PropTypes.number,
//     };
//     state = {
//         contacts:
//             [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
//         filter: '',
//     };

// componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState( {contacts: parsedContacts});
//     }
//   }
//     componentDidUpdate(prevState) {
//         if (this.state.contacts !== prevState.contacts) {
//             localStorage.setItem('contacts', JSON.stringify(this.state.contacts));            
//     }
// }

//     addContact = (name, number) => {
//         const isInContacts = this.state.contacts.some(contact => contact.name === name)
//         if (isInContacts) { alert(`${name} is already in contacts.`); return }
        
//         if (name && number) {
//             const contact = {
//                 id: shortid.generate(),
//                 name,
//                 number,
//             };
//             this.setState(prevState => ({
//                 contacts: [contact, ...prevState.contacts],
//             }));
//         }
//     };
//     deleteContact = (contactId => {
//         this.setState(prevState => ({
//             contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//         }))
//     });

//     changeFilter = event => {
//         this.setState({ filter: event.currentTarget.value })
//     }

     
//     render() {
//         const { contacts, filter } = this.state;
//         const totalContactsCount = contacts.length;

//         const normalizedFilter = this.state.filter.toLocaleLowerCase();
//         const visibleContacts = this.state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter),);
//     return (<div className="App">
//             <h1>Phonebook</h1>
//             <ContactsForm contacts={contacts} onAddContact={this.addContact} />
            
//             <h2>Contacts(total: {totalContactsCount})</h2>
//             <Filter value={filter} onchange={this.changeFilter} />
//             <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
//         </div>
//         );
//     }
// }


