import React, {useState} from 'react';
import UrlCreationForm from "./UrlCreationForm";
import UrlAliasList from "./UrlAliasList";
import {Container} from "react-bootstrap";

const CurrentCreatedUrls = () => {
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
        <Container className="w-75 p-3">
            <UrlCreationForm create={addAlias}/>
            <UrlAliasList aliases={urlAliases} remove={removeAlias}/>
        </Container>
    );
};

export default CurrentCreatedUrls;