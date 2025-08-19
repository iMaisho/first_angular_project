import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user'

@Component({
  selector: 'app-user-card',
  imports: [FormsModule],
  templateUrl: './user-card-component.html',
  styleUrl: './user-card-component.css',
  standalone: true
})
export class UserCardComponent {

@Input() public user!: User;

@Output() public deleteRequest = new EventEmitter<number>();

public onDeleteClick(): void {
    console.log(`Demande de suppression pour l'utilisateur ${this.user.id}`);
    this.deleteRequest.emit(this.user.id);
}

quote = ""

showQuote(){
alert(this.quote)
}

}

