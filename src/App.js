import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from "react-bootstrap";
import UrlAliasList from "./components/UrlAliasList";
import UrlCreationForm from "./components/UrlCreationForm";

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
                <UrlCreationForm/>
                <UrlAliasList aliases={array}/>
            </Container>
        </>
    );
}

export default App;
