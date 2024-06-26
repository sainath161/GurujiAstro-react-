import React, { useState } from 'react';
import { Button, BackButton } from './StyledComponents';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Confirmation = ({ formData, setFormData, setStep }) => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
        // Store the form data in local storage
        localStorage.setItem('submittedFormData', JSON.stringify(formData));

        // Clear the form data
        setFormData({
            name: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        });

        // Show modal
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        // Navigate back to the personal info page after closing modal
        setStep(1);
    };

    return (
        <div>
            <h2>Confirmation</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Address Line 1:</strong> {formData.address1}</p>
            <p><strong>Address Line 2:</strong> {formData.address2}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>State:</strong> {formData.state}</p>
            <p><strong>Zip Code:</strong> {formData.zip}</p>
            <div className="navigation-buttons">
                <BackButton onClick={() => setStep(2)}>Back</BackButton>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>

            {/* Modal for form submission success */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Form Submitted Successfully!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your form has been successfully submitted. Thank you!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Confirmation;
