import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {

  @Input() message!: string;
  @Output() outermessage=  new EventEmitter<string>();

  emit(){
    this.outermessage.emit("message from Child Component");
  }


}
