import { createSlice } from '@reduxjs/toolkit';

type AppState = {
  page?: string;
  user?: any;
};
const initialState = {
  page: 'home',
  user: null,
} as AppState;
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changePage(state, action: any) {
      return { ...state, page: action.payload };
    },
    setUser(state, action: any) {
      return { ...state, user: action.payload };
    },
  },
});

export const { changePage, setUser } = appSlice.actions;
export default appSlice.reducer;
