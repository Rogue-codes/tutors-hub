
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IStudent {
    id:string;
    first_name:string;
    last_name:string;
    email:string; 
    department:string;
    is_active:boolean;
    role:string;
    phone:string
}

export interface ITutor {
  id:string;
  first_name:string;
  last_name:string;
  email:string; 
  department:string;
  is_active:boolean;
  role:string;
  phone:string
}

export interface ISuperAdmin {
  id:string;
  first_name:string;
  last_name:string;
  email:string; 
  role:string;
}

export interface IInitialState {
  user: IStudent | ITutor | ISuperAdmin | null;
}

const user = localStorage.getItem("user-tutor");

const initialState: IInitialState = {
  user: user ? JSON.parse(user!) : undefined,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<IStudent|ITutor|ISuperAdmin>
    ) => {
      state.user = action.payload;

      localStorage.setItem("user-tutor", JSON.stringify(state.user));
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;