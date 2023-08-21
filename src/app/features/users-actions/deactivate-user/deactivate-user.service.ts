import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserService} from '@app/shared/rest/user';
import {ConfirmationService} from '@app/shared/confirmation';

@Injectable()
export class DeactivateUserService {
    constructor(
        private readonly userRestService: UserService,
        private readonly confirmationService: ConfirmationService) {
    }

    confirm(): Observable<boolean> {
        return this.confirmationService.confirm();
    }

    deactivate(user: string): Observable<void> {
        return this.userRestService.deactivate(user);
    }
}