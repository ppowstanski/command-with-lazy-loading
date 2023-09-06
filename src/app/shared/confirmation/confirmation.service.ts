import {Injectable} from '@angular/core';
import {filter, Observable, tap} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationComponent} from '@app/shared/confirmation/confirmation.component';

@Injectable()
export class ConfirmationService {

    constructor(public dialog: MatDialog) {
    }

    confirm(confirmationContent: string): Observable<boolean> {
        const dialogRef = this.dialog.open(ConfirmationComponent, {data : {confirmationContent}});

        return dialogRef.afterClosed().pipe(
            filter(confirmed => confirmed),
            tap(() => console.log(`Action confirmed!`))
        );
    }
}