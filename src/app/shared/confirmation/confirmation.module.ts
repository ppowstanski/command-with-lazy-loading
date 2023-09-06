import {NgModule} from '@angular/core';
import {ConfirmationService} from './confirmation.service';
import {ConfirmationComponent} from '@app/shared/confirmation/confirmation.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [MatDialogModule, MatButtonModule],
    providers: [ConfirmationService],
    declarations: [ConfirmationComponent]
})
export class ConfirmationModule {

}