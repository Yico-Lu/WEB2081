import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  fullName = "Tran Xuan Dung";
  age = 26;
  handleClick(){
    console.log('xin chao');
    alert('Bạn đã click button');
  }
}
