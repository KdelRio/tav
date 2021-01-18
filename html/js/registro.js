$.validator.setDefaults( {
    submitHandler: function () {
       alert( "submitted!" );
    }
 });
 
 $(document).ready(function(){
	 $('#register-form').validate({
		rules: {
		   nombre: {
			   required: true,
			   minlength: 2
		   },
		   apellido: {
			   required: true,
			   minlength: 4,
		   },
		   correo: {
			  required: true,
			  email: true
		   },
		   telefono: {
			   required: true,
			   number: true
		   },
		   contraseña: {
			  required: true,
			  minlength: 6,
			  password: true
		   },
		   agree: "required"
		},
		messages: {           
		 nombre: {
			  required: "Por favor ingresa tu nombre completo",
			  email: "Debe contener @; ejemplo@gmail.com"
		   },
		   apellido: {
			  required: "Por favor ingresa una contraseña",
			  minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
		   },
		   correo: {
			required: "Por favor ingresa tu nombre completo",
			email: "Debe contener @; ejemplo@gmail.com"
		 },
		 telefono: {
			required: "Por favor ingresa tu nombre completo",
			email: "Debe contener @; ejemplo@gmail.com"
		 },
		 contraseña: {
			required: "Por favor ingresa tu nombre completo",
			email: "Debe contener @; ejemplo@gmail.com"
		 },
		},
	 });
  });
 
 


 
 