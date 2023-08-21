import {filter, Observable, of, switchMap} from 'rxjs';

import {UserAction} from '@app/features/user-actions';

import {DeactivateUserService} from './deactivate-user.service';

export class DeactivateUserCommand implements UserAction {
    constructor(private readonly commandService: DeactivateUserService) {
    }

    execute(user: string): Observable<void> {
        return of(void 0).pipe(
            switchMap(() => this.commandService.confirm()),
            filter(confirmed => confirmed),
            switchMap(() => this.commandService.deactivate(user)),
        )
    }
}