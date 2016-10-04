import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import NoteForm from './NoteForm.jsx';
import Container from '../components/NoteModal.jsx';
import { addNote, modifyNote, setNoteEditorActive } from '../actions.jsx';


const mapStateToProps = (state) => {
    return {
        show: state.noteList.noteEditorActive,
        index: state.noteList.editing,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const createNote = (values) => {
        return new Promise(resolve => {
            // Simulate an Ajax request by using a 500ms delay
            setTimeout(() => {
                dispatch(addNote(values));
                dispatch(setNoteEditorActive({ active: false }));
                resolve();
            }, 500);
        });
    }
    const updateNote = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                dispatch(modifyNote(values));
                dispatch(setNoteEditorActive({ active: false }));
                resolve();
            });
        });
    }
    const handleCancel = () => {
        dispatch(setNoteEditorActive({ active: false }));
    }

    return {
        createNote,
        updateNote,
        handleCancel,
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { createNote, updateNote, ...restDispatchProps } = dispatchProps;
    const wrappedUpdateNote = values => updateNote({
        index: stateProps.index,
        ...values
    });

    const props = {
        handleSubmit: stateProps.index === null ? createNote: wrappedUpdateNote,
        ...stateProps,
        ...restDispatchProps,
        ...ownProps,
    }
    return props;
}

const NoteModal = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Container);

export default NoteModal;
