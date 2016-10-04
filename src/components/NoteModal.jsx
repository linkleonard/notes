import React from 'react';
import { Modal } from 'react-bootstrap';
import NoteForm from '../containers/NoteForm.jsx';

const NoteModal = ({ show, handleSubmit }) => (
    <Modal show={ show } >
        <Modal.Body>
            <NoteForm onSubmit={ handleSubmit } />
        </Modal.Body>
    </Modal>
)

export default NoteModal;
