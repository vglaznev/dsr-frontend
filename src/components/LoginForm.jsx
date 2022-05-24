import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Modal} from "react-bootstrap";

const LoginForm = ({visible, setVisible}) => {
    const dispatch = useDispatch();

    const closeForm = () => setVisible(false);

    const loginUser = () => {
        dispatch({type: 'Login'})
        closeForm();
    }

    return (
        <Modal show={visible} onHide={closeForm}>
            <Modal.Header className="modal-header text-center">
                <Modal.Title className="w-100">Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter username"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Password"/>
                    </Form.Group>

                    <Button variant="outline-primary" onClick={() => loginUser()}>
                        Login
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginForm;