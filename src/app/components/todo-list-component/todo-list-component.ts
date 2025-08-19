import { Component } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoItemComponent } from '../todo-item-component/todo-item-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list-component',
  imports: [TodoItemComponent, CommonModule],
  templateUrl: './todo-list-component.html',
  styleUrl: './todo-list-component.css'
})
export class TodoListComponent {

    
  public todoList: Array<Todo> = [ {
        id: 1,
        title: 'Nettoyer la cuisine',
        isCompleted: false
    },

         {
        id: 2,
        title: 'Aller au golf',
        isCompleted: true
    }]


     public handleTaskDelete(toDoId: number): void {
        alert(`Le parent a reçu une demande de suppression pour la tâche avec l'ID : ${toDoId}`);
        // Ici, on mettrait la logique pour supprimer la tâche de notre liste.
    }

       public handleTaskCompletion(toDo: Todo): void {
        alert(`Le parent a reçu une demande de changement d'état pour la tâche ${toDo.id} : isCompleted = ${toDo.isCompleted}`);
        // Ici, on mettrait la logique pour supprimer l'utilisateur de notre liste.
    }
}
