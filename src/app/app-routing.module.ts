import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [{ 
	path: 'users', 
	component: UsersComponent
}, { 
	path: 'users/:id', 
	component: ProfileComponent
}];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ], 
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
