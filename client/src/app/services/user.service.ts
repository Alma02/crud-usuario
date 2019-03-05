import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { User } from '../models/user';

@Injectable()
export class UserService{
	url: string;
	
	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	signup(){
		return 'Hola mundo desde el servicio';
	}

	register(user_to_register){
		let json = JSON.stringify(user_to_register);
		let params = json;
		let headers = new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'create', params, {headers: headers}).map(res => res.json());
	}

	getUser(){
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		return this._http.get(this.url+'allUsers', options).map(res => res.json());
	}

	deleteUser(id: string){
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		return this._http.delete(this.url+'delete/'+id, options).map(res => res.json());
	}
	getUserId(id: string){
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		return this._http.get(this.url+'getUser/'+id, options).map(res => res.json());
	}
	/*editProduct(id: string, product: Product){
		let params = JSON.stringify(product);
		let headers = new Headers({'Content-Type': 'application/json'});
		return this._http.put(this.url+'product/'+id, params, {headers: headers}).map(res => res.json());
	}*/
	updateUser(user_to_update){
		let params = JSON.stringify(user_to_update);

		let headers = new Headers({
			'Content-Type':'application/json'
			});

		return this._http.put(this.url+'update/'+user_to_update._id,
			params, {headers: headers}).map(res => res.json());
	}

}