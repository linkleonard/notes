import React from 'react';
import { connect } from 'react-redux';
import { modifyNote, toggleNoteEditing } from '../actions.jsx';


let SaveNote = ({ dispatch, index, getValue }) => (
    <button
        type="button"
        onClick={ () => {
            dispatch(modifyNote({ index, text: getValue() }))
            dispatch(toggleNoteEditing({ index }))
        }}
    >Save</button>
);

SaveNote = connect()(SaveNote);

export default SaveNote;
