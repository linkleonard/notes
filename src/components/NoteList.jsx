import React from 'react';
import { connect } from 'react-redux';
import ToggleNoteEdit from '../containers/ToggleNoteEdit.jsx';

const NoteList = ({ notes, editing }) => (
    <ul>
        {notes.map((note, index) => (
            <li key={ index }>
                { note.text }
                &nbsp;
                <ToggleNoteEdit index={ index } />
            </li>
        ))}
    </ul>
)

export default NoteList;
