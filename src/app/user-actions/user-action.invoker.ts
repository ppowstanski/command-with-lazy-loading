import {createNgModule, Injectable} from '@angular/core';
import {DeactivateUserModule} from '@app/users-actions/deactivate-user';
import {from, Observable} from 'rxjs';
import {DeleteUserModule} from '@app/users-actions/delete-user';

export const deactivateUserCommandLoader = (): Observable<UserAction> => {
    return from(
        import('@app/users-actions/deactivate-user')
            .then((m) => createNgModule<DeactivateUserModule>(m.DeactivateUserModule).instance));
};

export const deleteUserCommandLoader = (): Observable<UserAction> => {
    return from(
        import('@app/users-actions/delete-user')
            .then((m) => createNgModule<DeleteUserModule>(m.DeleteUserModule).instance));
};

@Injectable({providedIn: 'root'})
export class UserActionInvoker {
    private commands = new Map<string, UserAction>();

    execute(userAction: string, user: string, callback: () => void): void {

        const command = this.commands.get(userAction);

        if (!!command) {
            command.execute(user, callback);
            return;
        }

        switch (userAction) {
            case 'Delete':
                deleteUserCommandLoader().subscribe((command: UserAction) => this.setCommand(userAction, command, user, callback));
                break;
            case 'Deactivate':
                deactivateUserCommandLoader().subscribe((command: UserAction) => this.setCommand(userAction, command, user, callback));
                break;
            default:
                console.log(`Unknown action '${userAction}'.`);
                return;
        }
    }

    private setCommand(userAction: string, command: UserAction, user: string, callback: () => void): void {
        this.commands.set(userAction, command);
        command.execute(user, callback);
    }
}