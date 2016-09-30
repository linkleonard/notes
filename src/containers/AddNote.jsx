import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions.jsx';


let AddNote = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input ref={ note => input = note } />
            <button
                type="button"
                onClick={e => {
                    e.preventDefault();

                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addNote({ text: input.value }));
                    input.value = ''
                }}
            >Save</button>
        </div>
    );
}

AddNote = connect()(AddNote);

export default AddNote;
