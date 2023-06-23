import { Component } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'], 
  providers: [MessageService, ConfirmationService]
})
export class AboutPageComponent {

  constructor(private messageService: MessageService, 
              private confirmationService: ConfirmationService) {

  }
  confirm() {
    this.confirmationService.confirm({
      message: "are you sure?", 
      header: "Confirmation", 
      icon: 'pi pi-exclamation-triangle', 
      accept: ()=> {
        this.messageService.add({
          severity: 'success', 
          summary: "Confirmed", 
          detail: "You confirmed the option"
        });
      }, 
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
              this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
              break;
          case ConfirmEventType.CANCEL:
              this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
              break;

        }
      }
    });
  }

}
