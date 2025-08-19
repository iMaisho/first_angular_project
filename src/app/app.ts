import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { UserCardComponent } from './components/user-card-component/user-card-component';
import { User } from './interfaces/user';
import { TodoListComponent } from './components/todo-list-component/todo-list-component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserCardComponent, TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first_angular_project');

   public handleUserDelete(userId: number): void {
        alert(`Le parent a reçu une demande de suppression pour l'utilisateur avec l'ID : ${userId}`);
        // Ici, on mettrait la logique pour supprimer l'utilisateur de notre liste.
    }

      public mainUser: User = {
        id: 1,
        name: 'Jeanne Martin',
        jobTitle: 'Développeuse Full-Stack',
        avatarUrl: 'https://i.pravatar.cc/150'
    };

          public secondUser: User = {
        id: 2,
        name: 'Jean Claude',
        jobTitle: 'Comptable',
        avatarUrl: 'https://i.pravatar.cc/150'
    };
}
