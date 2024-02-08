import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersList: User[];


  private usersListLengthSubject = new BehaviorSubject<number>(0);
  usersListLength$ = this.usersListLengthSubject.asObservable();

  constructor() {
    this.usersList = [
      // new User('Ali', 26, 'Suez'),
      // new User('Ali', 26, 'Suez'),
      // new User('Ali', 26, 'Suez'),
      // new User('Ali', 26, 'Suez'),
    ];

    this.updateUsersListLength();
  }


  public get usersLength(): number {
    console.log("usersList.length: => ", this.usersList.length);
    return this.usersList.length;
  }

  getAllUsers(): User[] {
    return this.usersList;
  }

  getUserByID(userID: number): User | null {
    let foundUser = this.usersList.find(user => +user.id === +userID);
    console.log("list from users getbyID", foundUser);
    console.log("list from users getbyID", this.usersList);

    return foundUser ? foundUser : null;
  }

  insertUser(newUser: User) {
    this.usersList.push(newUser);
    this.updateUsersListLength();
  }


  private updateUsersListLength(): void {
    this.usersListLengthSubject.next(this.usersList.length);
  }
}
