import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent, User } from './components/form/form.component';
import { ScreenComponent } from './components/screen/screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormComponent,
    ScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users: User[] = [];

  getData(data: User) {
    this.users.push(data);
    console.log(this.users);
  }


}
