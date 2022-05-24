export const login = (username, password) => {
    localStorage.setItem('auth', btoa(username + ':' + password));
}

export const logout = () => {
    localStorage.removeItem('auth');
}

export const getUserInfo = () => {
    return localStorage.getItem('auth');
}