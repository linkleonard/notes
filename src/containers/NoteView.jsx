import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions.jsx';
import NoteList from './NoteList.jsx';
import AddNoteForm from './AddNoteForm.jsx';



let NoteView = ({ dispatch }) => {
    const createNewNote = (values) => {
        return new Promise(resolve => {
            // Simulate an Ajax request by using a 500ms delay
            setTimeout(() => {
                dispatch(addNote(values));

                resolve();
            }, 500);
        });
    }

    return (
        <div>
            <NoteList />
            <AddNoteForm onSubmit={ createNewNote } />
        </div>
    );
}

NoteView = connect()(NoteView);

export default NoteView;
