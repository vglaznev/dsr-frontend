import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import UrlAliasList from "./components/UrlAliasList";
import UrlCreationForm from "./components/UrlCreationForm";
import Header from "./components/Header";

function App() {

    const [urlAliases, setUrlAliases] = useState([]);
    const maxAmountOfLinksInStack = 5;


    const addAlias = (urlAlias) => {
        urlAliases.unshift(urlAlias);
        if (urlAliases.length === maxAmountOfLinksInStack + 1) {
            urlAliases.pop();
        }
        setUrlAliases([...urlAliases]);
    }

    const removeAlias = (alias) => {
        setUrlAliases(urlAliases.filter(a => a.id !== alias.id));
    }

    return (
        <>
            <Header/>
            <Container className="w-75 p-3">
                <UrlCreationForm create={addAlias}/>
                <UrlAliasList aliases={urlAliases} remove={removeAlias}/>
            </Container>
        </>
    );
}

export default App;
