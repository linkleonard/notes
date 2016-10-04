import React from 'react';
import { connect } from 'react-redux';
import AddNoteButton from './AddNoteButton.jsx';
import NoteList from './NoteList.jsx';
import NoteModal from './NoteModal.jsx';


let NoteView = ({ dispatch }) => {
    return (
        <div>
            <NoteList />
            <AddNoteButton />
            <NoteModal />
        </div>
    );
}

NoteView = connect()(NoteView);

export default NoteView;
