import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface User {
  username:string;
  email:string,
  logedIn:boolean;
}

const initialState : User = {
  username:'',
  email:'',
  logedIn:false
}

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<User>) => {
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.logedIn = true;
      },
     logOut: (state) => {
        state.username = '';
        state.email = '';
        state.logedIn = false;
      }
  }
})