class User{
    public name:string = "aaa";
    
    public a:A;

    constructor(c:A){
        this.a = c;
    }

    // constructor(
    //     public a:A
    // ){}
    

}

class A{
    // 构造方法
    constructor(){

    }
}

let a:A = new A();

let u:User = new User(a);

console.log(u.name);
console.log(u.a)