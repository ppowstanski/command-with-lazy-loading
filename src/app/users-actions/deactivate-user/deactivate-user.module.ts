import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeactivateUserService} from './deactivate-user.service';
import {UserAction} from '@app/users-actions';

@NgModule({
    declarations: [],
    providers: [DeactivateUserService],
    imports: [CommonModule]
})
export class DeactivateUserModule implements UserAction {
    constructor(private command: DeactivateUserService) {
    }

    execute(user: string, callback: () => void): void {
        this.command.execute(user, callback);
    }
}
