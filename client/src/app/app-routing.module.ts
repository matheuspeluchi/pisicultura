
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SinginComponent } from './shared/components/singin/singin.component';
import { HomeComponent } from './home/home/home.component';
import { HomeGuardService } from './home/home-guard.service';
import { AuthGuardService } from './core/auth/auth-guard.service';



const routes: Routes = [
  {
    path: 'login',
    component: SinginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [ HomeGuardService],
    children: [
      {
        path: 'arearestrita',
        loadChildren: () => import('./area-restrita/area-restrita.module').then(m => m.AreaRestritaModule),

      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
