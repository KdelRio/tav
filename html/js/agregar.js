$.validator.setDefaults( {
    submitHandler: function () {
		alert( "Cuenta creada!, seras redirigido al login" );
		('#ingresar').attr('href','./agregar.html');
	  }
    }
 );
 
 $(document).ready(function(){
	$('#addform').validate({
	   rules: {
		  nombre: {
			 required: true,
			 email: true
		  },
		  telefono: {
			 required: true,
			 number: true,
			 minlength: 6
		  },
		  direccion: {
			required: true,
			minlength: 6
		 },
		 sueldobruto: {
			required: true,
			number: true,
			minlength: 4
		 },
		 prevision: {
			required: true,
			number: true,
			minlength: 4
		 },
		 imposiciones: {
			required: true,
			number: true,
			minlength: 4
		 },
		 bonotransporte: {
			required: true,
			number: true,
			minlength: 4
		 },
		 bonoadc: {
			required: true,
			number: true,
			minlength: 4
		 },
		  agree: "required"
	   },
	   messages: {           
		nombre: {
			required: "Debe ingresar su nombre",
			minlength: "Debe contener almenos 4 caracteres"
		 },
		 telefono: {
			required: true,
			number: true,
			minlength: 6
		 },
		 direccion: {
		   required: true,
		   minlength: 6
		},
		sueldobruto: {
		   required: true,
		   number: true,
		   minlength: 4
		},
		prevision: {
		   required: true,
		   number: true,
		   minlength: 4
		},
		imposiciones: {
		   required: true,
		   number: true,
		   minlength: 4
		},
		bonotransporte: {
		   required: true,
		   number: true,
		   minlength: 4
		},
		bonoadc: {
		   required: true,
		   number: true,
		   minlength: 4
		},
	   },
	});
 });