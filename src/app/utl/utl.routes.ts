import { Routes } from "@angular/router";
//creamos rutas
//por aquí se agregan las rutas que tenemos en el archivo 
export default[

    {
        path:'listaalumnos',
        loadComponent:()=>import('./alumnos/alumnos.component').then(c=>c.AlumnosComponent)
    },

    {
        path:'agregar',
        loadComponent:()=>import('./agregar/agregar.component').then(c=>c.AgregarComponent)
    },

     
    {
        path:'editar',
        loadComponent:()=>import('./editar/editar.component').then(c=>c.EditarComponent)
    },


    {
        path:'eliminar',
        loadComponent:()=>import('./eliminar/eliminar.component').then(c=>c.EliminarComponent)
    }


]as Routes;