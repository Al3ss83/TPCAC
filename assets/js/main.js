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
