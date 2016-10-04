import React from 'react';
import { Button } from 'react-bootstrap';
import { Field } from 'redux-form';
import WrappedFormControl from '../components/WrappedFormControl.jsx';
import { reduxForm } from 'redux-form';


let NoteForm = ({ handleSubmit, pristine, invalid, submitting, showCancel = true, ...props }) => (
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
        { showCancel && <Button
            disabled={submitting}
            bsStyle="danger"
        >
            Cancel
        </Button>}
    </form>
);

NoteForm = reduxForm({
    form: 'note',
})(NoteForm);

export default NoteForm;
