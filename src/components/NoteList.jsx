import React from 'react';
import { connect } from 'react-redux';
import ToggleNoteEdit from '../containers/ToggleNoteEdit.jsx';

import styles from './NoteList.less';

const NoteList = ({ notes, editing }) => (
    <ul>
        {notes.map((note, index) => (
            <li className={styles.noteList} key={ index }>
                { note.text }
                &nbsp;
                <ToggleNoteEdit index={ index } />
            </li>
        ))}
    </ul>
)

export default NoteList;
