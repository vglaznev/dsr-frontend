import axios from "axios";
import {getUserInfo} from "../auth/auth";

export const register = async (username, password) => {
    try {
        await axios.post("http://localhost:8080/api/v1/user/registration",
            {
                username,
                password
            });
    } catch (e) {
        alert("Username is already taken");
    }
}

export const createShortUrl = async (originalUrl) => {
    try {
        const response = await axios.post("http://localhost:8080/api/v1/short-url/create",
            originalUrl, {
                headers: {
                    'Content-Type': 'text/plain',
                    Authorization: 'Basic ' + getUserInfo()
                }
            }
        );
        return response.data;
    } catch (e) {
        alert("Url is incorrect");
    }

}



