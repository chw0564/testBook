import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BookContentComponent } from "./components/book-content/book-content.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { BooksComponent } from "./commenComponents/books/books.component";
import { DetailComponent } from "./commenComponents/detail/detail.component";

// URL 和组件关系的映射
/*
    path ==> 定义路由的时候不可以/开头
    [
        {path:"定义URL地址",redirectTo:"组件URL地址"},
        {path:"定义URL地址",component:组件对象},
        {},{},……
    ]

    ==>  127.0.0.1:4200/aaaa
    ==>  127.0.0.1:4200/cccc/dddd
    ==>  127.0.0.1:4200/cccc/aaaa
    ==>  127.0.0.1:4200/aaaa

    redirectTo  重定向  ==>修改URL路径地址  127.0.0.1:3000/aaaa/cccc ==>  /aaaa/dddd
    forwardTo   服务转发 ==>不会修改URL路径地址  127.0.0.1:3000/aaaa/cccc ==> /aaaa/cccc

 */
const routes:Routes  = [
    // 将一个路由地址 映射到另外一个路由地址上
    // redirectTo 不可以单独存在，需要制定 跳转路径时 的 URL 匹配模式
    // pathMatch == full 完全路径匹配    prefix 路径前缀匹配
    // 不能使用嵌套 重定向
    // {path:"",redirectTo:"/bookList",pathMatch:"full"},
    // {path:"bookList",redirectTo:"/aboutMe",pathMatch:"full"},
    
    {path:"",component:BookContentComponent,children:[
        // 在子组件默认路由使用 ""
        // redirectTo 在非一级路由上 使用相对路径进行定义
        {path:"",redirectTo:"books",pathMatch:"full"},
        {path:"books",component:BooksComponent},
        // {path:"detail",component:DetailComponent},
        {path:"detail/:id",component:DetailComponent},
    ]},
    // path:""  ==> 默认路由
    // {path:"",component:BookContentComponent},    
    {path:"aboutMe",component:AboutMeComponent}
    // {path:"aboutMe",redirectTo:"/bookList",pathMatch:"full"}
    
];

//定义路由配置和对象导出
        
@NgModule({
    // 为当前类注入功能==添加URL和组件关系的映射
    // RouterModule.forRoot() 为 项目结构提供 根路由服务
    imports:[RouterModule.forRoot(routes)],
    // 为当前类改变导出类型  取值 []
    exports:[RouterModule]
})
export class AppRoutingModule{ }