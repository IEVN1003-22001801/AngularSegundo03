import { Routes } from "@angular/router";
//creamos rutas
//por aquí se agregan las rutas que tenemos en el archivo 
export default[


    {
        path:'distancia',
        loadComponent:()=>import('./distancia/distancia.component').then(c=>c.DistanciaComponent)
    },

    {
        path:'zodiaco',
        loadComponent:()=>import('./zodiaco/zodiaco.component').then(c=>c.ZodiacoComponent)
    },

    {
        path:'ax-b',
        loadComponent:()=>import('./ax-b/ax-b.component').then(c=>c.AxBComponent)
    }


]as Routes;