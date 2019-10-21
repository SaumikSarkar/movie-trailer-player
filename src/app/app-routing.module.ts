import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: VideoPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
