import React from 'react';
import { connect } from 'react-redux';
import { toggleNoteEditing } from '../actions.jsx';
import ToggleNoteEditComponent from '../components/ToggleNoteEdit.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (index) => {
            dispatch(toggleNoteEditing({ index }));
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editing: state.noteList.editing[ownProps.index],
    };
}

const ToggleNoteEdit = connect(mapStateToProps, mapDispatchToProps)(ToggleNoteEditComponent);

export default ToggleNoteEdit;
