import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit {
	title = 'CRUD usuario!';
	public user: User;
	public newUser: User
	public users: User[];
	public bandera=null;

	constructor(
		private _userService:UserService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.user = new User('','','','');
	}
	ngOnInit(){
		var texto= this._userService.signup();
		console.log(texto);
		this.getUser();
	}

	AddUser(){
		console.log(this.user);
		if(this.bandera == null){
			this._userService.register(this.user).subscribe(
				response => {
					let user = response.user;
					this.user = user;
					console.log("El registro se ha realizado correctamente");
					this.user = new User('','','','');
					this.getUser();
				},
				error => {
					console.log("Ha ocurrido un error");
				}
			);

		}
		else{
			this._userService.updateUser(this.user).subscribe(
				response => {				
					if(!response.user){
						console.log("El usuario no se ha actualizado");
					}else{					
						console.log("Datos actualizados correctamente");
						this.user = new User('','','','');
						this.getUser();						
					}
				},
				error => {
		  			console.log(error);
		  		}
			);
			this.bandera=null;
		}
	}
	getUser(){
		this._userService.getUser().subscribe(
			response => {
  				this.users = response.users;
  				console.log(this.users); 			
			},
			error => {
				console.log(error);
			}
		);
	}
	deleteUser(id){
		console.log("Se presiono eliminar "+id);
		this._userService.deleteUser(id).subscribe(
			response =>{
				console.log("Usuario eliminado");
				this.getUser();
			},
			error =>{
				console.log(error);
			}
		);
		this._router.navigate(['/']);
	}
	updateUser(id){
		this._userService.getUserId(id).subscribe(
			response => {
  				this.user = response.user;
  				console.log(this.user); 			
			},
			error => {
				console.log(error);
			}
		);
		this.bandera = 1;
	}
	guardar(){
		console.log("Se presiono guardar");
		this._router.navigate(['/']);
	}
}