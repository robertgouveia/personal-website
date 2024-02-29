import { configureStore } from '@reduxjs/toolkit';
import reposSlice from "../features/repos/reposSlice";
export const store = configureStore({
  reducer: {
    repos: reposSlice
  }
});
