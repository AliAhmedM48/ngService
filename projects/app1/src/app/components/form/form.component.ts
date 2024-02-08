import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface User { username: string, age: string };

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  username: string = '';
  age: string = '';
  @Output() transferEvent = new EventEmitter()
  addUser() {
    // * Validation...
    //#region
    if (!(this.username.length >= 3 && +this.age >= 20 && +this.age <= 30)) {
      alert('Invalid data!');
      return;
    };
    //#endregion
    let user: User = {
      username: this.username,
      age: this.age
    }
    this.transferEvent.emit(user);
    this.username = '';
    this.age = '';
  }
}
