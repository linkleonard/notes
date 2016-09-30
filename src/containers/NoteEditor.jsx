import React from 'react';
import { connect } from 'react-redux';
import SaveNote from './SaveNote.jsx';

let NoteEditor = ({ index, defaultValue, props }) => {
    let input;

    return <div style={{display: 'inline-block'}}>
        <input type="text" ref={ c => input = c } defaultValue={ defaultValue } {...props} />
        <SaveNote getValue={ () => input.value.trim() } index={ index } />
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (index) => {
            dispatch(toggleNoteEditing({ index }));
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
}

NoteEditor = connect(mapStateToProps, mapDispatchToProps)(NoteEditor);

export default NoteEditor;
