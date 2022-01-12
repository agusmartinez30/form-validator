const formulario = document.getElementById("formulario");

const userName = document.getElementById("nombreUser");
const userEmail = document.getElementById("emailUser");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

 const pintarMensajeExito = () => {
    alertSuccess.classList.remove("ocultar");
    alertSuccess.classList.add("alertEx");
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const mostrarMsgError = (errores) => {
    errores.forEach( item => {
        alertSuccess.classList.add("ocultar");
        item.tipo.classList.add('error')
        item.tipo.textContent = item.msg
    });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const errores = [];

    // validar nombre
     if (!regUserName.test(userName.value) || !userName.value.trim()){
        // console.log('user no valido');
        alertName.classList.remove('ocultar')

       errores.push({
           tipo: alertName,
           msg: 'Nombre de usuario no valido'
       }) 

     }else{
         alertName.classList.add('ocultar')
         console.log('user valido');
     }


    //VALIDAR EMAIL

    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()){
        // console.log('user no valido');
        alertEmail.classList.remove('ocultar')

       errores.push({
           tipo: alertEmail,
           msg: 'Email no valido'
       }) 

     }else{
         alertEmail.classList.add('ocultar')
         console.log('user valido');
     }

    if (errores.length !== 0) {
        mostrarMsgError(errores);
         return;
     }

    // console.log("Formulario enviado con éxito");
    pintarMensajeExito();
    console.log(errores);
});