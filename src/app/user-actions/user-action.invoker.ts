import {createNgModuleRef, Injectable, Injector} from '@angular/core';
import {from, Observable} from 'rxjs';
import {DeactivateUserModule} from '@app/user-actions/deactivate-user';
import {DeleteUserModule} from '@app/user-actions/delete-user';
import {UserAction} from './user-action';


export const deactivateUserCommandLoader = (injector: Injector): Observable<UserAction> => {
    return from(
        import('@app/user-actions/deactivate-user')
            .then((m) => createNgModuleRef<DeactivateUserModule>(m.DeactivateUserModule, injector).instance.command));
};

export const deleteUserCommandLoader = (injector: Injector): Observable<UserAction> => {
    return from(
        import('@app/user-actions/delete-user')
            .then((m) => createNgModuleRef<DeleteUserModule>(m.DeleteUserModule, injector).instance.command));
};

export class UserActionInvoker {
    static execute(injector: Injector, userAction: string, user: string, callback: () => void): void {
        switch (userAction) {
            case 'Delete':
                deleteUserCommandLoader(injector).subscribe((command: UserAction) => command.execute(user, callback));
                break;
            case 'Deactivate':
                deactivateUserCommandLoader(injector).subscribe((command: UserAction) => command.execute(user, callback));
                break;
            default:
                console.log(`Unknown action '${userAction}'.`);
                return;
        }
    }
}