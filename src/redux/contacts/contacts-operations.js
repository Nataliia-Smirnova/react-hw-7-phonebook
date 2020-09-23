import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  changeFilter,
} from './contacts-actions';

const getContacts = () => dispatch => {
  dispatch(getContactRequest());

  axios
    .get('http://localhost:4040/contacts')
    .then(res => dispatch(getContactSuccess(res.data)))
    .catch(err => dispatch(getContactError(err)));
};

const addContact = contact => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('http://localhost:4040/contacts', { ...contact })
    .then(res => dispatch(addContactSuccess(res.data)))
    .catch(err => dispatch(addContactError(err)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`http://localhost:4040/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(err => dispatch(deleteContactError(err)));
};

export default {
  getContacts,
  addContact,
  deleteContact,
};
