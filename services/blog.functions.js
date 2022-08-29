import { removeToken, setToken } from "../helpers"
import { setIsAuthenticated } from "../features/userSlice"

import AuthServices from "./auth.services"
const create = () => {
  const authServices = AuthServices.create();
  const authenticate = async (username, password, dispatch, router) => {
      authServices.Login({username:username, password:password, expiresInMins:180}).then((res)=>{
        if (!res.message){
          setToken(res.token);
          dispatch(setIsAuthenticated(true));
          router.push('/')
        }
      })
      
  }

  const logout = (dispatch) => {
      removeToken();
      dispatch(setIsAuthenticated(false));
  }
  const postComment = async (postId, userId, body) =>{
      authServices.PostComment({
        body: body,
        postId: postId,
        userId: userId})

  }
  return {logout, authenticate, postComment}
}
export default {create}