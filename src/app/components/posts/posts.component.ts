import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as postActions from '../../store/actions'
@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  store = inject(Store)
  ngOnInit() {
    this.store.dispatch(postActions.getPosts())
  }
}
