 $(function() {
		
	});
	
	
$(document).ready( function() {
		/*jQuery('#nome').keyup(function () { 
			this.value = this.value.replace(/[^a-zA-Z.]/g,'');		
		});*/
$('#fone').mask('(00)0000-0000'); 
		$('#fone').filter_input({regex:'[0-9]'}); 
		$('#nome').filter_input({regex:'[a-zA-Z]'}); 
		$('#email').filter_input({regex:'[-@_.a-z]'}); 		
	
  $("#formCadastro").validate({
    // Define as regras
    rules:{
      nome:{
        // erá obrigatório (required) e terá tamanho mínimo (minLength)
        required: true, 
		minlength: 3
      },
      fone:{
        // será obrigatório (required) e precisará ser um e-mail válido (email)
        required: true, 
		minlength: 10
      },	
	  email:{
        // será obrigatório (required) e precisará ser um e-mail válido (email)
        required: true, 
		email:true
      }
   
    },
    // Define as mensagens de erro para cada regra
    messages:{
      nome:{
        required: "Digite o seu nome",
        minLength: "Deve conter, no minimo, 3 caracteres"
      },
      fone:{
        required: "Digite um número de telefone váldo",
		minLength: "Deve conter, no minimo, 10 caracteres"

      },
	  email:{
        required: "Digite o seu e-mail para contato",
        email: "Digite um e-mail válido"
      }
     
    }
  });
  
  
  jQuery('#formCadastro').submit(function(){
			var dados = jQuery( this ).serialize();

			jQuery.ajax({
				type: "POST",
				url: "grava.php",
				data: dados,
				success: function( data )
				{
					alert( data );
				}
			});
			
			return false;
		});
  
});