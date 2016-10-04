import React from 'react';
import { Modal } from 'react-bootstrap';
import NoteForm from '../containers/NoteForm.jsx';

const NoteModal = ({ show, index, handleSubmit }) => (
    <Modal show={ show } >
        <Modal.Header>
            <h4>{ index === null ? 'Create new' : 'Update' } Note</h4>
        </Modal.Header>
        <Modal.Body>
            <NoteForm onSubmit={ handleSubmit } />
        </Modal.Body>
    </Modal>
)

export default NoteModal;
