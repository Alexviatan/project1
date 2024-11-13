import { Component } from '@angular/core';

@Component({
  selector: 'app-ccourse',
  templateUrl: './ccourse.component.html',
  styleUrl: './ccourse.component.css'
})
export class CcourseComponent {

  //declaracion de propiedades o atributos o variables

  private courses!:string[]; //arreglo de string
  private response!:string|boolean; //union de tipos de datos
  dir:string="Uniempresarial";
  title:string="Formulario de registro";
  constructor(){
    this.courses = ['JAVA', 'PHP', 'C#', 'C++', 'PYTHON', 'JAVASCRIPT', 'TYPESCRIPT' ];
    this.response = "";
  }

// métodos
public getCourses():string[]{
  return this.courses;
}
public getResponse():string|boolean{
  console.log(this.response);
  return this.response;
}
//encapsulación de métodoss
private RegisterCourse(name:string, age:string,courses:string){
  return this.response='Se ha inscrito en el curso: ${courses} el estudiante de edad ${age} con nombre ${name}';
}

public getRegisterCourse(name:string, age:string,courses:string){
  console.log(name, age, courses);
  this.getRegisterCourse(name, age, courses);
}

}
