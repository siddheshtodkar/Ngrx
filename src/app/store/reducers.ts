import { createReducer, on } from "@ngrx/store";
import { PostsStateInterface } from "../types/postsState.interface";
import * as postActions from './actions'

export const initialState: PostsStateInterface = {
    isLoading: false,
    posts: [],
    error: null
}

export const reducers = createReducer(
    initialState,
    on(postActions.getPosts, (state) => ({ ...state, isLoading: true }))
)