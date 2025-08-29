import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {  UserType, UserState } from '../../utils/types';
import type { RootState } from '../store';

const initialState: UserState = {
  user:{
    username:'',
    avatar:''
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { 
  setUser, 

} = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;


export default authSlice.reducer;