import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingHomeComponent } from './voting-home/voting-home.component';

@NgModule({
  declarations: [VotingHomeComponent],
  imports: [CommonModule],
  exports: [VotingHomeComponent],
})
export class HomeModule {}
