import React from 'react';
import {Button, ButtonGroup, ListGroup} from "react-bootstrap";
import {RiFileCopyLine, RiCloseFill} from 'react-icons/ri';
import styles from "./UrlAliasItem.module.css"


const UrlAliasItem = ({alias, remove}) => {
    return (
        <div className="d-flex">
            <ListGroup.Item className={styles.item}>
                <div className={styles.output}>{alias.originalUrl}</div>
                <div className="vr"></div>
                <div className={styles.output}>{alias.shortUrl}</div>
            </ListGroup.Item>
            <ButtonGroup>
                <Button variant="outline-secondary" onClick={() => navigator.clipboard.writeText(alias.shortUrl)}>
                    <RiFileCopyLine/>
                </Button>
                <Button variant="outline-secondary" onClick={() => remove(alias)}>
                    <RiCloseFill/>
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default UrlAliasItem;