import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import Editar
import { EditarComponent } from './components/editar.component';

const appRoutes: Routes = [
	{path: '', component: EditarComponent},
	{path: 'editar/:id', component: EditarComponent},
	{path: '**', component: EditarComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);