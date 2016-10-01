import React from 'react';
import { Button } from 'react-bootstrap';

const ToggleNoteEdit = ({ index, editing, onClick }) => {
    const label = !editing ? 'Edit' : 'Revert';
    const bsStyle = !editing ? 'default' : 'danger';
    return (
        <Button
            bsStyle={ bsStyle }
            onClick={ () => onClick(index) }
        >{ label }</Button>
    );
}

export default ToggleNoteEdit;
