import {DeleteUserService} from './delete-user.service';
import {UserAction} from '@app/users-actions';

export class DeleteUserCommand implements UserAction {
    constructor(private readonly commandService: DeleteUserService) {
    }

    execute(user: string, callback: () => void): void {
        this.commandService.delete(user);
        callback();
    }
}