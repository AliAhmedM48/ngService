import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../interfaces/User';
import { UsersService } from '../../services/users.service';
import { RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit, OnChanges {

  usersList: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getAllUsers();
    console.log("users ngOnInit", this.usersList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.usersList = this.usersService.getAllUsers();
    console.log("users ngOnChanges", this.usersList);

  }

  // ngOnInit() {
  //   this.userService.userData$.subscribe((receivedData: User) => {
  //     console.log("from users: ", receivedData);
  //     this.arrayOfReceivedData.push(receivedData);
  //     // this.arrayOfReceivedData = [...this.arrayOfReceivedData, receivedData]; // Create a new array with updated data

  //     console.log(this.arrayOfReceivedData);
  //     this.cdr.detectChanges(); // Manually trigger change detection

  //   });
  // }


  // ngOnInit() {
  //   this.userService.getUserData().subscribe((receivedData: User) => {
  //     this.arrayOfReceivedData = [...this.arrayOfReceivedData, receivedData];

  //     console.log("from users: ", this.arrayOfReceivedData);

  //   });
  // }

}
