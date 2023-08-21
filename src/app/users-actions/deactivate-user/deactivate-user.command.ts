import {UserAction} from '@app/users-actions';
import {DeactivateUserService} from './deactivate-user.service';

export class DeactivateUserCommand implements UserAction {
    constructor(private readonly commandService: DeactivateUserService) {
    }

    execute(user: string, callback: () => void): void {
        this.commandService.deactivate(user);
        callback();
    }
}