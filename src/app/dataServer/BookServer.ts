import { Injectable } from "@angular/core";
import { Http,URLSearchParams } from "@angular/Http";
import { BookParams } from "../entity/BookParams";
import { DataFactory } from "./DatasFactory";


@Injectable()
export class BookServer{

    constructor(
        private http:Http,
        // 管理共享数据
        private df:DataFactory
    ){}

    public loadBooks(obj:BookParams):void{
       this.http.post("/bookApi/book.php",obj.getParamas())
                .subscribe((data)=>{
                    this.df.books = data.json().result;
                })
    }

    public loadBookById(id:string){
        let bp = new BookParams(id);
        return this.http.post("/bookApi/book.php",bp.getParamas())
    }

}



