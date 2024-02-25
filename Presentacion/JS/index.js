const $body=document.body,
        $html=document.documentElement
const dinamicIcons=[ //iconos dinamicos que se ocupar a lo largo del codigo
`<svg class="svg-screen-change" xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="38">
    <path d="M333 856V723H200v-60h193v193h-60Zm234 0V663h193v60H627v133h-60ZM200 489v-60h133V296h60v193H200Zm367 0V296h60v133h133v60H567Z"/>
 </svg>`,//icon exit-full-screen
`<svg class="svg-screen-change" xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="38">
    <path d="M200 856V663h60v133h133v60H200Zm0-367V296h193v60H260v133h-60Zm367 367v-60h133V663h60v193H567Zm133-367V356H567v-60h193v193h-60Z"/>
 </svg>`,//icon fullscreen
 `<svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 -960 960 960" width="38">
    <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/>
  </svg>`,//lightIcon
 `<svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 -960 960 960" width="38">
    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/>
 </svg>`,//darkIcon
 `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
    <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
 </svg>`,//close ICOn
];
//CREAR OBJETO DONDE VA A IR 

//VARIABLES NECESARIAS PARA APLICAR EL LIGHT Y EL DARK MODE

//RETRASO EN MS en funciones asincronas
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Funcion para EMPEZAR Y MOSTRAR ANIMACIONES
const animationPage=async function(Source,boolAtribute){
    const $bar=document.querySelectorAll(".bar-animaton");
    document.querySelector(".container-animation").style.setProperty("pointer-events","all");
    source=Source;
    const $button=document.querySelector(".button-container");
    if(!$button.classList.contains("pointer-events-none")){
        $button.style.setProperty("opacity","0");
       await timeout(550);
       $button.classList.add("pointer-events-none");
    }
    if(boolAtribute===0){
        for (let i = 0; i < $bar.length; i++) {
            $bar[i].style.setProperty("transform","translateX(100%)");
            await timeout(200);
        }
        document.querySelector(".header-container").style.setProperty("transform","translateY(0%)");//bajamos el cursor
        document.querySelector(".container-animation").style.setProperty("pointer-events","none");
       
    }
    if(boolAtribute===1){
        //document.querySelector(".section").style.setProperty("pointer-events","none");
        for (let i = $bar.length-1;i>=0;i--) {
            $bar[i].style.setProperty("transform","translateX(0%)");
            await timeout(200);
        }
        if(source!==null){
            console.log(source)
            window.open(source,"_self","n");    
        }
    }     
    return true;    
}
//Funcion para el modo claro y el modo oscuro
const colorsVariables=[
    "--first-color",
    "--first-1-color",
    "--first-2-color",
    "--first-alpha-color",
    "--first-hover-alpha-color",
    "--second-color",
    "--second-hover-color",
    "--second-1-color",
    "--second-2-color",
    "--second-alpha-color",
    "--second-hover-alpha-color",
    "--main-blue-dark",
	"--main-blue",
	"--main-blue-light",
	"--main-pink-dark",
	"--main-pink",
	"--main-pink-light",
	"--main-purple-dark",
	"--main-purple",
	"--main-purple-light",
    "--link-color",
    "--text-color",
]
const darkColor=[
    "#171717",
    "#101010",
    "#292929",
    "#171717c8",
    "#171717c8",
    "#d6d0d0",
    "#d6d0d0",
    "#aea7a7",
    "#f1f1f1",
    "#d6d0d0cb",
    "#d6d0d0cb",
    "#539bee",
	"#c9def4",
	"#dbe9f8",
	"#e71484",
	"#ff1493",
	"#ffb6c1",
	"#4d3dff",
	"#c2bcff",
	"#bdb7ff",
    "#d6d0d0",
    "#d6d0d0",
]
const lightColor=[
    "#d6d0d0", //first-color
    "#aea7a7", //first-1-color
    "#f1f1f1", //first-2-color
    "#d6d0d0cb", //first-alpha-color
    "#4d3dffcd",//morado claro first-hover-alpha-color
    "#171717",  //second-color
    "#4d3dff", //morado //second-hover-color
    "#101010",  //second-1-color
    "#292929",  //second-2-color
    "#171717c8",//second-alpha-color
    "#4d3dffcd",//blanco transparente second-hover-alpha-color
    "#539bee",
	"#c9def4",
	"#dbe9f8",
	"#e71484",
	"#ff1493",
	"#ffb6c1",
	"#4d3dff",
	"#c2bcff",
	"#bdb7ff",
    "#292929",  //link-color
    "#171717", //text-color
]
const nameKey=[
    "firstColor",
    "first1Color",
    "first2Color",
    "firstAlphaColor",
    "firstHoverAlphaColor",
    "secondColor",
    "secondHoverColor",
    "second1Color",
    "second2Color",
    "secondAlphaColor",
    "secondHoverColor",
    "mainBlueDark",
    "mainBlue",
    "mainBlueLight",
    "mainPinkDark",
    "mainPink",
    "mainPinkLight",
    "mainPurpleDark",
    "mainPurple",
    "mainPurpleLight",
    "linkColor",
    "textColor",
]
const darkLightMode=async function($container){
    const colors={	//declaracion habitual
                firstColor: null,
                first1Color:null,
                first2Color:null,
                firstAlphaColor:null,
                firstHoverAlphaColor:null,
                secondColor:null,
                secondHoverColor:null,
                second1Color:null,
                second2Color:null,
                secondAlphaColor:null,
                secondHoverColor:null,
                mainBlueDark:null,
                mainBlue:null,
                mainBlueLight:null,
                mainPinkDark:null,
                mainPink:null,
                mainPinkLight:null,
                mainPurpleDark:null,
                mainPurple:null,
                mainPurpleLight:null,
                linkColor:null,
                textColor:null,
                mode:'DARK',
            //Si deseo agregar mas propiedades o métodos al finalizar con estos poner una coma
            //voy a agregar mas propiedades si le cambio mas los colores a el modo claro
            }  
    for (let i = 0; i < nameKey.length; i++) {
        colors[nameKey[i]]=getComputedStyle($html).getPropertyValue(colorsVariables[i]);
        
    }
    await animationPage(null,1);
    await timeout(2000);
    if($container.getAttribute("data-state")==="DARK"){//lo cambiamos a light mode
        $container.setAttribute("data-state","LIGHT");
        $container.innerHTML=`${dinamicIcons[3]}`
        for (let i = 0; i < nameKey.length; i++) {
            colors[nameKey[i]]=lightColor[i]
        } 
        colors.mode='LIGHT'
    }
    else if($container.getAttribute("data-state")==="LIGHT"){//
        $container.setAttribute("data-state","DARK");
        $container.innerHTML=`${dinamicIcons[2]}`
        for (let i = 0; i < nameKey.length; i++) {
            colors[nameKey[i]]=darkColor[i]
            colors.mode='LIGHT'
        } 
    }
    console.log(colors);
    console.log("Poniendo colores en el documento");
    for (let i = 0; i < nameKey.length; i++) {
        $html.style.setProperty(colorsVariables[i],colors[nameKey[i]]); 
    } 
    localStorage.removeItem("darkMode")
    localStorage.setItem("darkMode",JSON.stringify(colors));
    console.log(localStorage);
    await animationPage(null,0);
}
const darkLightModeStart=function(){
    const   stringStorage=localStorage.getItem("darkMode"),
            colors=JSON.parse(stringStorage);
    if(colors===null)return; //primera vez que visitamos el sitio
    if(typeof colors==="object"){
        for (let i = 0; i < nameKey.length; i++) {
            $html.style.setProperty(colorsVariables[i],colors[nameKey[i]]); 
        } 
    }
    const $container=document.querySelector(".lg-dk-mode");
    if(colors.mode==='DARK'){//modo oscuro
        $container.setAttribute("data-state","DARK");
        $container.innerHTML=`${dinamicIcons[2]}`
    }
    else{//MODO CLARO
        $container.setAttribute("data-state","LIGHT");
        $container.innerHTML=`${dinamicIcons[3]}`
    }
}
//Funcion para hacer la pantalla completa
const screenChange=function(){
    const $link=document.querySelector(".screen-change");
    if($link.getAttribute("data-state")==="FULLSCREEN"){
        $link.setAttribute("data-state","OUT-FULLSCREEN");
        $link.innerHTML=`${dinamicIcons[0]}`;
        document.documentElement.requestFullscreen().catch((e)=>{})
    }
    else if($link.getAttribute("data-state")==="OUT-FULLSCREEN"){ 
        $link.setAttribute("data-state","FULLSCREEN");
        $link.innerHTML=`${dinamicIcons[1]}`;
        document.exitFullscreen();
    }
}
//FUNCION PARA SABER EN QUE SECCION ESTAMOS
const p={ //objeto que vamos a estar utilizando tanto 
    $section:null,
    $caurosel:null,
    $content:null,
    actualPosition:null,
}
const scrollSpy=function(){ 
    let callback = (entries, observer) => { 
        entries.forEach((entry) => {
            if((entry.target.classList.contains("section"))&&(entry.isIntersecting===true)){
                p.$section=entry.target;
                p.$caurosel=p.$section.querySelector('.carousel');
                const topic=p.$section.getAttribute("data-topic");
                    $topic=document.querySelector(".topic > p");
                    $topicCon=document.querySelector(".topic");
                if(topic!=$topic.textContent){
                    $topicCon.style.setProperty("width","0px");
                    $topicCon.style.setProperty("padding","0");
                    setTimeout(() => {
                        $topic.textContent=topic;
                        $topicCon.style.setProperty("padding","0 1rem");
                        $topicCon.style.setProperty("width","60%")
                    }, 600);
                }
            }
        });
      };
    let options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.9,
      };
      let observer = new IntersectionObserver(callback, options);
      let target = document.querySelectorAll(".section");
      target.forEach(element => {
        observer.observe(element);
      });
}
//Funcion para mover la presentacion
const presentation=function(e){
	//console.log(e);
	//console.log(e.keyCode);//tipo de evento
	//los eventos del teclado como elementos de formulario
	//e.keyCode //es el código para poder identificarla en ASCII
	//e.key //despliega en caracteres el valor de la tecla, no es muy bueno utilizarlo porque puede variar con el dispositivo
    //e.ctrlKey //valores booleanos, me dice si se ha presionado
    //e.altKey	//valores booleanos, me dice si se ha presionado
	//e.shitfKey //valores booleanos, me dice si se ha presionado
	//para hacer atajos con el teclado, el evento debe ser keypress
    if(p.$caurosel.getAttribute("data-content")!="null"){// si queremos hacer el efecto carrusel
        //averiguamos en que ventana andamos actualmente
        const direction=p.$caurosel.getAttribute("data-direction"),
                        position=p.$caurosel.getAttribute("data-start");
        
        p.$content=p.$caurosel.querySelectorAll(".content");
        let total=p.$content.length;
        p.actualPosition=Number(p.$caurosel.getAttribute('data-content'));
        //hacemos el porcentaje de cuanto equivale un contenedor;
        let valueContainer,x=0,y=0;//x y y van a ser el valor de transition
        valueContainer=100/total;
        if(e.keyCode===37){ //IZQUIERDA
            console.log("Moviendose una atras");
            if(p.actualPosition>0){//si es diferente de 1 nos vamos uno atras
                p.actualPosition=p.actualPosition-1;
            }
        }
        if(e.keyCode===39){ //DERECHA
            if(p.actualPosition<total-1){//si es diferente a la ultima posicion movemos a la "derecha"
                p.actualPosition=p.actualPosition+1;
                console.log("Moviendose una adelante");
            }
        }
        if(direction==="row"){
            x=p.actualPosition*100;
            if(position==="start"){//hacia la derecha es adelante
                x=x*-1
            }
        }
        else if(direction==="column"){
            y=p.actualPosition*100;
            if(position==="start"){//hacia arriba es el regreso
                y=y*-1  
            }
        }
        if((x===0)&&(y===0)){
            p.actualPosition=0;
        }
        p.$caurosel.setAttribute('data-content',p.actualPosition);
        p.$caurosel.style.setProperty("transform",`translate(${x}%,${y}%)`);
    }
	
}

