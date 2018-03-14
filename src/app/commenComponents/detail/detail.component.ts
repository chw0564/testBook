import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../entity/Book';
import { BookServer } from '../../dataServer/BookServer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // private bookId:string;
  public book:Book = new Book();

  constructor(
    // private activatedRoute:ActivatedRoute
    activatedRoute:ActivatedRoute,
    public bs:BookServer
  ) { 
    console.log(activatedRoute);
    // console.log(activatedRoute.queryParams.value)
    // console.log(activatedRoute.snapshot.queryParams);
    // 对 GET 方式请求进行参数获取
    // let bookId = activatedRoute.snapshot.queryParams.id;
    // 对 reset 风格参数进行获取
    let bookId = activatedRoute.snapshot.params.id;
    
    
    console.log(bookId);
    this.bs.loadBookById(bookId)
           .subscribe((data)=>{
              console.log(data.json());
              this.book = data.json().result;
           });
  }

  ngOnInit() {
  }

}
