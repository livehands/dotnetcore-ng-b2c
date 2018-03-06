import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components

// Guard Services/Resolvers
import { AuthGuard } from '../../services/auth-guard/auth-guard.service';
import { HomeComponent } from '../../components/home/home.component';
import { SecureComponent } from '../../components/secure/secure.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'secure', component: SecureComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
