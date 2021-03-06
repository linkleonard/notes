import React from 'react';
import { Modal } from 'react-bootstrap';
import NoteForm from '../containers/NoteForm.jsx';

const NoteModal = ({ show, index, handleSubmit, handleCancel, initialValues }) => (
    <Modal show={ show } onHide={ handleCancel }>
        <Modal.Header>
            <h4>{ index === null ? 'Create new' : 'Update' } Note</h4>
        </Modal.Header>
        <Modal.Body>
            <NoteForm
                initialValues={initialValues}
                onSubmit={ handleSubmit }
                handleCancel={handleCancel}
            />
        </Modal.Body>
    </Modal>
)

export default NoteModal;
