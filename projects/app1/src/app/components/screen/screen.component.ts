import { Component, Input } from '@angular/core';
import { User } from '../form/form.component';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css'
})
export class ScreenComponent {

  @Input() DataFromApp: User[] = [];

}
