    
    //Declaración de variables
    var cadena, cod, respuesta;
	
	//Declaración de expresiones
   
    var uno= RegExp("(a|A)");
    var dos= RegExp("(b|B)");
    var tres= RegExp("(c|C)");
    var cuatro= RegExp("(A1B3456|D585GB2)");
    var cinco= RegExp("(D|d)");
    var seis= RegExp("(e|E)");
    function evaluarExpresion() {
      cadena = document.getElementById("txtPregunta").value;
	  escribirChat(cadena);
      cadena = cadena.toUpperCase();
	  document.getElementById("txtPregunta").value="";
	  cod=0;
	  
/*
      document.getElementById("resultado1").innerHTML= tener.test(cadena);
      document.getElementById("resultado2").innerHTML= edad.test(cadena);
*/ 
	  if (uno.test(cadena)==true) {
		cod = 1;
	  };
	    if (dos.test(cadena)==true) {
		cod = 2;
	  };
      if (tres.test(cadena)==true  ) {
        cod = 3;
      }; 
      if (cuatro.test(cadena)==true  ) {
        cod = 4;
      }; 
      if (cinco.test(cadena)==true  ) {
        cod = 5;
      }; 
      if (seis.test(cadena)==true  ) {
        cod = 6;
      }; 
	//Lama a responder
		setTimeout(responder, 1000);
      //responder();
    }

    function responder() {
	var r = Math.floor((Math.random() * 3) + 1);
	console.log("random " + r);
	console.log("cod " + cod);
	var mensaje;
      switch (cod) {
	  case 1:
			if (cod == 1) {
			mensaje = "Hola mucho gusto, en que puedo ayudarte";
			};
        break;
		
		case 2:
		
		mensaje = "Ingresa tu número de pedido para rastrear tu paquete";

        break;
		
		case 3: 
		mensaje = "Puedes devolver o cambiar un articulo envianos un correo al bazar@gmail.com";
		break;
        case 4:
		mensaje = "Tu pedido se encuentra en proceso de envió. Si deseas otra pregunta indicanos tu requerimiento"

         break;
        
		case 5:
        mensaje = "Puedes cancelar tu pedido mediante tarjeta de debito o crédito"
        break;

        case 6:
        mensaje = "Contáctanos las 24 horas al correo bazar@gmail.com"
        default:
		mensaje = "No entiendo lo que me estás diciendo";

      }
      //document.getElementById("respuesta").innerHTML = mensaje;
	  escribirChat(mensaje);
    }
	
	function escribirChat (texto) {
		document.getElementById("areaChat").value += texto + "\r";
	}
