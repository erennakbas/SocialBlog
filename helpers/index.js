const getToken = () => {
    if (typeof window !== "undefined") 
        return localStorage.getItem('accessToken');
}
const setToken = (token) => {
    if (typeof window !== "undefined") 
        localStorage.setItem('accessToken', token);
};
const removeToken = () => {
    if (typeof window !== "undefined") 
        return localStorage.removeItem('accessToken');
};
const isAuthenticated= () => {
    return getToken() ? true : false;
}
const decodedToken = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
}
const getUsernameAndUserId = () => {
    const token = getToken()
    if (token){
        const decoded_token = decodedToken(token);
        return {username:decoded_token?.username, id:decoded_token?.id};
    }
    return {};
}
const getTokenExpirationTime = () => {
    const _decodedToken = decodedToken(getToken());
    return _decodedToken?.exp;
};
export {getToken, setToken, removeToken, decodedToken, getUsernameAndUserId, getTokenExpirationTime, isAuthenticated}