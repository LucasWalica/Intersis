// Define las características de los sistemas solares
    // Inf _name 
const planeta1_inf ="<h3>Tierra</h3>";
const planeta2_inf ="<h3>Marte</h3>";
const planeta3_inf ="<h3>Kepler</h3>";
const planeta4_inf ="<h3>Asdran</h3>";
const planeta5_inf ="<h3>Sirius</h3>";
const planeta6_inf ="<h3>Emilio</h3>";
    // descripcion
    // Insertar datos htmls de los planetas
        // tierra crear funciones 
const planet1Data = 
                        '<center>'+
                            '<div id="button_container" class="container">'+
                                '<div id="recursos" class="row">'+
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Neomat</div><div id="neomat_icon"><div id="count_neomat_t"></div></div></div>'+
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Tierras Raras</div><div id="tier_raras_icon"><div id="count_tier_raras_t"></div></div></div>'+
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Hidrogeno</div><div id="hidrogen_icon"><div id="count_hidrogeno_t"></div></div></div>'+
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Ciencia</div><div id="science_icon"><div id="count_ciencia_t"></div></div></div>'+
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Energia</div><div id="energy_icon"><div id="count_energia_t"></div></div></div>'+
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text"></div><div id="cohete_anim"><div id="count_cohetes_t"></div></div></div>'+
                                '</div>'+
                                '<hr>'+
                                '<div id="botones_row_compra" class="row">'+
                                    //Granja neomateriales 
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="comp_granja_neoMat()"> <div class="lower_title_button">Granja Neomat<div id="inf_neomat_tier"></div> </div></button>'+
                                        '<div class="row">'+
                                            '<div class="col-4">'+
                                                '<div id="science_32">-50</div>'+
                                            '</div>'+
                                            '<div class="col-4">'+
                                                '<div id="tier_32">-50</div>'+
                                            '</div>'+
                                            '<div class="col-4">'+
                                                '<div id="energy_test">-50</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    //boton Tierras raras
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="tier_raras_tierra()"><div class="lower_title_button">tierras raras <div id="inf_tier_raras"></div></div></button>'+
                                        '<div class="row">'+
                                            '<div class="col-4">'+
                                                '<div id="science_32">-10</div>'+
                                            '</div>'+
                                            '<div class="col-4">'+
                                                '<div id="hidro_32">-20</div>'+   
                                            '</div>'+
                                            '<div class="col-4">'+
                                                '<div id="energy_test">-50</div>'+ 
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    // boton Hidrogeno 
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="centro_hidrogeno_tierra()"><div class="lower_title_button"> Hidrogeno<div id="inf_hidro_tierra"></div></div></button>'+
                                        '<div class="row">'+
                                            '<div class="col-4">'+
                                                '<div id="neomat_32">-20</div>'+
                                            '</div>'+
                                            '<div class="col-4">'+
                                                '<div id="tier_32">-20</div>'+
                                            '</div>'+
                                            '<div class="col-4">'+
                                                '<div id="energy_test">-50</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    // boton laboratorio -->
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="lab_tierra_comp()"><div class="lower_title_button">Laboratorio <div id="inf_lab_tierra"></div></div></button>'+
                                        '<div class="row">'+
                                            '<div class="col-4">'+
                                                '<div id="tier_32">-50</div>'+
                                            '</div>'+
                                            '<div class="col-4">'+
                                                '<div id="neomat_32">-50</div>'+
                                            '</div>'+
                                            '<div class="col-4">'+
                                                '<div id="hidro_32">-50</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    // boton fusion fria 
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="fusion_fria_tierra()"><div class="lower_title_button">fusion fria <div id="inf_fusion_fria_tierra"></div></div></button>'+
                                        '<div class="row">'+
                                            '<div class="col-4">'+
                                                '<div id="science_32">-50</div>'+
                                            '</div>'+
                                            '<div class="col-4">'+
                                               '<div id="neomat_32">-50</div>'+
                                            '</div>'+
                                            '<div class="col-4">'+
                                                '<div id="hidro_32">-50</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    // boton lanz cohetes falta incorporar cosas pensar en como hacer esto-->
                                    '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="lanzar_y_animar_cohete()"><div class="lower_title_button">Lanzar cohete</div></button>'+
                                        '<div class="row"><div class="col">&nbsp;&nbsp;&nbsp;&nbsp;Todos -500</div></div>'+
                                    '</div>'+
                                '</div>'+
                             '</div>'+
                        '</center>'+ 
                    '</div>'+
                '</center>'
    
