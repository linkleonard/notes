import React from 'react';
import { connect } from 'react-redux';
import ToggleNoteEdit from '../containers/ToggleNoteEdit.jsx';
import SaveNote from '../containers/SaveNote.jsx';
import NoteEditor from '../containers/NoteEditor.jsx';

const NoteList = ({ notes, editing }) => (
    <ul>
        {notes.map((note, index) => (
            <li key={ index }>
                { !editing[index] ? note.text : <NoteEditor index={ index } defaultValue={ note.text } /> }
                &nbsp;
                <ToggleNoteEdit index={ index } />
            </li>
        ))}
    </ul>
)

export default NoteList;
