import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import UrlAliasList from "./components/UrlAliasList";
import UrlCreationForm from "./components/UrlCreationForm";
import Header from "./components/Header";

function App() {

    const array = [
        {shortUrl: "short-url-1", originalUrl: "original-url-1"},
        {shortUrl: "short-url-2", originalUrl: "original-url-2"},
        {shortUrl: "short-url-3", originalUrl: "original-url-3"},
    ]

    return (
        <>
            <Header/>
            <Container className="w-75 p-3">
                <UrlCreationForm/>
                <UrlAliasList aliases={array}/>
            </Container>
        </>
    );
}

export default App;
