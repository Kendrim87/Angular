import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Datos de la persona
  nombre: string = 'Mario';
  apellidos: string = 'Bros.';
  foto: string = 'https://i.pinimg.com/564x/3f/81/4d/3f814d3ac439bb5c568332204994738d.jpg';
  edad: number = 39;
  
  // Datos temporales del formulario
  formNombre: string = this.nombre;
  formApellidos: string = this.apellidos;
  formFoto: string = this.foto;
  formEdad: number = this.edad;
  
  // Método para actualizar los datos
  actualizarDatos(): void {
    this.nombre = this.formNombre;
    this.apellidos = this.formApellidos;
    this.foto = this.formFoto;
    this.edad = this.formEdad;
  }
}
