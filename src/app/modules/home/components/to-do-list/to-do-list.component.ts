import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent {
  public listTask: Array<{nome: string, checked: boolean}> = [
    {nome: '', checked: false}
  ]

  public disableAddButton:boolean = true;

  checkTask(index: number): void {
    this.listTask[index].checked = !this.listTask[index].checked
  }

  teste(): void {
    if(this.listTask[this.listTask.length - 1].nome.length > 0){
      this.disableAddButton = false
    }
  }

  adicionar(): void {
    if(this.listTask[this.listTask.length - 1].nome.length > 0){
      this.listTask.push({nome: '', checked: false})
    }

    this.disableAddButton = true
  }
}
