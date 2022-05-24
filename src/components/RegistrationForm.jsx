import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {register} from "../service/api";

const RegistrationForm = ({visible, setVisible}) => {
    const [info, setInfo] = useState({username: "", password: ""});

    const closeForm = () => setVisible(false);

    const registerUser = () => {
        register(...info);
        closeForm();
    }

    return (
        <Modal show={visible} onHide={closeForm}>
            <Modal.Header className="modal-header text-center">
                <Modal.Title className="w-100">Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            placeholder="Enter username"
                            onChange={e => setInfo({...info, username: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            placeholder="Password"
                            onChange={e => setInfo({...info, password: e.target.value})}
                        />
                    </Form.Group>

                    <Button variant="outline-primary" onClick={() => registerUser()}>
                        Register
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default RegistrationForm;