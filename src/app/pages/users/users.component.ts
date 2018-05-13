import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users/users.service';
import { FilterPipe } from './../../pipes/filter.pipe';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

	public users: any = [];
	
	constructor(
		private usersService: UsersService
	) { }

	ngOnInit() {
		this.users = this.usersService.getAllUsers();
	}

}
