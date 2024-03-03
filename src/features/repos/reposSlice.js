import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
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
    hasError: false,
    load: 3,
}
const reposSlice = createSlice({
    name: 'repos',
    initialState: initialState,
    reducers: {
        loadMore: (state, action) => {
            action.payload ? state.load = action.payload : state.load += 3;
        },
        filter: (state, action) => ({
            ...state,
            repos: state.repos.filter((repo) => repo.topics.includes(action.payload)),
            load: 3
        }),
        clearFilter: (state) => ({
            ...state,
            filtered: [],
            load: 3
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadRepos.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(loadRepos.fulfilled, (state, action) => {
            state.load = 3
            state.repos = action.payload;
            state.isLoading = false;
            state.hasError = false;
        })
    }
})

export const allRepos = state => state.repos.repos;
export const selectLoad = state => state.repos.load;
export const filteredRepos = state => state.repos.filtered;
export const {loadMore, filter, clearFilter} = reposSlice.actions;
export const selectReposToShow = createSelector(
    [selectLoad, allRepos],
    (loadCount, loadedRepos) => {
        return loadedRepos.slice(0, loadCount);
    }
);

export default reposSlice.reducer;