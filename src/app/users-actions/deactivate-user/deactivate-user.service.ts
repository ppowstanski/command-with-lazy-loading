import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DeactivateUserService {
    deactivate(user: string): Observable<void> {
        console.log(`Deactivate user:' ${user}' via RestAPI`);
        return new Observable<void>();
    }
}