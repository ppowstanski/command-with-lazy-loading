import {filter, Observable, of, switchMap} from 'rxjs';

import {UserAction} from '@app/features/user-actions';

import {DeleteUserService} from './delete-user.service';

export class DeleteUserCommand implements UserAction {
    constructor(private readonly commandService: DeleteUserService) {
    }

    execute(user: string): Observable<void> {
        return of(void 0).pipe(
            switchMap(() => this.commandService.confirm()),
            filter(confirmed => confirmed),
            switchMap(() => this.commandService.delete(user))
        );
    }
}