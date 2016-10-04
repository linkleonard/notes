import React from 'react';
import { Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import WrappedFormControl from '../components/WrappedFormControl.jsx';


const AddNote = ({ handleSubmit, pristine, invalid, submitting, ...props }) => (
    <form onSubmit={handleSubmit}>
        <Field
            name="text"
            component={ WrappedFormControl }
            type="text"
            placeholder="Note text"
        />
        <Button
            type="submit"
            disabled={pristine || invalid || submitting }
            bsStyle="primary"
        >Save</Button>
    </form>
);


const AddNoteForm = reduxForm({
    form: 'addNote',
})(AddNote);

export default AddNoteForm;
