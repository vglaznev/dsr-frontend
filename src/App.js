import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import CurrentCreatedUrls from "./components/CurrentCreatedUrls";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
    const [loginFormVisible, setLoginFormVisible] = useState(false);
    const [registerFormVisible, setRegisterFormVisible] = useState(false);
    const showLoginForm = () => setLoginFormVisible(true);
    const showRegisterForm = () => setRegisterFormVisible(true);

    return (
        <>
            <Header showLoginForm={showLoginForm} showSignUpForm={showRegisterForm}/>
            <LoginForm visible={loginFormVisible} setVisible={setLoginFormVisible}/>
            <RegistrationForm visible={registerFormVisible} setVisible={setRegisterFormVisible}/>
            <CurrentCreatedUrls/>
        </>
    );
}

export default App;
