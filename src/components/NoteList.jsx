import React from 'react';

const NoteList = ({ notes }) => (
    <ul>
        {notes.map((note, index) => (
            <li key={ index }>{ note.text }</li>
        ))}
    </ul>
)

export default NoteList;
