//Armo clases para hedder y footer
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header class="main-header">
        <a href="index.html">
        <img class="logo" src="./assets/img/cocinando.png" alt="logo" />
        </a>
        <h1>Cocinando en CaC</h1>
        <nav class="nav-menu">
          <ul class="nav-list">
            <li class="nav-item">
              <a class="nav-link" href="#quienes-somos">Quienes somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#recetas">Recetas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#galeria">Galeria de Fotos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
  
       
      </header>`;
      }
    }

customElements.define ('my-header', MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <footer class="pie-pagina">
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="#">
                        <img src="./assets/img/cocinando.png" alt="logo"/>
                    </a>
                </figure>
                </div>
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Belén Saravia - belensaravia09@gmail.com</p>
                <p>Alejandro Di Masi - alejanddodimasi@gmail.com</p>
                <p>Marcelo Berdaguer - mberdaguer@gmail.com</p>
            </div>
            <div class="box">
                    <h2>PARA SEGUIRNOS</h2>
                <div class="red-social">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-youtube"></a>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2023 <b>Cocinando en CaC - EQUIPO W</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>`;
      }
    }

customElements.define ('my-footer', MyFooter)
//FIN HEADER Y FOOTER


// Llenar los arreglos con datos para seleccionar las fotos
//Cocinas del mundo (Cuisines)   
const cocEsp = ["Africana", "Americana", "Britanica", "Cajun", "Caribeña", "China", "Europa del Este", 
"Europea", "Francesa", "Alemana", "Griega", "India", "Irlandesa", "Italiana", "Japonesa", "Judía", "Coreana", "Latinoamericana",
"Mediterranea", "Mejicana", "Medio Oriente", "Nordica", "Sureña", "Española", "Thai", "Vienamita"];
const cocEng = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European",
"French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean",
"Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"];
console.log(cocEng);
// Tipo de Comidas (Meal  Types)    
    const ticEsp = ["Plato Principal", "Guarnición", "Postre", "Aperitivo", "Ensalada", "Pan", "Desayuno", "Sopa", "Bebidas",
"Salsas", "Marinadas", "FingerFood", "Snack", "Tragos"];
    const ticEng = ["main course", "side disch", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage",
"sauce", "marinade", "fingerfood", "snack", "drink"];

function llenarCampos(){
    
    let selectorCocina = document.getElementById("cocina"); 
    let selectorTipo = document.getElementById("tipo"); 
    
    console.log(selectorCocina);
    console.log(selectorTipo);
    
        for (var i = 0; i <= cocEsp.length; i++){
            console.log("valor de cocEsp:" + cocEsp[i]);
            selectorCocina.options[i] = new Option(cocEsp[i], "valor:"+i);}
           
        for (var i = 0; i <= ticEsp.length; i++){
            console.log("valor de i:" + ticEsp[i]);
            selectorTipo.options[i] = new Option(ticEsp[i], "valor:"+i);}

}

function recuperarFoto(){
/* ******************************** */
/* Consumir API REST para recuperar */
/* Fotos de Comidas                 */
/* ******************************** */
var selecCoc = document.getElementById('cocina').selectedIndex;
// var x = select.options[select.selectedIndex].value;
console.log(selecCoc);
var cocIngles = cocEng[selecCoc];
console.log(cocEng[selecCoc]);
console.log(cocIngles);

var selecTipo = document.getElementById('tipo').selectedIndex;
console.log(selecTipo);
var tipoIngles = ticEng[selecTipo];
console.log(ticEng[selecTipo]);
console.log(tipoIngles);



/* Armado de la busqueda */
var url1 = "https://api.spoonacular.com/recipes/random?apiKey=3735eb24625148e8b4cb234d04a46147&number=1&";
/* var url2 = "https://api.spoonacular.com/recipes/random?apiKey=3735eb24625148e8b4cb234d04a46147&number=4&tags=main course,French";*/
const URL = url1 + cocIngles + "," + tipoIngles + '";';
console.log(URL);



fetch(URL)
.then(res => res.json())
.then(data => {
 /*   const img = document.querySelector('img'); */
    const img = document.getElementById('foto');
	console.log(data.recipes[0].image);
    img.src = data.recipes[0].image;
});
}
llenarCampos();


