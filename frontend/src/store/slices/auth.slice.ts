import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {  UserType, UserState } from '../../utils/types';
import type { RootState } from '../store';

const initialState: UserState= {
  user:null 
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    removeUser:(state) => {
      state.user = null;
    },
  },
});

export const { 
  setUser, 
  removeUser

} = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectUserAuthenticated = (state: RootState) => state.auth.user ?? state.auth.user ;


export default authSlice.reducer;