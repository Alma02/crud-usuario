'use strict'
/*var fs = require('fs');
var path = require('path');
var jwt = require('../services/jwt');*/

var User = require('../models/user');

function saveUser(req, res){
	var user = new User();
	var params = req.body;
	console.log(params);

	user.name = params.name;
	user.address = params.address;
	user.telephone = params.telephone;
	
	if(user.name != null && user.address != null && user.telephone!=null){
		// Guardar el usuario
		user.save((err, userStored) => {
			if(err){
				res.status(500).send({message: 'Error al guardar el usuario'});
			}else{
				if(!userStored){
					res.status(404).send({message: 'No se ha registrado el usuario'});
				}else{
					res.status(200).send({user: userStored});
				}
			}
		});
	}else{
		res.status(200).send({message: 'Rellena todos los campos'});
	}	
}

function getUsers(req, res){
	User.find({},function(err, users, total){
		if(err){
			res.status(500).send({message: 'Error en la petición'});
		}else{
			if(!users){
				res.status(404).send({message: 'No hay usuarios !!'});
			}else{
				return res.status(200).send({ users: users });
			}
		}
	});
}

function updateUser(req, res){
	var userId = req.params.id;
	var update = req.body;

	User.findByIdAndUpdate(userId, update, (err, userUpdated)=>{
		if(err){
			res.status(500).send({message: 'Error al actualizar el usuario'});
		}else{
			if(!userUpdated){
				res.status(404).send({message: 'No se ha podido actualizar el usuario'});
			}else{
				res.status(200).send({user: userUpdated});
			}
		}
	});
}

function deleteUser(req, res){
	var userId = req.params.id;

	User.findByIdAndRemove(userId, (err, userRemoved) => {
		if(err){
			res.status(500).send({message: 'Error al eliminar el usuario'});
		}else{
			if(!userRemoved){
				res.status(404).send({message: 'El usuario no ha sido eliminado'});
			}else{
				res.status(200).send({user: userRemoved});
			}
		}
	});
}

function getUserId(req, res){
	var userId = req.params.id;

	User.findById(userId, (err, user) =>{
		if(err){
			res.status(500).send({message: 'Error en la petición'});
		}else{
			if(!user){
				res.status(404).send({message: 'El usuario no existe'});
			}else{
				res.status(200).send({user});
			}
		}
	});
}
module.exports={
	saveUser,
	getUsers,
	updateUser,
	deleteUser,
	getUserId
};