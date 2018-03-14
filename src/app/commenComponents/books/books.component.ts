import { Component, OnInit } from '@angular/core';
import { BookServer } from '../../dataServer/BookServer';
import { DataFactory } from '../../dataServer/DatasFactory';
import { BookParams } from '../../entity/BookParams';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(
    public bs:BookServer,
    public df:DataFactory
  ) { }

  ngOnInit() {
      this.bs.loadBooks(new BookParams());
  }

}
