import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'editar',
	templateUrl: '../views/editar.html',
	providers: [UserService]
})

export class EditarComponent implements OnInit{
	public titulo: string;
	public url: string;
	public user: User;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService:UserService
	){
		this.titulo = 'Editar';
		this.url = GLOBAL.url;
		this.user = new User('','','','');
	}

	ngOnInit(){
		console.log('Editar.Component.ts cargado');

	}
	onSubmit(){
		let id="5c7d87a3ed4c841044494a2b";

		this._userService.getUserId(id).subscribe(
			response => {
  				this.user = response.user;
  				console.log(this.user); 			
			},
			error => {
				console.log(error);
			}
		);
		/*this._userService.updateUser(this.user).subscribe(
			responses => {				
				if(!responses.user){
					console.log("El usuario no se ha actualizado");
				}else{					
					document.getElementById("identity_name").innerHTML = this.user.name;					
					console.log("Datos actualizados correctamente");
				}
			},
			error => {
	  			console.log(error);
	  		}
		);*/
	}
}