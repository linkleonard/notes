import React from 'react';
import Link from './Link.jsx';

const ToggleNoteEdit = ({ index, editing, onClick }) => (
    <Link onClick={ () => onClick(index) }>
        { !editing ? 'Edit' : 'Revert' }
    </Link>
)

export default ToggleNoteEdit;
