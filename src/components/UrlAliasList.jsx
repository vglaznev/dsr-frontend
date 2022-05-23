import React from 'react';
import {ListGroup} from "react-bootstrap";
import UrlAliasItem from "./item/UrlAliasItem";

const UrlAliasList = ({aliases, remove}) => {
    return (
        <ListGroup>
            {aliases.map(alias =>
                <UrlAliasItem alias={alias} remove={remove}/>
            )}
        </ListGroup>
    );
};

export default UrlAliasList;