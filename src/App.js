import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, FormControl, InputGroup, Navbar} from "react-bootstrap";
import UrlAliasList from "./components/UrlAliasList";

function App() {

    const array = [
        {shortUrl: "short-url-1", originalUrl: "original-url-1"},
        {shortUrl: "short-url-2", originalUrl: "original-url-2"},
        {shortUrl: "short-url-3", originalUrl: "original-url-3"},
    ]

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Short url</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="!#">Vsevolod</a>
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

                <UrlAliasList aliases={array}/>
            </Container>
        </>
    );
}

export default App;
