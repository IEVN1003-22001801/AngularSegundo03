import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos';
import { AlumnoFilterPipe } from '../alumnos-filter.pipe';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [FormsModule, RouterLink, AlumnoFilterPipe, CommonModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=''
  alumnoTitle!:string
  dataSource:any=[];

  constructor(public alumnosUtl:ProyectoapiService){}

  alumnosIric:AlumnosUtl[]=[
    {
      matricula:1234,
      nombre:'Pedro',
      apaterno:'lopez',
      amaterno:'muñoz',
      correo:'pedro@gmail.com'
    },
    
    {
       matricula:2222,
      nombre:'Charli',
      apaterno:'Torres',
      amaterno:'peyton',
      correo:'charli@gmail.com'
    }


  ]

  ngOnInit(): void {
    this.alumnosUtl.getAlumnos().subscribe(
      {
        next: response=>{
          this.dataSource=response;
        },
        error: error=>console.log(error)
      }
        );
  }

}