//keyup(cuando soltamos la tecla), keydown(exactamente cuando la presiono),keypress(mientras se tenga presionada la tecla)
//Funcion para el control de jugadores
//clase general para saber que jugador es
class player{ 
	constructor(playerName, numPlayer){ //si se necesitan pasar propiedades en una clase recurrimos al metodo contructor
        this.playerName= playerName; //nombre del jugador
		this.numPlayerESP= numPlayer; //numero de jugador segun ESP32
        this.numPlayer=0; //numero de jugador segun la web
        this.score=0; //puntos que lleva el jugador
	}
}
const players=[null]//arreglo para ir agregando o borrando jugadors
//prueba createNewPlayer(JSON.parse('{"numPlayer":2,"playerName":"Lalo"}'));
//funcion para agregar un nuevo jugador a la lista
const createNewPlayer=function(data){ //vamos a recibir un objeto JSON
    //con el objeto JSON recibido levanto la nueva clase en una nueva posicion del arreglo
    if(players[0]===null)players.pop();//primera vez que agregamos a jugadores
    players.push(new player(data.playerName,data.numPlayer));

    //Lo ponemos en la lista de Reglas de juego
    const $listContainer=document.querySelector("[data-section='9'] .players"),
            $playerContainer=document.createElement("div"),
            $containerTxt=document.createElement("p"),
            playersWeb=$listContainer.children.length;
    players[players.length-1].numPlayer=playersWeb; //le asignamos el numero que va a tener en web
    $playerContainer.setAttribute("data-num-player",playersWeb);
    $playerContainer.setAttribute("data-click",0);
    $playerContainer.classList.add("player-container");
    let aux='';
    if((playersWeb)<10)aux='0';//le agregamos un cero
    $containerTxt.textContent=`${aux}${playersWeb}.${data.playerName}`;
    $playerContainer.appendChild($containerTxt);
    $listContainer.appendChild($playerContainer);
    //Lo ponemos en la lista de loteria(donde se va a ver el score)
}
//prueba updatePlayer(JSON.parse('{"numPlayer":2,"playerName":"Lalopop"}'));
const updatePlayer=function(data){ //vamos a recibir un objeto json
    const $listContainer=document.querySelector("[data-section='9'] .players");
    //verificamos de que jugador se trata
    if(players[0]!=null){//osea que ya agregamos unque sea un usuario
        players.forEach(function(el,index){ 
            if(el.numPlayerESP===data.numPlayer){
                //actualizamos nombre de usuario
                const $playerContainer=$listContainer.querySelector(`[data-num-player="${el.numPlayer}"]`);
                let aux='';
                if(el.numPlayerESP<10)aux='0';//le agregamos un cero
                $playerContainer.querySelector("p").textContent=`${aux}${el.numPlayer}.${data.playerName}`;
            }
        });
    }
}
/*
Para crear jugadores
createNewPlayer(JSON.parse('{"numPlayer":3,"playerName":"Gerardo"}'));
createNewPlayer(JSON.parse('{"numPlayer":6,"playerName":"Josue"}'));
createNewPlayer(JSON.parse('{"numPlayer":1,"playerName":"Pedro"}'));
createNewPlayer(JSON.parse('{"numPlayer":20,"playerName":"Eder Urban"}'));
createNewPlayer(JSON.parse('{"numPlayer":21,"playerName":"Mijhal"}'));
createNewPlayer(JSON.parse('{"numPlayer":22,"playerName":"Yohali"}'));
createNewPlayer(JSON.parse('{"numPlayer":23,"playerName":"Natalia"}'));
createNewPlayer(JSON.parse('{"numPlayer":24,"playerName":"Zuno"}'));
createNewPlayer(JSON.parse('{"numPlayer":25,"playerName":"Daniela"}'));
createNewPlayer(JSON.parse('{"numPlayer":26,"playerName":"Arian"}'));
createNewPlayer(JSON.parse('{"numPlayer":27,"playerName":"Mario"}'));

*/

