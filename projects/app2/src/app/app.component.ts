import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersService } from './services/users.service';
import { User } from './interfaces/User';
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    UsersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app2';
  arrayOfReceivedData: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    console.log("app ngOnInit");
  }
}
