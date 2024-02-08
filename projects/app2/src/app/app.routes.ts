import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'users', component: UsersComponent, title: 'Users' },
    { path: 'users/:id', component: UserDetailsComponent, title: 'User details' },
    { path: 'not-found', component: NotFoundComponent, title: 'Not found' },
    { path: '**', redirectTo: 'not-found' },

];
