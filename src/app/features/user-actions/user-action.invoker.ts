import {Injectable, Injector} from '@angular/core';
import {map, Observable, switchMap, take} from 'rxjs';

import {DeleteUserLoader} from './delete-user';
import {DeactivateUserLoader} from './deactivate-user';
import {UserAction} from './user-action';

export type UserActionType = 'Delete' | 'Deactivate';

@Injectable({providedIn: 'root'})
export class UserActionInvoker {

    constructor(private readonly injector: Injector) {
    }

    execute(userAction: UserActionType, user: string): Observable<void> {
        let command: Observable<UserAction>;

        switch (userAction) {
            case 'Delete':
                command = DeleteUserLoader.createInstance(this.injector)
                break;
            case 'Deactivate':
                command = DeactivateUserLoader.createInstance(this.injector)
                break;
        }

        return command.pipe(
            switchMap((command: UserAction) => command.execute(user)),
            map(() => void 0)
        );
    }
}