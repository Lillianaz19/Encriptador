const mensajeOriginal = document.querySelector(".textAreaMensajeInicial"); //conecta JS con el textarea
const mensajeResuelto = document.querySelector(".textAreaMensajeResuelto"); //para msj resuelto

//const btnCopiar = document.querySelector(".botonCopiar");

function btnEncriptar()
{
    const msjUsuario = encriptar(mensajeOriginal.value);
    mensajeResuelto.value = msjUsuario;
}

function encriptar(mensaje)
{
    let largoMensaje = mensaje.length;
    let nuevoMensaje = "";

    //verifica que solo se usen mayusculas
    if (mensaje != mensaje.toLowerCase())
    {
        nuevoMensaje = "ERROR, VERIFIQUE EL MENSAJE DADO.";
    }
    
    else
    {
        for(var i=0; i<largoMensaje; i++)
        {
            //verifica si es una vocal
            if(mensaje[i] == 'a')
            {
                nuevoMensaje = nuevoMensaje + 'ai';
            }
            else if(mensaje[i] == 'e')
            {
                nuevoMensaje = nuevoMensaje + 'enter';
            }
            else if(mensaje[i] == 'i')
            {
                nuevoMensaje = nuevoMensaje + 'imes';
            }
            else if(mensaje[i] == 'o')
            {
                nuevoMensaje = nuevoMensaje + 'ober';
            }
            else if(mensaje[i] == 'u')
            {
                 nuevoMensaje = nuevoMensaje + 'ufat';
            }
            else
            {
                nuevoMensaje = nuevoMensaje + mensaje[i];
            }
        }
    } 
    return nuevoMensaje;
}

function btnDesencriptar()
{
    const msjUsuario = desencriptar(mensajeOriginal.value);
    mensajeResuelto.value = msjUsuario;
}

function desencriptar(mensaje)
{
    let largoMensaje = mensaje.length;
    let nuevoMensaje = "";

    //verifica que solo se usen mayusculas
    if (mensaje != mensaje.toLowerCase())
    {
        nuevoMensaje = "ERROR, VERIFIQUE EL MENSAJE DADO.";
    }
    
    else
    {
        for(var i=0; i<largoMensaje; i++)
        {
            //verifica si es una vocal
            if(mensaje[i] == 'a')
            {
                if(i+1 < largoMensaje && mensaje[i+1] == 'i') //verifica que el largo permita revisar el siguiente caracter y si es posible luego lo verifica
                {
                    nuevoMensaje = nuevoMensaje + 'a'; //asigna el caracter correspondiente
                    i++; //para que brinque hasta donde terminaria el caracter
                }
                else
                {
                    nuevoMensaje = "ERROR, VERIFIQUE EL MENSAJE DADO.";
                    i = largoMensaje; //para que no siga haciendo el recorrido
                }
            }
            else if(mensaje[i] == 'e')
            {
                if(i+4 < largoMensaje && (mensaje[i+1] == 'n' && mensaje[i+2] == 't' && mensaje[i+3] == 'e' && mensaje[i+4] == 'r')) //verifica que el largo permita revisar el siguiente caracter y si es posible luego lo verifica
                {
                    nuevoMensaje = nuevoMensaje + 'e'; //asigna el caracter correspondiente
                    i = i+4; //para que brinque hasta donde terminaria el caracter
                }
                else
                {
                    nuevoMensaje = "ERROR, VERIFIQUE EL MENSAJE DADO.";
                    i = largoMensaje; //para que no siga haciendo el recorrido
                }
            }
            else if(mensaje[i] == 'i')
            {
                if(i+3 < largoMensaje && (mensaje[i+1] == 'm' && mensaje[i+2] == 'e' && mensaje[i+3] == 's')) //verifica que el largo permita revisar el siguiente caracter y si es posible luego lo verifica
                {
                    nuevoMensaje = nuevoMensaje + 'i'; //asigna el caracter correspondiente
                    i = i+3; //para que brinque hasta donde terminaria el caracter
                }
                else
                {
                    nuevoMensaje = "ERROR, VERIFIQUE EL MENSAJE DADO.";
                    i = largoMensaje; //para que no siga haciendo el recorrido
                }
            }
            else if(mensaje[i] == 'o')
            {
                if(i+3 < largoMensaje && (mensaje[i+1] == 'b' && mensaje[i+2] == 'e' && mensaje[i+3] == 'r')) //verifica que el largo permita revisar el siguiente caracter y si es posible luego lo verifica
                {
                    nuevoMensaje = nuevoMensaje + 'o'; //asigna el caracter correspondiente
                    i = i+3; //para que brinque hasta donde terminaria el caracter
                }
                else
                {
                    nuevoMensaje = "ERROR, VERIFIQUE EL MENSAJE DADO.";
                    i = largoMensaje; //para que no siga haciendo el recorrido
                }
            }
            else if(mensaje[i] == 'u')
            {
                if(i+3 < largoMensaje && (mensaje[i+1] == 'f' && mensaje[i+2] == 'a' && mensaje[i+3] == 't')) //verifica que el largo permita revisar el siguiente caracter y si es posible luego lo verifica
                {
                    nuevoMensaje = nuevoMensaje + 'u'; //asigna el caracter correspondiente
                    i = i+3; //para que brinque hasta donde terminaria el caracter
                }
                else
                {
                    nuevoMensaje = "ERROR, VERIFIQUE EL MENSAJE DADO.";
                    i = largoMensaje; //para que no siga haciendo el recorrido
                }
            }
            else
            {
                nuevoMensaje = nuevoMensaje + mensaje[i];
            }
        }
    } 
    return nuevoMensaje;
}
/*
btnCopiar.addEventListener("click", async event =>
{
    try
    {
        const texto = await navigator.clipboard.readText();
        mensajeResuelto.value = texto;
    }
    catch (error)
    {
        console.log("Ocurrió un error: ${error}");
    }
}); 

function btnCopiar()
{
    //Copia en el portapapeles
    navigator.clipboard.readText().then
    (
        (texto) => document.querySelector(".textAreaMensajeResuelto").innerText = texto
    );
}
*/
function btnCopiar()
{
    mensajeResuelto.select()
//    mensajeResuelto.setSelectionRange(0, 9999);
    document.execCommand('copy');
    let tmp = mensajeResuelto.value;
    mensajeResuelto.value='';
    mensajeResuelto.value = tmp;

}

function btnBorrar()
{
    mensajeOriginal.value = "";
    mensajeResuelto.value = "";
}