import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminComponent} from './admin/admin.component';
import {FormateurComponent} from './formateur/formateur.component';
import {ApprenantComponent} from './apprenant/apprenant.component';
import {CmComponent} from './cm/cm.component';
import {ProfilComponent} from './profil/profil.component';
import {AddProfilComponent} from './profil/add-profil/add-profil.component';
import {ModifProfilComponent} from './profil/modif-profil/modif-profil.component';
import {DeleteProfilComponent} from './profil/delete-profil/delete-profil.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'delete', component: DeleteProfilComponent},
  {path: 'modifier', component: ModifProfilComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'addProfil', component: AddProfilComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'formateur', component: FormateurComponent},
  {path: 'apprenant', component: ApprenantComponent},
  {path: 'cm', component: CmComponent},
  {path: 'login', canActivate: [AuthGuard], component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
