import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteMenuComponent } from './vote-menu/vote-menu.component';

@NgModule({
  declarations: [VoteMenuComponent],
  imports: [CommonModule],
  exports: [VoteMenuComponent],
})
export class NavigationModule {}