const planet2Data = 
    '<center>'+
    '<div id="button_container" class="container">'+
        '<div id="recursos" class="row">'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Sondas</div><div id="sonda_llega_icon"><div id="sonda"></div></div></div>'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Cent Geotermica</div><div id="geoterm"><div id="centGeoterm"></div></div></div>'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Rover lab</div><div id="rover_icon"><div id="rover"></div></div></div>'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Plantas</div><div id="planta_icon"><div id="plantas"></div></div></div>'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Humanos</div><div id="astronau"><div id="humanos"></div></div></div>'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-4"><div id="salto_linea"></div><div class="lower_title_text">Marcianos</div><div id="alien"><div id="aliens"></div></div></div>'+
    '</div>'+
    '<hr>'+
    '<div id="botones_row_compra" class="row">'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="lanzarSonda()"> <div class="lower_title_button">Sonda</div></button>'+
            '<div class="row">'+
                '<div class="col-12">-1 cohete</div>'+
            '</div>'+
        '</div>'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="geoterm()"><div class="lower_title_button">Geotermica</div></button>'+
            '<div class="row">'+
                '<div class="col-6">-5 sondas</div>'+
                '<div class="col-6">-2 rovers</div>'+
            '</div>'+
        '</div>'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="deployRover()"><div class="lower_title_button">Rover Lab</div></button>'+
            '<div class="row">'+
                '<div class="col-12">-1 sondas</div>'+
            '</div>'+
        '</div>'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="buildHidroponics()"><div class="lower_title_button">Hidroponia</div></button>'+
            '<div class="row">'+
                '<div class="col-6">-1 Humano</div>'+
                '<div class="col-6">-1 Sonda</div>'+
            '</div>'+
        '</div>'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="buildHouses()"><div class="lower_title_button">Casas</div></button>'+
            '<div class="row">'+
               '<div class="col-6">-5  plantas</div>'+
               '<div class="col-6">-1 geterm</div>'+
            '</div>'+
        '</div>'+
        '<div class="col-sm-4 col-md-2 col-extrasmall-6"><button onclick="killAliens()"><div class="lower_title_button">Atacar aliens</div></button>'+
            '<div class="row"><div class="col-12">Humanos vs Aliens</div></div>'+
        '</div>'+
    '</div>'+
 '</div>'+
'</center>' 



const planet3Data = 
    '<center>' +
        '<div id="button_container" class="container">' +
            '<div class="row">' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Granja Neomat</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Energia geotermica</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>satelite lab</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>fusion fria</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Klepler-186e</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Esferra Dysson</button></div>';
            '<div>'
        '</div>'+
    '</center>';;
const planet4Data = 
'<center>' +
        '<div id="button_container" class="container">' +
            '<div class="row">' + 
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Granja Neomat</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Lanzamiento cohetes</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>tierras raras</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Helio 3</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>laboratorio</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Fusion fria</button></div>';
            '</div>'
        '</div>'+   
    '</center>';
const planet5Data = 
    '<center>' +
        '<div id="button_container" class="container">' +
            '<div class="row">' + 
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Granja Neomat</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Lanzamiento cohetes</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>tierras raras</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Hidrogeno</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>laboratorio</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Fusion fria</button></div>';
            '</div>'
        '</div>'+
    '</center>';
const planet6Data = 
    '<center>' +
        '<div id="button_container" class="container">' +
            '<div class="row">' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Granja Neomat</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>tierras raras</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Helio 3</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>Lab estacional</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>asteroide</button></div>' +
                '<div class="col-sm-4 col-md-2 col-extrasmall-4"><button>fusion fria</button></div>';
            '</div>'
        '</div>'+
    '</center>';    
// description title inf 
function updateDescription(data) {
    const solar_img = document.getElementById("solar_img");
    solar_img.innerHTML = data;

    let descripcion = document.getElementById('description_sis');
    descripcion.innerHTML = data;
}
// buttons
function updateButtons(data) {
    const elegir_planeta = document.querySelector('#elegir_planeta');
    elegir_planeta.innerHTML = data;
}
// div sprite 
const planet1Sprite = '<center><div id="planet1_sprite"></div></center>';
const planet2Sprite = '<center><div id="planet2_sprite"></div></center>';
const planet3Sprite = '<center><div id="planet3_sprite"></div></center>';
const planet4Sprite = '<center><div id="planet4_sprite"></div></center>';
const planet5Sprite = '<center><div id="planet5_sprite"></div></center>';
const planet6Sprite = '<center><div id="planet6_sprite"></div></center>';
// insertar en div interior  aeste
function updateSprite(data) {
    const planet_sprite = document.querySelector('#solar_img');
    planet_sprite.innerHTML = data;
}