$.validator.setDefaults( {
    submitHandler: function () {
       alert( "submitted!" );
    }
 });
 
 $(document).ready(function(){
	 $('#regform').validate({
		rules: {
		   usuarioreg: {
			  required: true,

           },
           telefonoreg: {
              required:true,
              minlength: 8
                            
           },
           correoreg: {
              required: true,
              email: true
           },
           
		   contraseñareg: {
			  required: true,
			  minlength: 6,
			  password: true,
		   },
		   agree: "required"
		},
		messages: {           
		   usuarioreg: {
			  required: "Por favor ingrese un usuario"
		   },
		   contraseñareg: {
			  required: "Por favor ingresa una contraseña",
			  minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
           },
           telefonoreg: {
               required: "debe ingresar su telefono",
               minlength: "debe tener minimo 8 numeros"

           },
           correoreg: {
               required: "debe ingresar un correo",
               email: "debe contener un @"
           },
		},
	 });
  });