import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../types/appState.interface";
import { PostsStateInterface } from "../types/postsState.interface";

export const selectFeature = (state: AppStateInterface) => state.posts

export const isLoadingSelector = createSelector(
    selectFeature,
    (state: PostsStateInterface) => state.isLoading
)