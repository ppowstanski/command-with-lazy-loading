import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeleteUserService} from './delete-user.service';
import {UserAction} from '@app/users-actions';
import {DeleteUserCommand} from './delete-user.command';

@NgModule({
    declarations: [],
    providers: [DeleteUserService],
    imports: [CommonModule]
})
export class DeleteUserModule {
    constructor(private commandService: DeleteUserService) {
    }

    createCommandInstance(): UserAction {
        return new DeleteUserCommand(this.commandService)
    }
}
