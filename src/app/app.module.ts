import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AngularMaterialModule} from '../AngularMaterial.module';
import {InterceptorJwtInterceptor, InterceptorToken} from './interceptor-jwt.interceptor';
import { AdminComponent } from './admin/admin.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { CmComponent } from './cm/cm.component';
import { ProfilComponent } from './profil/profil.component';
import {FlexModule} from '@angular/flex-layout';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { ModifProfilComponent } from './profil/modif-profil/modif-profil.component';
import { DeleteProfilComponent } from './profil/delete-profil/delete-profil.component';
import { AuthGuard } from './guards/auth.guard';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    FormateurComponent,
    ApprenantComponent,
    CmComponent,
    ProfilComponent,
    AddProfilComponent,
    ModifProfilComponent,
    DeleteProfilComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        AngularMaterialModule,
        FlexModule,
    ],
  providers: [
    InterceptorToken,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
