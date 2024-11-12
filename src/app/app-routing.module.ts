import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MissingAnimesComponent} from './components/missing-animes/missing-animes.component';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'missing-animes', component: MissingAnimesComponent},
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

