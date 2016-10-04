import React from 'react';
import { connect } from 'react-redux';
import { setActiveNote, setNoteEditorActive } from '../actions.jsx';
import ToggleNoteEditComponent from '../components/ToggleNoteEdit.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (index) => {
            dispatch(setActiveNote({ index }));
            dispatch(setNoteEditorActive({ active: true }));
        }
    }
}

const ToggleNoteEdit = connect(null, mapDispatchToProps)(ToggleNoteEditComponent);

export default ToggleNoteEdit;
