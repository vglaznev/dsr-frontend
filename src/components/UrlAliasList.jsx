import React from 'react';
import {ListGroup} from "react-bootstrap";
import UrlAliasItem from "./item/UrlAliasItem";

const UrlAliasList = ({aliases, remove}) => {
    return (
        <ListGroup>
            {aliases.map(alias =>
                <UrlAliasItem alias={alias} remove={remove} key={alias.id}/>
            )}
        </ListGroup>
    );
};

export default UrlAliasList;