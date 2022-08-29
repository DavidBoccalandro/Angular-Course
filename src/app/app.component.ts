import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = {
    title: 'Angular Core Deep Dive',
  };

  handleClick() {
    console.log('clicked');
  }

  onKeyUp(input: HTMLInputElement) {
    this.data.title = input.value;
  }
}
