//ENVIO MENSAJES POR API https://formspree.io/

var form = document.getElementById("formulario");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Su mensaje fue enviado!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Tuvimos problamas para enviar su formulario."
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Tuvimos problamas para enviar su formulario."
  });
}
form.addEventListener("submit", handleSubmit)

