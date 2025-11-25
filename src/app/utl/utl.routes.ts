import { Routes } from "@angular/router";
//creamos rutas
//por aquí se agregan las rutas que tenemos en el archivo 
export default[

    {
        path:'listaalumnos',
        loadComponent:()=>import('./alumnos/alumnos.component').then(u=>u.AlumnosComponent)
    },

    {
        path:'agregar',
        loadComponent:()=>import('./agregar/agregar.component').then(u=>u.AgregarComponent)
    },

     
    {
        path:'editar/:matricula',
        loadComponent:()=>import('./editar/editar.component').then(u=>u.EditarComponent)
    },


    {
        path:'eliminar/:matricula',
        loadComponent:()=>import('./eliminar/eliminar.component').then(u=>u.EliminarComponent)
    }


]as Routes;