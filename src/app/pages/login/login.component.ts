import { Component } from '@angular/core';
import { BtnComponent } from '../../componets/btn/btn.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
