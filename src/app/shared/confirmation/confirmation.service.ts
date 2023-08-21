import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class ConfirmationService {
    confirm(): Observable<boolean> {
        console.log('Action confirmed!')
        return of(true);
    }
}