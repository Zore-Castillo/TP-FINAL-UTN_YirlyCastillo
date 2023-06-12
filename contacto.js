function enviarDatos(){
    let nombreApellido = document.getElementById("nombreapellido").value;
    let correoElectronico = document.getElementById("correoelectronico").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;
    
    if(nombreApellido==""){
        alert("El campo nombre es obligatorio")
        document.getElementById("nombreapellido").focus();
    }else{
        if (correoElectronico==""){
            alert("El campo Correo electronico es obligatorio");
            document.getElementById("correoelectronico").focus();
        }else{
            if(telefono==""){
                alert("El campo Telefono es obligatorio");
                document.getElementById("telefono").focus(); 
            }else{
                if(mensaje==""){
                    alert("El campo mensaje esta vacio. ¿Desea enviar el formulario de todas formas?");
                    document.getElementById("mensaje").focus();
      
                }else{
                    document.getElementById("nombreapellido").value="";
                    document.getElementById("correoelectronico").value="";
                    document.getElementById("telefono").value="";
                    document.getElementById("mensaje").value="";
                    document.getElementById("nombreapellido").focus();
                    alert("Su informacion fue enviada con exito")
                }

            }
            

        }
    }

}



    