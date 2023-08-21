import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserModule} from '@app/shared/rest/user';
import {UserAction} from '@app/features/user-actions';

import {DeleteUserService} from './delete-user.service';
import {DeleteUserCommand} from './delete-user.command';

@NgModule({
    declarations: [],
    providers: [DeleteUserService],
    imports: [CommonModule, UserModule]
})
export class DeleteUserModule {
    constructor(private commandService: DeleteUserService) {
    }

    createCommandInstance(): UserAction {
        return new DeleteUserCommand(this.commandService)
    }
}
