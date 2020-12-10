import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotingHomeComponent } from './home/voting-home/voting-home.component';

const routes: Routes = [
  {
    path: '',
    component: VotingHomeComponent,
  },
  {
    path: 'home',
    component: VotingHomeComponent,
  },
  {
    path: 'vote',
    loadChildren: () => import('./vote/vote.module').then((m) => m.VoteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
