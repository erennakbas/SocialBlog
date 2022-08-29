import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isAuthenticated:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setIsAuthenticated: (state,action) => {
      state.isAuthenticated=action.payload
    }   
  }
})

// Action creators are generated for each case reducer function
export const {setUser, setIsAuthenticated } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export default userSlice.reducer