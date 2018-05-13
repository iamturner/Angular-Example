import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';

import { UsersService } from './services/users/users.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		ProfileComponent,
		FilterPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [UsersService],
	bootstrap: [AppComponent]
})

export class AppModule { }
