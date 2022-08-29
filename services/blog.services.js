import Api from './api';
var baseUrl = process.env.BASE_URL;
const create = () => {
    const api = Api.create();
    const GetPost = (postId) => api.get(`${baseUrl}/posts/${postId}`);
    const GetPosts = (postCount) => api.get(`${baseUrl}/posts?limit=${postCount}`)
    const GetComments = (postId) => api.get(`${baseUrl}/comments/post/${postId}`)
    const GetUser = (userId) => api.get(`${baseUrl}/users/${userId}`)
    return {
        GetPost,
        GetComments,
        GetUser,
        GetPosts,
    };
};
export default { create };