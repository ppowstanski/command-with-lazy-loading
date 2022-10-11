import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeactivateUserService} from './deactivate-user.service';

@NgModule({
  declarations: [],
  providers: [
    DeactivateUserService
  ],
  imports: [
    CommonModule
  ]
})
export class DeactivateUserModule {
  constructor(readonly command: DeactivateUserService) {
  }
}
