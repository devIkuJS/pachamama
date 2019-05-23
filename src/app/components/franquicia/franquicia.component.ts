import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-franquicia',
  templateUrl: './franquicia.component.html',
  styleUrls: ['./franquicia.component.css']
})
export class FranquiciaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
