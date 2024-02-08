import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit, OnChanges {

  id: number = 0;

  user: User | null = null;

  constructor(private myActivatedRoute: ActivatedRoute, private usersService: UsersService) {

  }
  ngOnInit(): void {
    console.log(+this.myActivatedRoute.snapshot.params['id']);
    this.id = this.myActivatedRoute.snapshot.params['id'];
    this.user = this.usersService.getUserByID(+this.id);
    console.log(+this.id);
    console.log("details", this.user);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(+this.myActivatedRoute.snapshot.params['id']);
    this.id = this.myActivatedRoute.snapshot.params['id'];
    this.user = this.usersService.getUserByID(+this.id);
    console.log(+this.id);
    console.log("details", this.user);
  }




}
