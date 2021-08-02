import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';


const ContactsList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
                <p className={styles.name}>{name} <span>{number}</span></p>
                <button
                    type="button"
                    className={styles.btn}
                    onClick={() =>
                    onDeleteContact(id)}
                >Delete
                </button>
            </li>
        )
        )}
    </ul>
);

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}
export default ContactsList;
