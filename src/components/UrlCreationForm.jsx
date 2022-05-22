import React from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const UrlCreationForm = () => {
    return (
        <InputGroup className="mb-4">
            <FormControl
                placeholder="Original url"
            />
            <Button variant="outline-secondary" id="button-addon2">
                Create
            </Button>
        </InputGroup>
    );
};

export default UrlCreationForm;