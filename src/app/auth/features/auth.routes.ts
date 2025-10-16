import { Routes } from "@angular/router";
//creamos rutas
//por aquí se agregan las rutas que tenemos en el archivo 
export default[


    {
        path:'sing-in',
        loadComponent:()=>import('./sign-in/sign-in.component').then(c=>c.SignInComponent)
    },

    {
        path:'sing-up',
        loadComponent:()=>import('./sign-up/sign-up.component').then(c=>c.SignUpComponent)
    }

]as Routes;