//funcion para borrar jugadores
const deletePlayer=function($container=null,action,position=null){
    console.log($container);
    if(action===true){ //procedemos a eliminar al contenedor, le mandamos informacion al ESP32 y que le llegue 
        let $aux,issue;
        const $listContainer=document.querySelector("[data-section='9'] .players");
        if($container!=null){ //implica que el que va a borrar el elemento es el boton
            $aux=$container.parentElement;
        }
        else{ //se nos notifico que se desconecto un dispositivo
            //hacer la busqueda desde aqui 
            $aux=$listContainer.querySelector(`[data-num-player="${position}"]`);
        }
        const $fatherContainer=$aux,
                numPlayer=Number($fatherContainer.getAttribute(`data-num-player`)),
                auxArray=[];
        $fatherContainer.remove();// quitamos el elemento html
        players.forEach(function(el,index){ 
            if(el.numPlayer!=numPlayer){//siempre y cuando sea 
                auxArray.push(el);
            }
            else{ //es el jugador que voy a borrar, voy a enviar WEBSOCKET que se borre

            }
        });
        players.splice(0,players.length);
        auxArray.forEach(function(el,index){ 
            players.push(el);
        });
        for (let i = 0; i < players.length; i++) {
            let aux='';
            if(i+1<10)aux='0';//le agregamos un cero
            $listContainer.children[i+1].querySelector("p").textContent=`${aux}${i+1}.${players[i].playerName}`;
            $listContainer.children[i+1].setAttribute("data-num-player",i+1);
            players[i].numPlayer=i+1;
        }
    }
    if(action===false){
        if($container.getAttribute("data-click")==='0'){//habilitamos el boton de borrar
            const $button=document.createElement("div");
                $button.classList.add("delete-player-icon");
                $button.innerHTML=`${dinamicIcons[4]}`
                $container.setAttribute("data-click",1)
            $container.appendChild($button);    
        }
        else{ //quitamos el boton de borrar
            const $button=$container.querySelector(".delete-player-icon");
            $button.remove();
            $container.setAttribute("data-click",0);
        }
    }


    //si si lo borramos asignar un nuevo arreglo menos esa posicion, 
    //borramos todos los valores del original, y del que creamos ir poniendo
    //nuevamente los valores 
}
//funcion en caso de que uno de los jugadores alla perdido la conexion

