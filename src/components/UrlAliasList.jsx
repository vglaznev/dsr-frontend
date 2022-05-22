import React from 'react';
import {ListGroup} from "react-bootstrap";
import UrlAliasItem from "./UrlAliasItem";

const UrlAliasList = ({aliases}) => {
    return (
        <ListGroup>
            {aliases.map(alias =>
                <UrlAliasItem alias={alias}/>
            )}
        </ListGroup>
    );
};

export default UrlAliasList;