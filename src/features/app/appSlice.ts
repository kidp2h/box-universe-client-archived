import { createSlice } from '@reduxjs/toolkit';

type AppState = {
  page?: string;
  user?: any;
};
const initialState = {
  page: 'home',
} as AppState;
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changePage(state, action: any) {
      return { ...state, page: action.payload };
    },
  },
});

export const { changePage } = appSlice.actions;
export default appSlice.reducer;
