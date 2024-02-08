import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../interfaces/User.js'
import { UsersService } from '../../services/users.service.js';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    // ! =============================== ??????????
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  feedbackFlag: boolean = false;

  //#region 
  regValidation = new FormGroup({
    //#region 
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),

    age: new FormControl(null, [
      Validators.required,
      Validators.min(20),
      Validators.max(50),
    ]),

    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    //#endregion
  })

  get usernameValid() {
    //#region 
    return {
      valid: this.regValidation.controls['username'].valid,
      err: this.regValidation.controls['username'].errors
    };
    //#endregion
  }
  get ageValid() {
    //#region 
    return {
      valid: this.regValidation.controls['age'].valid,
      err: this.regValidation.controls['age'].errors
    };
    //#endregion
  }
  get addressValid() {
    //#region 
    return {
      valid: this.regValidation.controls['address'].valid,
      err: this.regValidation.controls['address'].errors
    };
    //#endregion
  }
  //#endregion

  // @Output() sendDataEvent = new EventEmitter<User>();

  constructor(private usersService: UsersService, private router: Router) { }


  onSubmit() {
    console.log(this.regValidation.valid);

    if (!this.regValidation.valid) {

      this.feedbackFlag = true

      //#region usernameValid
      if (this.usernameValid.err?.['minlength'])
        console.error(`username length: ${this.regValidation.controls.username.value?.length}, and it must be >= 3`);
      else if (this.usernameValid.err?.['required'])
        console.error(`username is empty`);
      //#endregion

      //#region ageValid
      if (this.ageValid.err?.['min'])
        console.error(`age: ${this.regValidation.controls.age.value}, and it must be >= 20`);
      else if (this.ageValid.err?.['max'])
        console.error(`age: ${this.regValidation.controls.age.value}, and it must be <= 50`);
      else if (this.ageValid.err?.['required'])
        console.error(`age is empty`);
      //#endregion

      //#region addressValid
      if (this.addressValid.err?.['maxlength'])
        console.error(`address length: ${this.regValidation.controls.address.value?.length}, and it must be <= 100`);
      else if (this.addressValid.err?.['required'])
        console.error(`address is empty`);
      //#endregion

    }
    else {
      // alert('Congratulations! You have successfully registered.');
      let user: User = new User(
        // #region
        this.regValidation.controls.username.value || 'default username',
        this.regValidation.controls.age.value || 26,
        this.regValidation.controls.address.value || 'default address',
        //#endregion
      );


      // let user: User = {
      //   // #region
      //   username: this.regValidation.controls.username.value || 'default username',
      //   age: this.regValidation.controls.age.value || 26,
      //   address: this.regValidation.controls.address.value || 'default address',
      //   //#endregion
      // }

      console.log("from home: ", user);
      // this.sendDataEvent.emit(user);
      // this.userService.emitUserData(user); // * Emit user data through the service
      // this.usersService.setUserData(user);
      this.usersService.insertUser(user);
      this.regValidation.reset();
      this.feedbackFlag = false;
      // this.router.navigate(['/users']);
    }


  }

}
