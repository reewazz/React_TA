import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: !!localStorage.getItem("token"),
  user: {
    name: localStorage.getItem("name") || null,
    email: localStorage.getItem("email") || null
  }
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
    login: (state, action) => {
      state.isLoggedIn = true
      state.user.name = action.payload.name
      state.user.email = action.payload.email 

      localStorage.setItem("token",action.payload.token)
      localStorage.setItem("name",action.payload.name)
      localStorage.setItem("email",action.payload.email)
       },

       logout :(state)=> {
          state.isLoggedIn = false
           state.user.name = null
      state.user.email = null
      localStorage.removeItem("token")
      localStorage.removeItem("name")
      localStorage.removeItem("email")
       }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer