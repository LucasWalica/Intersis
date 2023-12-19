
// counters marte
let sondaCount = 200;
let centGeotermCount = 0;
let roverLabCount = 0;
let plantasCount = 0;
let humanosCount = 10;
let aliensCount = 1000;

function cargar_recursos_marte() {
    document.querySelector('#sonda').innerHTML = sondaCount;
    document.querySelector('#centGeoterm').innerHTML = centGeotermCount;
    document.querySelector('#rover').innerHTML = roverLabCount;
    document.querySelector('#plantas').innerHTML = plantasCount;
    document.querySelector('#humanos').innerHTML = humanosCount;
    document.querySelector('#aliens').innerHTML = aliensCount;    
}

// funcion un poco meme comprobar
function lanzarSonda(){
    if(cohetes_lanzados>=1){
        sondaCount+=1;
        cohetes_lanzados-=1;
        document.querySelector('#sonda').innerHTML = sondaCount;
    }
}

function geoterm(){
    if(sondaCount>=5 && roverLabCount>=2){
        sondaCount-=5;
        roverLabCount-=2;
        centGeotermCount+=1;
        document.querySelector('#sonda').innerHTML = sondaCount;
        document.querySelector('#rover').innerHTML = roverLabCount;
        document.querySelector('#centGeoterm').innerHTML = centGeotermCount;
    }
}
function deployRover(){
    if(sondaCount>=1){
        sondaCount-=1;
        roverLabCount+=1;
        document.querySelector('#sonda').innerHTML = sondaCount;
        document.querySelector('#rover').innerHTML = roverLabCount;
    }
}
function buildHidroponics(){
    if(sondaCount>=1 && humanosCount>=1){
        sondaCount-=1;
        humanosCount-=1;
        plantasCount+=10;
        document.querySelector('#sonda').innerHTML = sondaCount;
        document.querySelector('#humanos').innerHTML = humanosCount;
        document.querySelector('#plantas').innerHTML=plantasCount;
    }
}
function buildHouses(){
    if(centGeotermCount>=1 && humanosCount<100 && centGeotermCount>=1 && plantasCount>=10){
        humanosCount+=10;
        plantasCount-=10;
        document.querySelector('#plantas').innerHTML = plantasCount;
        document.querySelector('#humanos').innerHTML=humanosCount;
    }
    if(centGeotermCount>=1 && humanosCount<200 && centGeotermCount>=2 && plantasCount>=10){
        humanosCount+=10;
        plantasCount-=10;
        document.querySelector('#plantas').innerHTML = plantasCount;
        document.querySelector('#humanos').innerHTML=humanosCount;
    }
    if(centGeotermCount>=1 && humanosCount<300 && centGeotermCount>=3 && plantasCount>=10){
        humanosCount+=10;
        plantasCount-=10;
        document.querySelector('#plantas').innerHTML = plantasCount;
        document.querySelector('#humanos').innerHTML=humanosCount;
    }
    if(centGeotermCount>=1 && humanosCount<400 && centGeotermCount>=4 && plantasCount>=10){
        humanosCount+=10;
        plantasCount-=10;
        document.querySelector('#plantas').innerHTML = plantasCount;
        document.querySelector('#humanos').innerHTML=humanosCount;
    }
    if(centGeotermCount>=1 && humanosCount<500 && centGeotermCount>=5 && plantasCount>=10){
        humanosCount+=10;
        plantasCount-=10;
        document.querySelector('#plantas').innerHTML = plantasCount;
        document.querySelector('#humanos').innerHTML=humanosCount;
    }
    if(centGeotermCount>=1 && humanosCount<600 && centGeotermCount>=6 && plantasCount>=10){
        humanosCount+=10;
        plantasCount-=10;
        document.querySelector('#plantas').innerHTML = plantasCount;
        document.querySelector('#humanos').innerHTML=humanosCount;
    }
    if(centGeotermCount>=1 && humanosCount<700 && centGeotermCount>=7 && plantasCount>=10){
        humanosCount+=10;
        plantasCount-=10;
        document.querySelector('#plantas').innerHTML = plantasCount;
        document.querySelector('#humanos').innerHTML=humanosCount;
    }
    if(centGeotermCount>=1 && humanosCount<800 && centGeotermCount>=8 && plantasCount>=10){
        humanosCount+=10;
        plantasCount-=10;
        document.querySelector('#plantas').innerHTML = plantasCount;
        document.querySelector('#humanos').innerHTML=humanosCount;
    }
    if(centGeotermCount>=1 && humanosCount<900 && centGeotermCount>=9 && plantasCount>=10){
        humanosCount+=10;
        plantasCount-=10;
        document.querySelector('#plantas').innerHTML = plantasCount;
        document.querySelector('#humanos').innerHTML=humanosCount;
    }
    if(centGeotermCount>=1 && humanosCount<1000 && centGeotermCount>=10 && plantasCount>=10){
        humanosCount+=10;
        plantasCount-=10;
        document.querySelector('#plantas').innerHTML = plantasCount;
        document.querySelector('#humanos').innerHTML=humanosCount;
    }
}
function killAliens(){
    if(humanosCount>=100 && aliensCount>0){
        aliensCount-=100;
        humanosCount-=100;
        document.querySelector('#humanos').innerHTML = humanosCount;
        document.querySelector('#aliens').innerHTML = aliensCount;
    }
}
