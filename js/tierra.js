let neomat_tierra=10000;
let hidrogeno_tierra=10000;
let ciencia_tierra=10000;
let energia_tierra=10000;
let tierras_raras_tierra=10000;
// generacion
let gen_neomat_tierra = 0;
let gen_hidrogeno_tierra=0;
let gen_ciencia_tierra=0;
let gen_energia_tierra=0;
let gen_tierras_raras_tierra=0;

// Sirven para construir y hacer cohetes
let granja_neomat_tierra = 0;
let centros_de_hidrogeno_tierra =0;
let cent_tier_raras_tierra = 0;
let fusion_tierra =0;
let lab_tierra=0;
// coste lanzamiento de cohetes
let cohetes_lanzados = 0;
// load recursos tierra funciona
function cargar_recursos_tierra() {
    document.querySelector('#count_neomat_t').innerHTML = neomat_tierra;
    document.querySelector('#count_hidrogeno_t').innerHTML = hidrogeno_tierra;
    document.querySelector('#count_ciencia_t').innerHTML = ciencia_tierra;
    document.querySelector('#count_energia_t').innerHTML = energia_tierra;
    document.querySelector('#count_tier_raras_t').innerHTML = tierras_raras_tierra;
    document.querySelector('#count_cohetes_t').innerHTML = cohetes_lanzados;
    setInterval('incrementoPorSegundo_tierra()', 1000);
    // inf counter 
    document.querySelector('#inf_fusion_fria_tierra').innerHTML = fusion_tierra;
    document.querySelector('#inf_lab_tierra').innerHTML = lab_tierra;
    document.querySelector('#inf_hidro_tierra').innerHTML = centros_de_hidrogeno_tierra;
    document.querySelector('#inf_tier_raras').innerHTML = cent_tier_raras_tierra;    
    document.querySelector('#inf_neomat_tier').innerHTML = granja_neomat_tierra;

    //
}
// logica de recursos y botones
function incrementoPorSegundo_tierra() {
    energia_tierra = energia_tierra + gen_energia_tierra;
    document.querySelector('#count_energia_t').innerHTML = energia_tierra;
    neomat_tierra = neomat_tierra + gen_neomat_tierra;
    document.querySelector('#count_neomat_t').innerHTML = neomat_tierra;
    hidrogeno_tierra = hidrogeno_tierra + gen_hidrogeno_tierra
    document.querySelector('#count_hidrogeno_t').innerHTML = hidrogeno_tierra;
    ciencia_tierra = ciencia_tierra + gen_ciencia_tierra;
    document.querySelector('#count_ciencia_t').innerHTML = ciencia_tierra;
    tierras_raras_tierra = tierras_raras_tierra + gen_tierras_raras_tierra;
    document.querySelector('#count_tier_raras_t').innerHTML = tierras_raras_tierra;
    // cohetes no ya que no es incrementado por sec
}
function comp_granja_neoMat() {
    if (tierras_raras_tierra >=20 && ciencia_tierra>=50 && energia_tierra>=10){
        ciencia_tierra-=50;
        tierras_raras_tierra-=20;
        energia_tierra -= 10;
        gen_neomat_tierra ++;
        granja_neomat_tierra++;
        document.querySelector('#inf_neomat_tier').innerHTML = granja_neomat_tierra;
    }
}
function tier_raras_tierra() {
    if (ciencia_tierra>=10 && energia_tierra>=50 && hidrogeno_tierra>=20){
        ciencia_tierra-=10;
        energia_tierra-=50;
        hidrogeno_tierra-=20;
        gen_tierras_raras_tierra ++;
        cent_tier_raras_tierra ++;
        document.querySelector('#inf_tier_raras').innerHTML = cent_tier_raras_tierra;
    }
}
function fusion_fria_tierra() {
    if(ciencia_tierra>=20 && neomat_tierra>=10 && hidrogeno_tierra>=50){
        ciencia_tierra-=20;
        neomat_tierra-=10;
        hidrogeno_tierra-=50;
        gen_energia_tierra++;
        fusion_tierra++;
        document.querySelector('#inf_fusion_fria_tierra').innerHTML = fusion_tierra;
    }
}
function centro_hidrogeno_tierra() {
    if (neomat_tierra>=20 && energia_tierra>=50 && tierras_raras_tierra>=10){
        tierras_raras_tierra-=10;
        neomat_tierra-=20;
        energia_tierra-=50;
        gen_hidrogeno_tierra++;
        centros_de_hidrogeno_tierra++;
        document.querySelector('#inf_hidro_tierra').innerHTML = centros_de_hidrogeno_tierra;
    }
}
function lab_tierra_comp() {
    if(tierras_raras_tierra>=50 && neomat_tierra>=20 && hidrogeno_tierra>=10){
        neomat_tierra-=20;
        tierras_raras_tierra-=50;
        hidrogeno_tierra-=10;
        gen_ciencia_tierra++;
        lab_tierra++;
        document.querySelector('#inf_lab_tierra').innerHTML = lab_tierra;
    }
}
// Rocket animation + logic
let cohete;
function lanzar_y_animar_cohete() {
    if (neomat_tierra >= 500 && tierras_raras_tierra >= 500 && hidrogeno_tierra >= 500 && ciencia_tierra >= 500 && energia_tierra >= 500) {
        neomat_tierra -= 500;
        tierras_raras_tierra -= 500;
        hidrogeno_tierra -= 500;
        ciencia_tierra -= 500;
        energia_tierra -= 500;
        // animacion
        cohete = document.querySelector('#cohete_anim');
        cohete.classList.add('cohete-animation');
        cohetes_lanzados++;
        document.querySelector('#count_cohetes_t').innerHTML = cohetes_lanzados;
        setTimeout(function () {
            cohete.classList.remove('cohete-animation');
        }, 3000);
    }
}



let boost_state = document.querySelector('#boost_state');
let boostValue = false;
function boost() {
    // Guarda los valores originales antes de aplicar el boost
    const originalValues = {
        boost: boostValue,
        gen_ciencia_tierra,
        gen_energia_tierra,
        gen_hidrogeno_tierra,
        gen_neomat_tierra,
        gen_tierras_raras_tierra
    };
    // Verifica la condición utilizando === en lugar de =
    if (boostValue === false) {
        gen_ciencia_tierra *= 2;
        gen_hidrogeno_tierra *= 2;
        gen_ciencia_tierra *= 2;
        gen_energia_tierra *= 2;
        gen_tierras_raras_tierra *= 2;
        boostValue = true;
    }
    // Restaura los valores originales después de 30 segundos
    setTimeout(() => {
        boostValue = originalValues.boost;
        gen_ciencia_tierra = originalValues.gen_ciencia_tierra;
        gen_energia_tierra = originalValues.gen_energia_tierra;
        gen_hidrogeno_tierra = originalValues.gen_hidrogeno_tierra;
        gen_neomat_tierra = originalValues.gen_neomat_tierra;
        gen_tierras_raras_tierra = originalValues.gen_tierras_raras_tierra;
    }, 30000);
}