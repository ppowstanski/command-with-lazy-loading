import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserModule} from '@app/shared/rest/user';

import {DeactivateUserCommand} from './deactivate-user.command';
import {DeactivateUserService} from './deactivate-user.service';
import {UserAction} from '../user-action';

@NgModule({
    declarations: [],
    providers: [DeactivateUserService],
    imports: [CommonModule, UserModule]
})
export class DeactivateUserModule {
    constructor(private commandService: DeactivateUserService) {
    }

    createCommandInstance(): UserAction {
        return new DeactivateUserCommand(this.commandService)
    }
}
