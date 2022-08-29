import Api from './api';
import { setIsAuthenticated } from '../features/userSlice';
import { removeToken } from '../helpers';
var baseUrl = process.env.BASE_URL

const create = () => {
    const api = Api.create();

    const Login = (params) => api.post(`${baseUrl}/auth/login`, params);
    const Logout = (dispatch) => {
        removeToken();
        dispatch(setIsAuthenticated(false));
    }
    const PostComment = (params) => api.post(`${baseUrl}/comments/add`, params)
    return {
        Login,
        Logout,
        PostComment
    };
};
export default { create };