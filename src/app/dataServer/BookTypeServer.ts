import { Injectable } from "@angular/core";
import { Http,URLSearchParams } from "@angular/Http";
import { DataFactory } from "./DatasFactory";
import { BookType } from "../entity/BookType";

@Injectable()
export class BookTypeServer{

    // private BookTypes:Array<BookType>;

    constructor(
        private http:Http,
        private df:DataFactory
    ){
        // this.BookTypes = df.bookTypes
    }

    public loadBookTypes():void{
        // return this.http.get("/bookApi/bookType.php");
        this.http.get("/bookApi/bookType.php")
                 .subscribe((data)=>{
                        this.df.bookTypes = data.json().result;
                 });
    }

}