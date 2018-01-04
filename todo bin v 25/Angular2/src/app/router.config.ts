import { HomeComponent } from "./home/home.component";
import { Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { RegistroComponent } from "./registro/registro.component";

export const RouterConfig: Route[] = [
    {path: 'home', component: HomeComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: '**', redirectTo:'home'},

]