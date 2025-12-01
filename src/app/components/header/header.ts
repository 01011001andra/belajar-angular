import { Component, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLogin = signal(true);

  handleClick(type: 'cart') {
    if (type == 'cart') {
      console.log('Cart Clicked');
    }
  }
}
