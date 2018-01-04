
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterConfig } from './router.config';
import { NotificationComponent } from './shared/notification/notification.component';
import { NotificationService } from './shared/notification/notification.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule} from '@angular/common/http';
import { UsuariosService } from './usuarios/usuarios.service';
import { ReactiveFormsModule } from '@angular/forms';
import { VariableService } from './shared/variable.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    NotificationComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NotificationService, UsuariosService, VariableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
