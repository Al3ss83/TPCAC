window.addEventListener('load', ()=> {
    const form = document.getElementById('formulario')
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
   
    form.addEventListener('submit', (e) => {
        validaCampos();
        e.preventDefault();
        handleSendEmail();
    })


    // Validaciones - recupera los valores ingresados
        const validaCampos = ()=> {
        const nombreVlr = nombre.value.trim()
        const emailVlr = email.value.trim()
    
    // Validación Nombre
    if(!nombreVlr){
        validaFalla(nombre, 'Debe ingresar nombre')
    }else{
        validaOk(nombre)
    }
        
    //validando campo correo electronico
    if(!emailVlr){
        validaFalla(email, 'Debe ingresar e-mail')            
    }else if(!validaEmail(emailVlr)) {
        validaFalla(email, 'El e-mail no es válido')
    }else {
        validaOk(email)
    }

}
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }

    const validaOk = (input) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }        

    // const validaEmail = (email) => {
    //  /*   if (email.validity.typeMismatch) {
    //         email.checkValidity();
    //       } else {
    //         email.false;
    //       } */
    //     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    // }
    async function handleSendEmail(event){
        event.prevenDefault();
    
        const fd = new FormData(this)
    
        const response = await fetch ('https://formspree.io/f/mnqyrogg',{
            method: 'POST',
            body: fd,
            headers:{
                Accept: 'application/json'
            }
        })
    
        if (response.ok) {
            this.reset()
            alert( 'Mensaje enviado')
        } else {
            alert('Error al enviar mensaje')
        }
    }
    
    
}) 