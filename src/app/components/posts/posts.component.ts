import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as postActions from '../../store/actions'
import { AppStateInterface } from '../../types/appState.interface';
import { Observable } from 'rxjs';
import { isFailureSelector, isLoadingSelector, isSuccessSelector } from '../../store/selectors';
import { AsyncPipe } from '@angular/common';
import { PostInterface } from '../../types/post.interface';
@Component({
  selector: 'app-posts',
  imports: [AsyncPipe],
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  store = inject(Store<AppStateInterface>)
  isLoading$: Observable<boolean>
  posts$: Observable<PostInterface[]>
  error$: Observable<string | null>
  constructor() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(isFailureSelector))
    this.posts$ = this.store.select(isSuccessSelector)
  }
  ngOnInit() {
    this.store.dispatch(postActions.getPosts())
  }
}
