import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import SignupForm from "./SignUpForm";
import './SignUpForm.css';

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='signupbutton' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}


export default SignUpFormModal;
