import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserStoriesComponent } from './user-stories.component';

const routes: Routes = [{ path: '', component: UserStoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserStoriesRoutingModule {}
