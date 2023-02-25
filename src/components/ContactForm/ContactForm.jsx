import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  handleSubmit = ({ name, number }, actions) => {
    const nameInContacts = this.props.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), name, number };
    this.props.onSave(contact);
    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="number">
            Number
            <Field type="tel" name="number" required />
          </label>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
