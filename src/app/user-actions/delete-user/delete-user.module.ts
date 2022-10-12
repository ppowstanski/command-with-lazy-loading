import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeleteUserService} from './delete-user.service';
import {UserAction} from '@app/users-actions';

@NgModule({
    declarations: [],
    providers: [DeleteUserService],
    imports: [CommonModule]
})
export class DeleteUserModule implements UserAction {
    constructor(private command: DeleteUserService) {
    }

    execute(user: string, callback: () => void): void {
        this.command.execute(user, callback);
    }
}