import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteMenuComponent } from './vote-menu/vote-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VoteMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [VoteMenuComponent],
})
export class NavigationModule {}
