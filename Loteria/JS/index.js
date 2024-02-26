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
    "#171717", //1
    "#101010", //2
    "#292929", //3
    "#171717c8", //4
    "#171717c8", //5
    "#d6d0d0", //6
    "#d6d0d0", //7
    "#aea7a7", //8
    "#f1f1f1", //9
    "#d6d0d0cb", //10
    "#d6d0d0cb", //11
    "#004697", // 12
	"#3496ff", //13
	"#8bbdf2", //14
	"#e71484", //15
	"#ff1493", //16
	"#ffb6c1", //17
	"#4d3dff", //18
	"#c2bcff", //19
	"#bdb7ff", //20
    "#d6d0d0", //21
    "#d6d0d0", //22
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

//FUNCION PARA SABER EN QUE SECCION ESTAMOS
const p={ //objeto que vamos a estar utilizando tanto 
    $section:null,
    $caurosel:null,
    $content:null,
    actualPosition:null,
}
/*
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
*/
//Funcion para el control de jugadores
//clase general para saber que jugador es
class player{ 
	constructor(playerName, numPlayer){ //si se necesitan pasar propiedades en una clase recurrimos al metodo contructor
        this.playerName= playerName; //nombre del jugador
		this.numPlayerESP= numPlayer; //numero de jugador segun ESP32
        this.numPlayer=0; //numero de jugador segun la web
        this.score=0; //puntos que lleva el jugador
        this.issue=null;
    }
}
const $player=new player("default",0)//creamos a nuestro objeto jugador
//prueba updatePlayer(JSON.parse('{"numPlayer":2,"playerName":"Lalopop"}'));
const userName=function(){
    const $input=document.querySelector(".username-container > input");
    if($player.playerName!=$input.value){// si es diferente actualizamos 
        $player.playerName=$input.value
        $player.issue="UPDATE-USER"
        //funcion que envie el objeto en general
    }
    console.log($player)
}
const updatePlayer=function(){ //cuando detectemos que el jugador le cambia el nombre a su usuario
    
}

//funcion en caso de que uno de los jugadores alla perdido la conexion



//funciones para la loteria
const cardSelected=function($container,className){//obtenemos el contenedor 
    console.log($container);
    if($container.getAttribute("data-click")==="0"){
        $container.classList.add(className);
        $container.setAttribute("data-click","1");
    }
    else{
        $container.classList.remove(className);
        $container.setAttribute("data-click","0");
    }
}



//para verificar que la respuesta fue correcta
const verifyCard=async function(){

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
            if((e.target.matches(".lg-dk-mode"))||(e.target.matches(".lg-dk-mode *"))){
                darkLightMode(e.target);
            }
            if(e.target.matches(".card[data-action='click']")||e.target.matches(".card[data-action='click'] *")){ //lista de jugadores de reglas de juego
                cardSelected(e.target.closest(".card"),"flip-effect-active");
            }
        });
    },2000); //el 1000 es tiempo en milisegundos, es el tiempo de retardo que va a ejecutar las instrucciones
    //size screen listener
    window.addEventListener("resize",(e)=>{
       // mobileNavConstructor(window.innerWidth,mobileNav[0]);  
    });
    document.addEventListener("keyup",(e)=>{
        userName();
    });
    
})