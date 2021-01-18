$.validator.setDefaults( {
    submitHandler: function () {
       alert( "submitted!" );
    }
 });
 
 $(document).ready(function(){
	 $('#loginform').validate({
		rules: {
		   correo: {
			  required: true,
			  email: true
		   },
		   contraseña: {
			  required: true,
			  minlength: 6,
			  password: true
		   },
		   agree: "required"
		},
		messages: {           
		 correo: {
			  required: "Por favor ingresa tu nombre completo",
			  email: "Debe contener @; ejemplo@gmail.com"
		   },
		   comments: "Por favor ingresa un comentario",
		   contraseña: {
			  required: "Por favor ingresa una contraseña",
			  minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
		   },
		},
	 });
  });
 
 


 
 