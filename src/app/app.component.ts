import { Component, OnInit } from '@angular/core';
import { BookTypeServer } from './dataServer/BookTypeServer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    constructor(
        private bts:BookTypeServer
    ){
      
    }

    ngOnInit(): void {
        this.bts.loadBookTypes();
    }

}
