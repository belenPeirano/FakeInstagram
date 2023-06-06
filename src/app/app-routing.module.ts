import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './Pages/discover/discover.component';
import { SearchComponent } from './Pages/search/search.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DiscoverComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'profile/:user',
    component: ProfileComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
