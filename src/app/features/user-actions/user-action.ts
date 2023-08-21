import {Observable} from 'rxjs';

export interface UserAction {
    execute(user: string): Observable<void>
}