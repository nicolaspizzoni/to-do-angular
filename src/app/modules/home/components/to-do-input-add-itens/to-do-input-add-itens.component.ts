import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent {
  @Input() public isDisabled: boolean = false;
  @Output() public adicionarTarefa = new EventEmitter();

  // addTask(): void {
  //   this.adicionarTarefa.emit()
  // }

}
