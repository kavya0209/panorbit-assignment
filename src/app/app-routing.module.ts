import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {PostsComponent} from './posts/posts.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ToDoComponent} from './to-do/to-do.component';


const routes: Routes = [
  {path : '' , component:LandingPageComponent},
  {path : 'name-list' , component:LandingPageComponent},
  {path : 'profile/:id' , component: ProfilePageComponent},
  {path : 'posts/:id' , component: PostsComponent},
  {path : 'gallery/:id' , component: GalleryComponent},
  {path : 'toDo/:id' , component: ToDoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProfilePageComponent,LandingPageComponent, PostsComponent,GalleryComponent,ToDoComponent];

