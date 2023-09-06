import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({template: `
    <div style="width: 400px; margin: 2rem;">
        <div style="margin-bottom: 1rem">{{data.confirmationContent}}</div>
        <button mat-raised-button color="warn" [mat-dialog-close]="true" style="margin-right: 0.5rem">Yes</button>
        <button mat-raised-button color="primary"  [mat-dialog-close]="false">Cancel</button>
    </div>
    `
})
export class ConfirmationComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: {confirmationContent: string}) {

    }
}