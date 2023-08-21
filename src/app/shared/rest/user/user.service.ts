import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    deactivate(user: string): Observable<void> {
        console.log(`Deactivate user: '${user}' via RestAPI`);
        return of(void 0);
    }

    delete(user: string): Observable<void> {
        console.log(`Delete user: '${user}' via RestAPI`);
        return of(void 0);
    }
}