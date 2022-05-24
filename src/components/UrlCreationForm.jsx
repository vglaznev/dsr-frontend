import React, {useState} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const UrlCreationForm = ({create}) => {
    const [originalUrl, setOriginalUrl] = useState("");
    const isAuth = useSelector(state => state)

    const createShortUrl = (e) => {
        if (isAuth) {
            const urlAlias = {
                id: Date.now(),
                shortUrl: originalUrl,
                originalUrl
            }
            create(urlAlias);
            setOriginalUrl("");
        } else {
            alert("Please login. Only users can create links");
        }
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