const cardsControl=function($container){
    
}


// deletePlayer(JSON.parse('{"numPlayer":2'));
const playerConnectionLost=function(data=null,issue=null){//data es el JSON que recibimos y el issue es el asunte que queremos que envie
    //solo recibimos que posicion era la que tenia ese jugador, encontramos el arreglo, borramos el elemento del html
    //volvemos a asignarle numeros en la web y cambiamos textContent de p
    if(data!=null){ //el ESP32 nos notifico que un dispositivo se desconecto
        //buscamos el dispositivo que se desconecto y lo borramos

    }



}



//funcion para agregar puntaje de jugadores


//funcion para el estado de conexion de red y websocket
const conectionOffline=function(){
    const   $container=document.querySelector(".lost-recover-conection"),//rescato el elemento html
            $textContent=document.createElement("p");//creo una etiqueta p
    $textContent.textContent="Conexion perdida"//le pongo un mensaje a la etiqueta p
    $container.replaceChild($textContent,$container.firstElementChild); //remplazo la etiqueta p que ya tiene
    $container.classList.add("red-color");//le agrego una clase para que sea visible
    setTimeout(()=>{//creo un settimeout para que despues de 3 segundos desaparezca el icono
        $container.classList.remove("red-color")
    },3000); 
    
}
const conectionOnline=function(){
    const   $container=document.querySelector(".lost-recover-conection"),
            $textContent=document.createElement("p");
    $textContent.textContent="Conexion recuperada"
    $container.replaceChild($textContent,$container.firstElementChild); 
    $container.classList.add("green-color")
    setTimeout(()=>{
        $container.classList.remove("green-color")
    },3000); 
}


