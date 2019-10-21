import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {SidenavModule} from './components/sidenav/sidenav.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'hos',
    component: SidenavComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import ('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'questionnaires',
        loadChildren: () => import ('./pages/questionnaires/questionnaires.module').then(m => m.QuestionnairesModule)
      },
      {
        path: 'page-three',
        loadChildren: () => import ('./pages/page-three/page-three.module').then(m => m.PageThreeModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SidenavModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
