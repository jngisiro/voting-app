import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularVotingComponent } from './angular-voting/angular-voting.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: 'ng-vote',
    component: AngularVotingComponent,
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoteRoutingModule {}
