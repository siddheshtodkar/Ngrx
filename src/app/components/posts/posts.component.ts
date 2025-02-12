import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as postActions from '../../store/actions'
import { AppStateInterface } from '../../types/appState.interface';
import { Observable } from 'rxjs';
import { isLoadingSelector } from '../../store/selectors';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-posts',
  imports: [AsyncPipe],
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  store = inject(Store<AppStateInterface>)
  isLoading$: Observable<boolean>
  constructor() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }
  ngOnInit() {
    this.store.dispatch(postActions.getPosts())
  }
}
