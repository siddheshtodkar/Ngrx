import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "../services/posts.service";
import * as postActions from './actions'
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class postEffects {
    actions$ = inject(Actions)
    postService = inject(PostsService)
    getPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(postActions.getPosts),
            mergeMap(() => {
                return this.postService.getPosts().pipe(
                    map((posts) => postActions.getPostsSuccess({ posts })),
                    catchError((error) => of(postActions.getPostsFailure({ error: error.message })))
                )
            })
        )
    )
}