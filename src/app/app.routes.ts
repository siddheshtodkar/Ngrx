import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { postEffects } from './store/effects';

export const routes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    {
        path: 'posts', component: PostsComponent, providers: [
            importProvidersFrom(
                StoreModule.forFeature('posts', reducers),
                EffectsModule.forFeature([postEffects])
            )
        ]
    }
];