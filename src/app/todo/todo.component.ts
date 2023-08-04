import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todolist:string[] = [];
  inputvalue:string = "";
  removetodo(name:string){
  this.todolist = this.todolist.filter(value=>value!==name)
}
 addtodo(){
    this.inputvalue === "" ? alert("enter a valid input"): this.todolist.push(this.inputvalue);
    this.inputvalue = "";
    // if(this.inputvalue === ""){alert("enter a input");}
    // else{this.todolist.push(this.inputvalue)}
  } 
 constructor() { }
  ngOnInit(): void{
  this.todolist = [];
}
}

