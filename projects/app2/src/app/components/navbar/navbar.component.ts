import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge'
import { RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnChanges {

  usersQuantity: number = 0;

  constructor(private usersService: UsersService) {
    this.usersQuantity = usersService.usersLength;
    this.usersService.usersListLength$.subscribe(() => {
      this.usersQuantity = this.usersService.usersLength;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("navbar ngOnChanges");

    this.usersQuantity = this.usersService.usersLength;


  }

  ngOnInit(): void {
    console.log("navbar ngOnInit");

    this.usersQuantity = this.usersService.usersLength;

  }


  navList: { name: string, path: string }[] =
    [
      { name: 'home', path: 'home' },
      // { name: 'users', path: 'users' },
      { name: 'user details', path: 'users/5' },
      { name: 'error', path: 'not-found' },
    ];
}
