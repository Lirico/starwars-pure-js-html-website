// Abreviaturas
const d = document;

// ************ Navbar ****************
const $navBar = d.getElementById("nav"),
    $navBarImg = d.createElement("img"),
    $navBarUl = d.createElement("ul"),
    $fragmentNavBar = d.createDocumentFragment(),
    navBarMenu = [
        {
            opcion: "Inicio",
            enlace: "index.html"
        },
        {
            opcion: "¿Que es Star Wars?",
            enlace: "#wiki"
        },
        {
            opcion: "Personajes",
            enlace: "#personajes"
        },
        {
            opcion: "Curiosidades",
            enlace: "#curiosidades"
        },
    ]

$navBar.appendChild($navBarImg)
$navBar.querySelector("img").setAttribute("src", "https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png")
$navBar.querySelector("img").setAttribute("alt", "Star Wars")
$navBar.querySelector("img").setAttribute("width", "200")
$navBar.appendChild($navBarUl)
navBarMenu.forEach(el => {
    const $li = d.createElement("li");
    const $a = d.createElement("a")
    $a.textContent = el.opcion;
    $fragmentNavBar.appendChild($li);
    $li.appendChild($a)
    $a.setAttribute("href", el.enlace)
})
$navBarUl.appendChild($fragmentNavBar)



// ************ Seccion Que es Star Wars? ****************
const $wiki = d.getElementById("wiki"),
    $h2 = d.createElement("h2"),
    $pWiki = d.createElement("p");

$wiki.appendChild($h2);
$wiki.appendChild($pWiki);
$h2.textContent = "- ¿Qué es Star Wars? -";
$pWiki.textContent = "Star Wars, conocida también en español como La guerra de las galaxias, es una franquicia compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012. Su trama describe las vivencias de un grupo de personajes que habitan en una galaxia ficticia e interactúan con elementos como «la Fuerza», un campo de energía metafísico y omnipresente que posee un «lado luminoso» impulsado por la sabiduría, la nobleza y la justicia y utilizado por los Jedi, y un «lado oscuro» usado por los Sith y provocado por la ira, el miedo y el odio."




// ************ Sección Personajes ****************
const $cardsPersonajes = d.getElementById("personajes"),
    $templatePersonajes = d.getElementById("template-card").content,
    $fragmentPersonajes = d.createDocumentFragment();


const $personajes = [
    {
        titulo: "Yoda",
        info: "https://i0.wp.com/wipy.tv/wp-content/uploads/2020/06/cuantos-jedi-entreno-yoda-2.jpg?fit=1000%2C600&ssl=1"
    },
    {
        titulo: "Luke",
        info: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDIgzsZ7Etus0zsU3EbyOj7bV-LYc70cc8F4AZfCNSK55JJ2a-A1Jv_5YSvaT4ikXjHg&usqp=CAU",
    },
    {
        titulo: "Darth Vader",
        info: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/05/darth-vader.jpeg?fit=1200%2C785&ssl=1",
    },
    {
        titulo: "Han Solo",
        info: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPHk4PpBdeqIN0w03KLo_R4l7hdHjbXQ3KO5NJjbTFVOSABs2z7m5dJCVpWK3exNxVPc&usqp=CAU",
    },
    {
        titulo: "Chewbacca",
        info: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSju1ilx4nsCLADNpDR2qWnakSpAvLayqIlLj_I_7STo6uKT7oFumGVvXYOVn3E7CXfc2U&usqp=CAU",
    },
    {
        titulo: "Princesa Leia",
        info: "https://images.clarin.com/2019/10/23/los-ros-rodetes-laterales-de___rBsOy-7E_720x0__1.jpg",
    },
]
$cardsPersonajes.querySelector("h2").textContent = "- Personajes -";
$personajes.forEach((el) => {
    $templatePersonajes.querySelector("img").setAttribute("src", el.info);
    $templatePersonajes.querySelector("img").setAttribute("alt", el.titulo);
    $templatePersonajes.querySelector("img").setAttribute("width", "150");
    $templatePersonajes.querySelector("figcaption").textContent = el.titulo;

    let $clone = document.importNode($templatePersonajes, true);
    $fragmentPersonajes.appendChild($clone);
});

$cardsPersonajes.appendChild($fragmentPersonajes);



// ************ Sección Artículos ****************
const $articulos = d.getElementById("curiosidades"),
    $templateArticulos = d.getElementById("template-curiosidades").content,
    $fragmentArticulos = d.createDocumentFragment();


const $articulosData = [
    {
        titulo: "El fenomeno Bad Batch",
        info: "Bad Batch viene cumpliendo las espectativas de los fans tras la amarga descepción de las películas VII, VIII y IX"
    },
    {
        titulo: "¿Por qué la última trilogia son tan malas?",
        info: "¿Por qué? No hay porqué.",
    },
    {
        titulo: "¿Es posible recibir una lobotomía para borrar de mi mente las películas VII, VIII y IX?",
        info: "Las lobotomías dejaron de practicarse gracias al desarrollo de antipsicógicos y hoy en día se practican procedimiento lesivos de núcleos cerebrales localizados mediante técnicas menos invasivas. La era de la lobotomía ahora se observa generalmente como episodio bárbaro en la historia psiquiátrica",
    },
    {
        titulo: "No habrá The Mandalorian en 2021",
        info: "The Mandalorian, la primera serie en acción real basada en el universo de Star Wars, no se estrenará en 2021, pero ya está confirmado que habrá una tercera temporada. Jon Favreau y Dave Filoni, las dos cabezas visibles del proyecto, trabajan en la serie y en otros spin-off ya anunciados. Uno de ellos, El Libro de Boba Fett, sustituirá  las historias de Mando este mismo mes de diciembre. Brendan Wayne, doble de acción, ha anticipado en Star Wars Session lo que nos espera de la próxima temporada de la serie.",
    },
]

$articulos.querySelector("h2").textContent = "- Curiosidades -";
$articulosData.forEach((el) => {

    $templateArticulos.querySelector("h3").textContent = el.titulo;
    $templateArticulos.querySelector("p").textContent = el.info;

    let $clone = d.importNode($templateArticulos, true);
    $fragmentArticulos.appendChild($clone);
});

$articulos.appendChild($fragmentArticulos);




// ************ Footer ****************
const $footer = d.getElementById("footer"),
    $footerUl = d.createElement("ul"),
    $fragmentFooter = d.createDocumentFragment(),
    footerMenu = [
        {
            opcion: "Facebook",
            enlace: "#"
        },
        {
            opcion: "Instagram",
            enlace: "#"
        },
        {
            opcion: "Twitter",
            enlace: "#"
        },
    ]

$footer.querySelector("h2").textContent = "- Puedes seguirnos en nuestras redes sociales -";
$footer.appendChild($footerUl)
footerMenu.forEach(el => {
    const $li = d.createElement("li");
    const $a = d.createElement("a")
    $a.textContent = el.opcion;
    $fragmentFooter.appendChild($li);
    $li.appendChild($a)
    $a.setAttribute("href", el.enlace)
})
$footerUl.appendChild($fragmentFooter)




    

    





