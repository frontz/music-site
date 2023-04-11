import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {CustomMusicComponent} from "./pages/custom-music/custom-music.component";
import {OriginalProjectsComponent} from "./pages/original-projects/original-projects.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'custom-music', component: CustomMusicComponent },
  { path: 'original-projects', component: OriginalProjectsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
