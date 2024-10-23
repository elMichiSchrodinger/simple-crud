import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Empleado } from './models/empleado';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simple-crud';
  empleadoArreglo: Empleado[]=[
    {id:1, nombre:"Ryan",pais:"USA"},
    {id:2, nombre:"Angelica",pais:"USA"},
    {id:3, nombre:"Joe",pais:"USA"}
  ]

  selectedEmployee: Empleado= new Empleado();

  AgregaroEditar(){
    if (this.selectedEmployee.id == 0) {
      this.selectedEmployee.id= this.empleadoArreglo.length+1;
      this.empleadoArreglo.push(this.selectedEmployee);
    }
    this.selectedEmployee= new Empleado();
  }
  
  openForEdit(empleado:Empleado){
    this.selectedEmployee= empleado;
  }

  eliminar(){
    if(confirm('Estas seguro de eliminar')){
      this.empleadoArreglo = this.empleadoArreglo.filter(elemento => elemento!=this.selectedEmployee);
      this.selectedEmployee= new Empleado();
    }
  }
}