//funcion para enviar la carta que esta actualmente para que no puedan dar click en tarjetas que no son




document.addEventListener("DOMContentLoaded",()=>{
    darkLightModeStart();
    animationPage(null,0);
    setTimeout(()=>{
        $body.addEventListener("click",(e)=>{
            if((e.target.matches(".screen-change"))||(e.target.matches(".screen-change *"))){
                screenChange();
            }
            if((e.target.matches(".lg-dk-mode"))||(e.target.matches(".lg-dk-mode *"))){
                darkLightMode(e.target);
            }
            if(e.target.matches(".button-container > button")){
                animationPage(null,0);
            }
            if(e.target.matches("[data-section='9'] .player-container")){ //lista de jugadores de reglas de juego
                deletePlayer(e.target,false);
            }
            if(e.target.matches(".delete-player-icon")||e.target.matches(".delete-player-icon *")){ //lista de jugadores de reglas de juego
                deletePlayer(e.target,true);
            }
            
        });
    },2000); //el 1000 es tiempo en milisegundos, es el tiempo de retardo que va a ejecutar las instrucciones
    //size screen listener
    scrollSpy();
    window.addEventListener("resize",(e)=>{
       // mobileNavConstructor(window.innerWidth,mobileNav[0]);  
    });
    document.addEventListener("keydown",(e)=>{
        presentation(e);
    });
    
})