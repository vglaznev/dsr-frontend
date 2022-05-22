import React from 'react';
import {ListGroup} from "react-bootstrap";

const UrlAliasItem = ({alias}) => {
    return (
            <ListGroup.Item className="d-flex justify-content-around" key={alias.shortUrl}>
                <div className="float-left">{alias.originalUrl}</div>
                <div className="vr"></div>
                <div className="float-right">{alias.shortUrl}</div>
            </ListGroup.Item>
    );
};

export default UrlAliasItem;