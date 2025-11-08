import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  role: "Admin" | "Artist" | "Visitor" | "Curator" | null;
  name: string | null;
}

const initialState: UserState = { role: null, name: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.role = action.payload.role;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.role = null;
      state.name = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
export {};
