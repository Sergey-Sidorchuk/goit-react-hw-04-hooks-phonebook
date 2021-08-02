import { useState } from "react";
import PropTypes  from 'prop-types';
import styles from './ContactsForm.module.css';

function ContactsForm ({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
  
  function handleChange(event) {
      const { name, value } = event.currentTarget;
      switch (name) {
          case "name":
              setName(value);
              break;
          
              case "number":
                  setNumber(value);
              break;
          
                  default:
                      return;
                    }
    };
                function handleSubmit(event) {
                    event.preventDefault();
                    onSubmit(name, number);
                    setName("");
                    setNumber("");
    };
                
    return (
        <form className={styles.form}>
            <label className={styles.label}>Name:
                <input type="text" name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    className={styles.input}
                    value={name}
                    onChange={handleChange}
                    required
                    />
            </label>
            <label className={styles.label}>Number:
                <input type="tel" name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    className={styles.input} value={number}
                    onChange={handleChange}
                    required />
            </label>
            <button type="button" className={styles.btn} onClick={handleSubmit}>Add contact</button>
        </form>
    );
}

ContactsForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
};


export default ContactsForm;
// class ContactsForm extends Component{
//     static propTypes = {
//         name: PropTypes.string,
//         number: PropTypes.number,
//     };

//     state = {
//         name: '',
//         number: '',
//     };

//     handleChange = (event) => {
//         this.setState({ [event.currentTarget.name]: event.currentTarget.value })
//     }
    
//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.onAddContact(this.state.name, this.state.number);
//         this.setState({ name: '', number: '' });
//     }

//     render() {
//         return (
//             <form className={styles.form}>
//                 <label className={styles.label}>Name:
//                     <input type="text" name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                         className ={styles.input}
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                         required 
//                     />
//                 </label>
//                 <label className={styles.label}>Number:
//                     <input type="tel" name="number"
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                     className={styles.input} value={this.state.number} onChange={this.handleChange} required />
//                 </label>
//                 <button type="button" className={styles.btn} onClick={this.handleSubmit}>Add contact</button>
//             </form>
//         )
//     }
//     }



