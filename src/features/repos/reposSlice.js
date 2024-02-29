import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import fetchRepos from "./fetchRepos";

//actions
export const loadRepos = createAsyncThunk(
    'repos/loadRepos',
    async (arg, thunkAPI) => {
        const response = await fetchRepos()
        return response.json()
    }
)

//reducer
const initialState = {
    repos: [],
    isLoading: false,
    hasError: false
}
const reposSlice = createSlice({
    name: 'repos',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadRepos.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(loadRepos.fulfilled, (state, action) => {
            state.repos = action.payload;
            state.isLoading = false;
            state.hasError = false;
        })
    }
})

export const allRepos = (state) => state.repos.repos;

export default reposSlice.reducer;