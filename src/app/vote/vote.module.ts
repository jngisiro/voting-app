import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularVotingComponent } from './angular-voting/angular-voting.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { VoteService } from './service/vote.service';

@NgModule({
  declarations: [AngularVotingComponent, ThankYouComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [VoteService],
})
export class VoteModule {}
