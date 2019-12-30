import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { VideoComponent } from './component/video/video.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "video", component: VideoComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
