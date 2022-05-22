import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, FormControl, InputGroup, ListGroup, Navbar} from "react-bootstrap";

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Short url</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a>Vsevolod</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="w-75 p-3">
                <InputGroup className="mb-4">
                    <FormControl
                        placeholder="Original url"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Create
                    </Button>
                </InputGroup>

                <ListGroup>
                    <ListGroup.Item className="d-flex justify-content-around">
                        <div className="float-left">Original url</div>
                        <div className="vr"></div>
                        <div className="float-right">Short url</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-around">
                        <div className="float-left">Original url</div>
                        <div className="vr"></div>
                        <div className="float-right">Short url</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-around">
                        <div className="float-left">Original url</div>
                        <div className="vr"></div>
                        <div className="float-right">Short url</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-around">
                        <div className="float-left">Original url</div>
                        <div className="vr"></div>
                        <div className="float-right">Short url</div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-around">
                        <div className="float-left">Original url</div>
                        <div className="vr"></div>
                        <div className="float-right">Short url</div>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </>
    );
}

export default App;
