import decode from 'jwt-decode';
export const TOKEN_KEY = "";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isTokenExpired =() => {
    const decoded = decode(localStorage.getItem(TOKEN_KEY));
    console.log(decoded)
    console.log(new Date(decoded.exp* 1000))
    if (decoded.exp < Date.now() / 1000) { 
        return true;
    }
    else
        return false;
}

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
