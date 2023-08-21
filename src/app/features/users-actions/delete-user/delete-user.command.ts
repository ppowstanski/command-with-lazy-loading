import {DeleteUserService} from './delete-user.service';
import {UserAction} from '..';
import {filter, of, switchMap, tap} from 'rxjs';

export class DeleteUserCommand implements UserAction {
    constructor(private readonly commandService: DeleteUserService) {
    }

    execute(user: string, callback: () => void): void {
        of(undefined).pipe(
            switchMap(() => this.commandService.confirm()),
            filter(confirmed => confirmed),
            switchMap(() => this.commandService.delete(user)),
            tap(() => callback())
        ).subscribe();
    }
}