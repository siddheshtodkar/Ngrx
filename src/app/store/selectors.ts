import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../types/appState.interface";
import { PostsStateInterface } from "../types/postsState.interface";

export const selectFeature = (state: AppStateInterface) => state.posts

export const isLoadingSelector = createSelector(
    selectFeature,
    (state: PostsStateInterface) => state.isLoading
)

export const isSuccessSelector = createSelector(
    selectFeature,
    (state: PostsStateInterface) => state.posts
)

export const isFailureSelector = createSelector(
    selectFeature,
    (state: PostsStateInterface) => state.error
)