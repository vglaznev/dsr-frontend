import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

const UrlCreationForm = ({create}) => {
    const [originalUrl, setOriginalUrl] = useState("");


    const createShortUrl = (e) => {
        const urlAlias = {
            id: Date.now(),
            shortUrl: originalUrl,
            originalUrl
        }
        create(urlAlias);
        setOriginalUrl("");
    }

    return (
        <InputGroup className="mb-4">
            <FormControl
                value={originalUrl}
                placeholder="Original url"
                onChange={e => setOriginalUrl(e.target.value)}
            />
            <Button
                variant="outline-secondary"
                onClick={e => createShortUrl(e)}
            >
                Create
            </Button>

        </InputGroup>
    );
};

export default UrlCreationForm;