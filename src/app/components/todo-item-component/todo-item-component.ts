import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item-component',
  imports: [FormsModule],
  templateUrl: './todo-item-component.html',
  styleUrl: './todo-item-component.css'
})
export class TodoItemComponent {
  @Input() public toDo!: Todo

  @Output() public deleteRequest:EventEmitter<number> = new EventEmitter<number>();

    public deleteTodo(): void {
    console.log(`Demande de suppression pour la tâche ${this.toDo.id}`);
    this.deleteRequest.emit(this.toDo.id);
}


  @Output() public emitRequest:EventEmitter<Todo> = new EventEmitter<Todo>();



  public toggleCompletion(): void {
        this.emitRequest.emit(this.toDo);

}

}
