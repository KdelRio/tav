$.validator.setDefaults( {
    submitHandler: function () {
       alert( "submitted!" );
    }
 });
 
 $(document).ready(function(){
	 $('#cuentaform').validate({
		rules: {
		   usuario: {
			  required: true,

           },
           telefono: {
              required:true,
              minlength: 8,
                            
           },
		   contraseñaC: {
			  required: true,
			  minlength: 6,
			  password: true,
		   },
		   agree: "required"
		},
		messages: {           
		   usuario: {
			  required: "Por favor ingrese su usuario"
		   },
		   contraseñaC: {
			  required: "Por favor ingresa una contraseña",
			  minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
           },
           telefono: {
               required: "debe ingresar su telefono",
               minlength: "debe tener minimo 8 numeros"

           },
		},
	 });
  });