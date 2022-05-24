import React, {useState} from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {connect, useDispatch, useSelector} from "react-redux";
import {logout} from "../auth/auth";

const LoginButtonGroup = ({showLoginForm, showSignUpForm}) => {

    return(
    <>
        <Button style={{marginRight: "10px"}} variant="outline-primary" onClick={() => showLoginForm()}>
            Login
        </Button>
        <Button variant="outline-primary" onClick={() => showSignUpForm()}>
            Sign up
        </Button>
    </>);
}

const LogoutButtonGroup = () => {

    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch({type: "Logout"});
        logout();
    }

    return(
        <>
            <Button variant="outline-primary" onClick={() => logoutUser()}>
                Logout
            </Button>
        </>);
}

const Header = ({showLoginForm, showSignUpForm, isAuthenticated }) => {
    const state = useSelector(state => state);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Short url</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    {!isAuthenticated? <LoginButtonGroup  showLoginForm={showLoginForm} showSignUpForm={showSignUpForm}/>
                    : <LogoutButtonGroup/>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const mapStateToProps = state => ({isAuthenticated: state})

export default connect(mapStateToProps)(Header);
