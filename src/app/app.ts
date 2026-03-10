import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  fullName = "Tran Xuan Dung";
  age = 26;
  sayHello(){
    console.log('xin chao');
  }
}
