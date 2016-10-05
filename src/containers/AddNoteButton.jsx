import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { setActiveNote, setNoteEditorActive } from '../actions.jsx';


let AddNoteButton = ({ dispatch }) => (
    <Button
        bsStyle='primary'
        onClick={ () => {
            dispatch(setActiveNote({ index: null }));
            dispatch(setNoteEditorActive({ active: true }));
        }
    }>
        Add Note
    </Button>
);

AddNoteButton = connect()(AddNoteButton);

export default AddNoteButton;
