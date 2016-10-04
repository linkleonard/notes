import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { modifyNote, setActiveNote } from '../actions.jsx';


let SaveNote = ({ dispatch, index, getValue }) => (
    <Button
        bsStyle='primary'
        onClick={ () => {
            dispatch(modifyNote({ index, text: getValue() }))
            dispatch(setActiveNote({ index }))
        }}
    >Save</Button>
);

SaveNote = connect()(SaveNote);

export default SaveNote;
