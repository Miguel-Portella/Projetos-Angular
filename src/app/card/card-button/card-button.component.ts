import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.css'
})
export class CardButtonComponent {
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();
  onButtonClick(){
    console.log('onButtonClick');
    this.buttonClickEmitter.emit(true);
  }
}
