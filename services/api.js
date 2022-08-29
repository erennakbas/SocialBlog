import { getToken } from "../helpers";
import { removeToken } from "../helpers";
const create = () => {
    const $header = { 'Content-Type': 'application/json' };
    $header['Accept-Language'] = 'en-EN';

    const get = (url) => {
       
        const token = getToken();
        if (token && token !== '' && token !== null) {
            $header.Authorization = `Bearer ${token}`;
        }
        return new Promise((resolve, reject) => {
            const requestOptions = { method: 'GET', headers: $header };
            fetch(url, requestOptions)
                .then(handleErrors)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    const post = (url, params) => {
        const token = getToken();
        if (token && token !== '' && token !== null) {
            $header.Authorization = `Bearer ${token}`;
        }
        return new Promise((resolve, reject) => {
            const requestOptions = {
                method: 'POST',
                headers: $header,
                body: JSON.stringify(params),
                contenttype: 'application/json'
            };
            fetch(url, requestOptions)
                .then(handleErrors)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    const put = (url, params) => {
        const token = getToken();
        if (token && token !== '' && token !== null) {
            $header.Authorization = `Bearer ${token}`;
        }
        return new Promise((resolve, reject) => {
            const requestOptions = {
                method: 'PUT',
                headers: $header,
                body: JSON.stringify(params)
            };

            fetch(url, requestOptions)
                .then(handleErrors)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    const del = (url, params) => {
        const token = getToken();
        if (token && token !== '' && token !== null) {
            $header.Authorization = `Bearer ${token}`;
        }
        return new Promise((resolve, reject) => {
            const requestOptions = {
                method: 'DELETE',
                headers: $header,
                body: JSON.stringify(params)
            };
            fetch(url, requestOptions)
                .then(handleErrors)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    const patch = (url, params) => {
        const token = getToken();
        if (token && token !== '' && token !== null) {
            $header.Authorization = `Bearer ${token}`;
        }
        return new Promise((resolve, reject) => {
            const requestOptions = {
                method: 'PATCH',
                headers: $header,
                body: JSON.stringify(params)
            };
            fetch(url, requestOptions)
                .then(handleErrors)
                .then((resp) => {
                    resolve(resp);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
    return { get, post, put, del, patch};
};
    
    function handleErrors(response) {
        const cloneResponse = response.clone().json();
        response.text().then((text) => {
            if (response.status === 400) {
                const responseObj = JSON.parse(text);
                if (responseObj) {
                    if (responseObj.title) {
                        console.error(responseObj.title);
                    } else if (responseObj.messages) {
                        if (Array.isArray(responseObj.messages) && responseObj.messages.length > 0) {
                            console.error(responseObj.messages[0]);
                        } else if (isString(responseObj.messages)) {
                            console.error(responseObj.messages);
                        }
                    }
                }
            }
            if (response.status===400){
                console.log('Invalid credentials.')
                alert('Invalid credentials.')
                return 
              }
            if (response.status === 401) {
                removeToken();
                if (text) {
                    console.error(`${JSON.parse(text).messages}`);
                }
                if (window.location.pathname.indexOf('login') === -1) {
                    window.location.reload();
                }
            }
            if (response.status === 404) {
                console.log(response);
                console.error('Service not found.');
            }
            if (response.status === 500) {
                console.error('An unexpected error occured.');
            }
        });
        return cloneResponse;
    }
    export default {create};