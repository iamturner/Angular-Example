import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../services/users/users.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

	public profile: any;
	public subscription: any;
	
	constructor(
		private route: ActivatedRoute, 
		private usersService: UsersService
	) { }

	ngOnInit() {
		this.subscription = this.route.params.subscribe(params => {
			this.profile = this.usersService.getUserById(params.id);
		});
	}
	
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
