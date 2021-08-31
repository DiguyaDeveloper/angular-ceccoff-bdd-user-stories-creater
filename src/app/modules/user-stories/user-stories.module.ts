import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserStoriesRoutingModule } from './user-stories-routing.module';
import { UserStoriesComponent } from './user-stories.component';

@NgModule({
  declarations: [UserStoriesComponent],
  imports: [CommonModule, UserStoriesRoutingModule],
})
export class UserStoriesModule {}
