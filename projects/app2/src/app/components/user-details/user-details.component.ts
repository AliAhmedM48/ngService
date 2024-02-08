import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  id: number = 0;
  constructor(myActivatedRoute: ActivatedRoute) {
    console.log(myActivatedRoute.snapshot.params['id']);
    this.id = myActivatedRoute.snapshot.params['id'];
  }

}
