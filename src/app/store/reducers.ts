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
    on(postActions.getPosts, (state) => ({ ...state, isLoading: true })),
    on(postActions.getPostsSuccess, (state, action) => ({ ...state, isLoading: false, posts: action.posts })),
    on(postActions.getPostsFailure, (state, action) => ({ ...state, isLoading: false, error: action.error }))
)