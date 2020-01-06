import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { AccountComponent } from './components/account/account.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { VideoPageComponent } from './video-page/video-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: VideoFormComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'video-page/:videoId', component: VideoPageComponent},
  { path: 'users', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
