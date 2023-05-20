const $form = document.querySelector('#formulario')
    $form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event){
    event.preventDefault()
    validaCampos();

    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'            
        }
    })
    if (response.ok) {
        this.reset()
        alert('Mensaje Enviado')
    } 
}












// async function handleSendEmail(event){
//     event.prevenDefault();

//     const fd = new FormData(this)

//     const response = await fetch (this.action,{
//         method: this.method,
//         body: fd,
//         headers:{
//             'Accept': 'application/json'
//         }
//     })

//     if (response.ok) {
//         this.reset()
//         alert( 'Mensaje enviado')
//     } else {
//         alert('Error al enviar mensaje')
//     }
// }

// form.addEventListener('submit'. handleSendEmail)