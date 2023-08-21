import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeactivateUserService} from './deactivate-user.service';
import {UserAction} from '@app/users-actions';
import {DeactivateUserCommand} from './deactivate-user.command';

@NgModule({
    declarations: [],
    providers: [DeactivateUserService],
    imports: [CommonModule]
})
export class DeactivateUserModule {
    constructor(private commandService: DeactivateUserService) {
    }

    createCommandInstance(): UserAction {
        return new DeactivateUserCommand(this.commandService)
    }
}
