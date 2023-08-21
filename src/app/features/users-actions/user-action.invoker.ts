import {Injectable, Injector} from '@angular/core';

import {DeleteUserLoader} from './delete-user';
import {DeactivateUserLoader} from './deactivate-user';

import {UserAction} from './user-action';

export type UserActionType = 'Delete' | 'Deactivate';

@Injectable({providedIn: 'root'})
export class UserActionInvoker {

    constructor(private readonly injector: Injector) {
    }

    execute(userAction: UserActionType, user: string, callback: () => void): void {
        switch (userAction) {
            case 'Delete':
                DeleteUserLoader
                    .createInstance(this.injector)
                    .subscribe(
                        (command: UserAction) => command.execute(user, callback)
                    );
                break;
            case 'Deactivate':
                DeactivateUserLoader
                    .createInstance(this.injector)
                    .subscribe(
                        (command: UserAction) => command.execute(user, callback)
                    );
                break;
            default:
                console.log(`Unknown action '${userAction}'.`);
                return;
        }
    }
}