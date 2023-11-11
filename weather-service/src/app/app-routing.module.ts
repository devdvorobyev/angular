import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* Компоненты для роутинга */
import { HomeComponent } from './layout/pages/home/home.component';
import { AuthorizationComponent } from './layout/pages/authorization/authorization.component';
import { AboutComponent } from './layout/pages/about/about.component';
import { SettingComponent } from './layout/pages/setting/setting.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'authorization', component: AuthorizationComponent},
  { path: 'about', component: AboutComponent},
  { path: 'settings', component: SettingComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
