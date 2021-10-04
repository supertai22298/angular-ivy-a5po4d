import { Component, VERSION } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Đây là điều Văn Tài đang suy nghĩ, Khánh Ly đoán hông đc thì bấm nút ở dưới';
  isStarted = false;
  counter = 10;

  start() {
    this.isStarted = true;
    let interval = setInterval(() => {
      if (this.counter == 1) clearInterval(interval);
      this.counter = this.counter - 1;
    }, 1000);
  }
}
