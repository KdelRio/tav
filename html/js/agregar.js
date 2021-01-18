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
			 minlength: 6
		  },
		  agree: "required"
	   },
	   messages: {           
		correo: {
			 required: "Por favor ingresa un correo valido",
			 email: "Debe contener @; ejemplo@gmail.com"
		  },
		  contraseña: {
			 required: "Por favor ingresa una contraseña",
			 minlength: "Tu contraseña debe ser de no menos de 6 caracteres de longitud"
		  },
	   },
	});
 });