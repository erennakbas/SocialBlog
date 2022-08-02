import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isAuthenticated:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.user = action.payload
      localStorage.setItem('access-token', action.payload.token);
      state.isAuthenticated=true;
    },
    logout:(state)=>{
      state.user = {}
      localStorage.removeItem('access-token');
      state.isAuthenticated=false;
    }    
  }
})

// Action creators are generated for each case reducer function
export const { authenticate, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectAuthenticated = (state) => state.isAuthenticated;
export default userSlice.reducer