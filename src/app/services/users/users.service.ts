import { Injectable } from '@angular/core';

@Injectable()

export class UsersService {

	public users: any;
	
	constructor() {
		/* Sample user data */
		this.users = [{
			id: 1, name: 'John', city: 'Belfast'
		}, {
			id: 2, name: 'Jane', city: 'London'
		}, {
			id: 3, name: 'Matthew', city: 'London'
		}, {
			id: 4, name: 'Sarah', city: 'New York'
		}, {
			id: 5, name: 'Michael', city: 'Liverpool'
		}];
	}

	getAllUsers() {
		return this.users;
	}
	
	getUserById(id) {
		return this.users.find((user) => { return user.id == id });
	}
	
}
