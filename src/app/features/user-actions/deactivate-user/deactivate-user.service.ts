import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ConfirmationService} from '@app/shared/confirmation';
import {UserService} from '@app/shared/rest/user';

@Injectable()
export class DeactivateUserService {
    constructor(
        private readonly userRestService: UserService,
        private readonly confirmationService: ConfirmationService) {
    }

    confirm(user: string): Observable<boolean> {
        return this.confirmationService.confirm(`Do you want to deactivate user '${user}'?`);
    }

    deactivate(user: string): Observable<void> {
        return this.userRestService.deactivate(user);
    }
}