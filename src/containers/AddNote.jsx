import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addNote } from '../actions.jsx';


let AddNote = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input ref={ note => input = note } />
            <Button
                bsStyle="primary"
                onClick={e => {
                    e.preventDefault();

                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addNote({ text: input.value }));
                    input.value = ''
                }}
            >Save</Button>
        </div>
    );
}

AddNote = connect()(AddNote);

export default AddNote;
