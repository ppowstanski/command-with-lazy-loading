import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DeleteUserService {
    delete(user: string): Observable<void> {
        console.log(`Delete user:' ${user}' via RestAPI`);
        return new Observable<void>();
    }
}