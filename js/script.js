/* Script para las demás páginas */

let agudas = [
    'COLLAR','MAYOR','ACCIÓN','MOSTRAR','ADIÓSL','TEMBLOR',
    'LIMÓN','IRLANDÉS','JUGAR','AZUL','AYER','ESTRÉS',
    'ESCRIBIR','ALEMÁN','MENTAL','CAFÉ','PANEL','VERDAD',
    'OMITIR','VISOR','TRABAJAR','VECINDAD','INFLAR','BAILAR',
    'LLEVAR','SOCIAL','RUBÍ','BRUTAL','AEROSOL','COLIBRÍ'
];

let graves = [
    'CORTINAS','ABEJA','ÁGIL','OJOS','PANTERA','POLICÍA',
    'DIENTE','CUCHARA','ENERGÍA','ESTRELLAS','ANTES','SANDÍA',
    'RÍO','GRÚA','JOYA','CÓMIC','FÚTBOL','PLAYA',
    'GALAXIAS','TRÉBOL','CABLE','CALZADO','CÁNCER','ROPA',
    'CÉSPED','PIEDRA','CABELLO','AMARILLO','DÉBIL','CONJURO'
];

let esdrujulas = [
    'AFÓNICO','FÍSICA','QUÍMICA','PELÍCULA','FORÁNEO','RÁPIDO',
    'RIDÍCULO','HÉROE','BRÓCOLI','ÁNGULO','ANÓNIMO','PIRÁMIDES',
    'LÓGICO','CÍRCULO','TÚNICA','SÍLABA','LÁGRIMA','TÉRMINO',
    'LIBÉLULA','ÚLTIMO','ÁRABE','GRÁFICAS','FANTÁSTICO','ORÉGANO',
    'PÁLIDO','EJÉRCITO','VÍBORA','NÚMEROS','CLÁSICO','MÁGICO'
];

let combinadas = [];

window.onload = function(){
    let pagina = self.location.href;
    let ultiBarra = pagina.lastIndexOf('/');
    let nombreP = pagina.substring(ultiBarra + '/'.length, pagina.length);
    console.log(nombreP);
    if (nombreP == 'agudas.html') {
        agudas.sort(() => Math.random()-0.5);
        graves.sort(() => Math.random()-0.5);
        for (let i = 1; i <= 30; i++) {
            if (i%2 == 0) {
                combinadas.push(`
                    <div class="grid-item" onclick="agudasDect(this);">${agudas[i-1]}</div>
                `);
            } else {
                combinadas.push(`
                    <div class="grid-item" onclick="agudasDect(this);">${graves[i-1]}</div>
                `);
            }
        }
        combinadas.sort(() => Math.random()-0.5);
        document.getElementById('grid').innerHTML = combinadas.join(' ');
    } else if (nombreP == 'graves.html') {
        esdrujulas.sort(() => Math.random()-0.5);
        graves.sort(() => Math.random()-0.5);
        for (let i = 1; i <= 30; i++) {
            if (i%2 == 0) {
                combinadas.push(`
                    <div class="grid-item">${esdrujulas[i-1]}</div>
                `);
            } else {
                combinadas.push(`
                    <div class="grid-item">${graves[i-1]}</div>
                `);
            }
        }
        combinadas.sort(() => Math.random()-0.5);
        document.getElementById('grid').innerHTML = combinadas.join(' ');
    } else if (nombreP == 'esdrujulas.html') {
        esdrujulas.sort(() => Math.random()-0.5);
        graves.sort(() => Math.random()-0.5);
        for (let i = 1; i <= 30; i++) {
            if (i%2 == 0) {
                combinadas.push(`
                    <div class="grid-item">${esdrujulas[i-1]}</div>
                `);
            } else {
                combinadas.push(`
                    <div class="grid-item">${graves[i-1]}</div>
                `);
            }
        }
        combinadas.sort(() => Math.random()-0.5);
        document.getElementById('grid').innerHTML = combinadas.join(' ');
    }
}


/* Script para página de palindromos */
let cadena;

$('#ver').click(function(){
    cadena = document.getElementById('palin').value;
    if (cadena.trim().length > 0) {
        cadena = cadena.trim();
        if (palindromo() == true) {
            $('#res').replaceWith('<h3 id="res">Sí es un palindromo</h3>');
        } else {
            $('#res').replaceWith('<h3 id="res">No es un palindromo</h3>');
        }
    } else {
        // PopOver pendiente
    } 
});

$('#palin').keyup(function(){
    let txt = $('#palin');
    let letras = txt.val().replace(/ /g, "");
    txt.val(letras.toUpperCase());
});

function palindromo() {
    let texto = [];
    let texto2 = '';
    for (let i = 0; i < cadena.length; i++) {
        texto.unshift(cadena[i]);
        console.log(texto);
    }
    for (let x = 0; x < texto.length; x++) {
        texto2+=texto[x];
    }
    console.log(texto2);
    if (cadena == texto2) {
        return true;
    } else {
        return false;
    }
}

/*script para pagina de agudas*/
function agudasDect(obj){
    const text = obj.textContent;

    agudas.forEach(element => {
        if(element==text){
            console.log('si');
            obj.setAttribute('class', 'grid-select'); 
        }
        else{
            console.log('no');
        }
    });
}