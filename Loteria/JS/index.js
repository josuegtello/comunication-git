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
//CREAR OBJETO DE LAS PREGUNTAS
const questions=[
            {
                numQuestion:1,
                question:'Esta competencia permite a las personas establecer un marco de interacción adaptado a coordenadas espaciotemporales específicas, reflejando significados que, en ocasiones, están enraizados en un complejo sistema de restricciones sociales relacionadas con el género, la edad y el trasfondo cultural y social de los individuos.',
                options:['Proxémica',
                        "Pragmática",
                        "Sociocultural"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 1'
            },
            {
                numQuestion:2,
                question:'¿Cuál de estas no es una competencia ejecutiva principal?',
                options:['Control de entonación', //siempre la primera va a ser el aleatorio
                        "Memoria de Trabajo",
                        "Flexibilidad Cognitiva o Mental"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z"/>
                        </svg>`,
                nameTarget:'Cual no pertenece 1'
            },
            {
                numQuestion:3,
                question:'Antes de Bachman ¿cuál de los siguientes autores hacían referencia a la competencia pragmática implícitamente?',
                options:['Swain (1980)',
                        "Huxley (1984)",
                        "Hayek (1986)"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/>
                        </svg>`,
                nameTarget:'Nombra el Autor 1'
            },
            {
                numQuestion:4,
                question:'¿Cuál de las siguientes son consecuencias (presentadas) de carecer de la competencia sociocultural?',
                options:['Resolución de conflictos interculturales',
                        "Desconocimiento de reglas gramaticales de la lengua materno",
                        "Ninguna"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M160-360v-80h400v80H160Zm0-160v-80h640v80H160Z"/>
                        </svg>`,
                nameTarget:'Nombra la consecuencia 1'
            },
            {
                numQuestion:5,
                question:`Según el marco común europeo de referencia para la lengua <br>
                La competencia ________ se compone de la competencia discursiva, la funcional y la organizativa.`,
                options:['Pragmática',
                        "Proxenetica",
                        "Kinestitetica"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Z"/>
                        </svg>`,
                nameTarget:'Completa la competencia 1'
            },
            {
                numQuestion:6,
                question:'La competencia _______ es esencial al momento de escuchar, ya que se trata de un sistema de reglas que permite inferir expresiones posibles y comprende aspectos vinculados con la lectura, la semiótica.',
                options:['Interpretativa',
                        "Interpersonal",
                        "Persuasiva"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 2'
            },
            {
                numQuestion:7,
                question:'¿Cuál de las siguientes opciones pertenece a las cuatro ejemplos de las  competencias ejecutivas presentadas?',
                options:['Capacidad de Planificación',
                        "Flexibilidad Metacognitiva",
                        "Proceso conciliatorio de la lengua"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra el ejemplo 1'
            },
            {
                numQuestion:8,
                question:'La competencia ________ es la capacidad para usar todo el cuerpo para expresar ideas y sentimientos y la facilidad en el uso de las propias manos para producir o transformar cosas.',
                options:['Kinestésica',
                        "Proxenetica",
                        "Pragmática"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 3'
            },
            {
                numQuestion:9,
                question:'“Podemos definir la competencia ____________ como el conocimiento de las reglas sociolingüísticas y pautas culturales que permiten que las intervenciones lingüísticas sean adecuadas a los contextos”.',
                options:['Sociocultural',
                        "Paralingüística",
                        "Proxémica"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M280-320h80v-480h-80v480ZM240-80q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h440v640H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-640h80v720H240Z"/>
                        </svg>`,
                nameTarget:'Define la competencia 1'
            },
            {
                numQuestion:10,
                question:'El componente de Conocimientos, Habilidades y Estrategias para la Comprensión Lectora es crucial para la competencia _______.',
                options:['Lingüística',
                        "Paralingüística",
                        "Proxémica"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 4'
            },
            {
                numQuestion:11,
                question:`Se enfoca en el plano del discurso o texto, involucrando procedimientos con normas inherentes. <br>
                Las normas se manifiestan cuando el hablante asigna juicios de apropiación según el contexto y la situación concreta.<br>
                Pertenece a la competencia.`,
                options:['Competencia Textual (Nivel del Sentido)',
                        "Competencia Lingüística Particular (Nivel del Significado)",
                        "Saber Elocucional (Nivel de la Designación)"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'A que competencia pertenece 1'
            }, 
            {
                numQuestion:12,
                question:'_________ introduce el concepto de competencia lingüística que, a pesar de ser una postura contrastante, nos ayuda a definir que compone a la competencia comunicativa y como es que se entrelazan las competencias.',
                options:['Noam Chomsky',
                        "Fernando Poyatos",
                        "Cesteros"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/>
                        </svg>`,
                nameTarget:'Nombra el autor 2'
            },
            {
                numQuestion:13,
                question:'El paralenguaje, uno de los tres sistemas que componen la comunicación, se ubica junto con ____________en la denominada "estructura triple básica”.',
                options:['El componente verbal y la kinestésica',
                        "El componente lingüístico y paralingüístico",
                        "El componente cognitivo y metaverbal"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Z"/>
                        </svg>`,
                nameTarget:'Nombra el Componente 1'
            },
            {
                numQuestion:14,
                question:'La competencia __________ según Hymes implica el conjunto de habilidades y conocimientos que poseen los hablantes de una lengua o comunidad lingüística específica, permitiéndoles comunicarse de manera competente en esa lengua',
                options:['Lingüística',
                        "Intra-cultural",
                        "Pragmática"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 5'
            },
            {
                numQuestion:15,
                question:'El origen del estudio de la ______ está relacionado con los estudios que los etólogos habían realizado acerca de la importancia de la distribución espacial en las interacciones entre animales.',
                options:['Proxémica',
                        "Lingüística",
                        "Pragmática"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 6'
            },
            {
                numQuestion:16,
                question:'Las ____________ se refieren a las habilidades cerebrales, procesos cognitivos que permiten la adaptación a situaciones nuevas y no rutinarias.',
                options:['Competencias ejecutivas',
                        "Competencias pragmáticas",
                        "Competencias socioculturales"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 7'
            },
            {
                numQuestion:17,
                question:'La competencia ________ se entiende como un tejido complejo y multifacético que abarca diversas competencias complementarias, cada una contribuyendo de manera única al acto comunicativo.',
                options:['Competencia comunicativa',
                        "Competencia proxémica",
                        "Competencia pragmática"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 8'
            },
            {
                numQuestion:18,
                question:'Disciplina cuyo objeto de estudio es usar el lenguaje según la relación entre enunciado, contexto e interlocutores. Se interesa por analizar cómo los hablantes producen e interpretan enunciados en contexto.',
                options:['Competencia Pragmática',
                        "Competencia sociocultural",
                        "Competencia Paralingüística"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 9'
            },
            {
                numQuestion:19,
                question:'La carencia de __________ se manifiesta cuando una persona o grupo muestra dificultades para comprender, interactuar o adaptarse eficazmente en situaciones sociales y culturales.',
                options:['Competencia sociocultural',
                        "Competencia metalingüística",
                        "Competencia kinestésica"],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 10'
            },
            {
                numQuestion:20,
                question:'Las competencias _______ desempeñan un papel crucial en la regulación y dirección de nuestro comportamiento, guiándonos hacia metas y facilitando la adaptación a situaciones cambiantes',
                options:['Ejecutivas',
                        "Paralingüística",
                        "Metalingüística "],
                svgIcon:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-600q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-380q-38 0-73 9t-67 27Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-490q-38 0-73 9.5T560-454Zm-40 176q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q47-23 96.5-35.5T260-800q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 101.5 12.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Z"/></svg>`,
                nameTarget:'Nombra la competencia 11'
            }
        ]
const numQuestions=questions.length;
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
        $button.classList.add("opacity-0");
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
            
        } 
        colors.mode='DARK'
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

//Funciones para el control de jugadores
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
const $player=new player("",0)//creamos a nuestro objeto jugador
//prueba updatePlayer(JSON.parse('{"numPlayer":2,"playerName":"Lalopop"}'));
const userName=function(){
    const $input=document.querySelector(".username-container > input");
    if($player.playerName!=$input.value){// si es diferente actualizamos 
        $player.playerName=$input.value;
        //Guardar datos del jugador en el local STORAGE ""PENDIENTE"""
        localStorage.removeItem("player")
        localStorage.setItem("player",JSON.stringify($player));
        // Enviar dato del jugador al master **PENDIENTE**
        const callBackData={
            issue:'UPDATE-USER',
            playerName:$player.playerName,
        }
        console.log(JSON.stringify(callBackData));
        connection.send(JSON.stringify(callBackData));
    }
    console.log($player)
    
}


//funcion en caso de que uno de los jugadores alla perdido la conexion **PENDIENTE**



//funciones para la loteria
const cardSelected=async function($container,className){//obtenemos el contenedor 
    const $cortain=document.querySelector('[data-slide="1"] > .cortain'),
            $titleTopic=$cortain.querySelector('.title-question'),
            $questionContainer=$cortain.querySelector('.question'),
            $optionsContainer=$cortain.querySelectorAll('.options > .li-container'),
            positionCard=Number($container.getAttribute('data-num-card')),
            $fatherContainer=document.querySelector('.cards-container');
    console.log(positionCard,$cardsObj.actualViewing);

    if(positionCard===$cardsObj.actualViewing){/// Es la que se visualiza ahorita
        if($container.getAttribute("data-click")==="0"){ //se despliega la pregunta
            $fatherContainer.classList.add('pointer-events-none');
            $container.classList.add('card-selected');
            await timeout(650);//esperamos 1 segundo
            $container.classList.remove('card-selected');
            $container.classList.add(className);
            $container.setAttribute("data-click","1");
            $titleTopic.textContent=questions[positionCard].nameTarget;
            $questionContainer.innerHTML=questions[positionCard].question;
            let random=[];
            random=numerosAleatorios(0,3);
            let i=0;
            console.log(random)
            $optionsContainer.forEach(element => {
                const $textAnswer=element.querySelector('.text');
                console.log(element)
                element.setAttribute('data-num-option',random[i]);
                $textAnswer.textContent=questions[positionCard].options[random[i]];
                i++
            });
            $cortain.setAttribute('data-card',$container.getAttribute('data-card'))
            await timeout(300);//esperamos 1 segundo
            $cortain.classList.remove('opacity-0','pointer-events-none');
            $fatherContainer.classList.remove('pointer-events-none');
        }
        else{
            $container.classList.remove(className);
            $container.setAttribute("data-click","0");
            $optionsContainer.forEach(element => {
                if(element.classList.contains('option-selected')){
                    element.classList.remove('option-selected')
                }
            });
            $cortain.classList.add('opacity-0','pointer-events-none');
        }
    }
    else{//No le dimos click a la carta que se esta visualizando en este momento
        $container.classList.add('wrong-card');
        await timeout(1100);//esperamos 1 segundo
        $container.classList.remove('wrong-card');

    }
    
}

//Funcion para poder inicializar las tarjetas
let $cardsObj={
    positionCard:null,
    cardsViewing:[],
    cardsTries:[0,0,0,0,0,0,0,0,0],
    cardsUsed:8,
    actualViewing:0, // me dice que posicion de la tarjeta en pantalla se esta viendo en la web

};

const startCards=function(){
    const   stringStorage=localStorage.getItem("cards"),
            $cards=document.querySelectorAll("[data-section='1'] [data-num-card]");
    console.log($cards)    
    if(JSON.parse(stringStorage)===null){ //primera vez que visitamos el sitio
        //creamos un arreglo aleatorio, de n posiciones, depende cuantas preguntas tenga
        $cardsObj.positionCard=numerosAleatorios(0,numQuestions);
        console.log($cardsObj)
        console.log($cardsObj.positionCard);
        localStorage.removeItem("cards")
        localStorage.setItem("cards",JSON.stringify($cardsObj));
    }
    else{
        $cardsObj=JSON.parse(stringStorage)
    }
    for (let j = 0; j < 9; j++) {
        $cardsObj.cardsViewing.push($cardsObj.positionCard[j]);
    }
    let i=0
    $cards.forEach(element => {
        const $svgContainer=element.querySelector('.img-container-card'),
                $txtContainer=element.querySelector('.text-container');
        element.setAttribute("data-num-card",$cardsObj.cardsViewing[i])
        $svgContainer.innerHTML=questions[$cardsObj.cardsViewing[i]].svgIcon;
        $txtContainer.textContent=questions[$cardsObj.cardsViewing[i]].nameTarget;
        element.setAttribute('data-tries',$cardsObj.cardsTries[i]);
        if($cardsObj.cardsTries[i]===-1){//la tarjeta ya se habia escogido
            element.classList.add('pointer-events-none');
            element.classList.add('opacity-0');
        }
        i++
    });
}

const restartCards=function(){
    //$cardsObj=null;
    localStorage.removeItem("cards");
    //localStorage.removeItem("player");
    $player.score=0;
    localStorage.setItem("player",JSON.stringify($player));
}
const startPlayer=function(){
    const stringStorage=localStorage.getItem("player")
    //localStorage.removeItem("player")
    //localStorage.setItem("player",JSON.stringify($player));
    if(JSON.parse(stringStorage)!=null){ //primera vez que entramos
        const $input=document.querySelector(".username-container > input");
        const objAux=JSON.parse(stringStorage);
        $input.value=objAux.playerName;
        $player.numPlayer=objAux.numPlayer;
        $player.playerName=objAux.playerName;
        $player.score=objAux.score;
        /*Enviamos nuevamente nuestros datos **PENDIENTE**/
    }
}
const restartGame=function(){
    restartCards();
    localStorage.removeItem("player");
}
//para verificar que la respuesta fue correcta
const verifyCard=async function(e){
    const $options=document.querySelectorAll('.li-container'),
        $container=document.querySelector('.questions-card'),
        $modalButton=document.querySelector('.close-modal-card'),
        $card=document.querySelector(`.cards [data-card='${Number(e.target.closest(".cortain").getAttribute('data-card'))}'`)
    $container.classList.add('pointer-events-none');
    $modalButton.classList.add('pointer-events-none');
    let $yourAnswer=null,
        $correctAnswer=null;
    $options.forEach(element => {
        if(element.classList.contains('option-selected')){
            $yourAnswer=element
        }
        if(element.getAttribute('data-num-option')==='0'){ //es el insciso correcto
            $correctAnswer=element
        }
        element.classList.add("answer-verifying");
    });
    if($yourAnswer===null){
        $options.forEach(element => {
            element.classList.remove("answer-verifying");
        });
        $container.classList.remove('pointer-events-none');
        $modalButton.classList.remove('pointer-events-none');
        return;
    }
    let tries=Number($card.getAttribute('data-tries'));
    if($yourAnswer===$correctAnswer){//tu respuesta a sido correcta
        $card.classList.add('pointer-events-none')
        $yourAnswer.classList.remove('option-selected');
        $yourAnswer.classList.add('correct-answer');     
        $player.score=$player.score + (1000 - (200*tries));
        //enviamos datos al ESP32 para actualizar score
        await timeout(800);
        $yourAnswer.classList.remove('correct-answer');
        cardSelected($card,"flip-effect-active");
        await timeout(1100);
        $card.classList.add('opacity-0');
        console.log($player);
        tries=-1;
        const $cards=document.querySelectorAll('[data-card]');
        console.log($cards)
        let youWin=true;
        $cards.forEach(element => {
            if(!element.classList.contains('pointer-events-none')){
                youWin=false;
            }
        });
        if(youWin===true){ //se han ocultado todas las tarjetas tu ganas
            $body.classList.add('pointer-events-none');//anulamos todos los clicks
            animationPage(null,1);//cerramos la cortina
            await timeout(2000);
            const $textContainer=document.querySelector(".container-animation > .button-container p"),
                    $containerTxt=document.querySelector(".container-animation > .button-container");
            $textContainer.innerHTML=`Has Terminado el juego. <br>Tu score:<b>${$player.score}</b>`;
            $containerTxt.classList.remove('opacity-0'); 
            restartCards(); //reiniciamos cards, y jugador pasamos su score a 0
            return;
        }
        
        
        //Guardar datos del jugador en el local STORAGE 
        localStorage.setItem("player",JSON.stringify($player));
        // Enviar dato del jugador al master **PENDIENTE**
        const callBackData={
            issue:'UPDATE-USER',
            numPlayerESP:$player.numPlayerESP,
            score:$player.score,
        }
        console.log(JSON.stringify(callBackData));
        connection.send(JSON.stringify(callBackData));  
    }
    else{//la respuesta es incorrecta, hacemos lo mismo que cuando cerramos la modal, solo que cambiamos la tarjeta
        // y aumentamos los tries para que el puntaje valga menos
        $yourAnswer.classList.remove('option-selected');
        $yourAnswer.classList.add('wrong-answer');
        await timeout(800);
        $yourAnswer.classList.remove('wrong-answer');
        tries++;
        $cardsObj.cardsUsed++; //aumentamos uno para no utilizar esa posicion mas
        if($cardsObj.cardsUsed>=numQuestions){ //se considera juego perdido, ya ocupaste todas las tarjetas
            //ejecutar linea para que salga la cortina y el mensaje diga que has perdido **PENDIENTE**
            $body.classList.add('pointer-events-none');//anulamos todos los clicks
            console.log('Se usaron todas las tarjetas');
            $player.score=0; //le quitamos el score al jugador 
            animationPage(null,1);//cerramos la cortina
            await timeout(2000);
            const $textContainer=document.querySelector(".container-animation > .button-container p"),
                    $containerTxt=document.querySelector(".container-animation > .button-container");
            $textContainer.textContent='Ha utilizado todas sus cartas. Ha perdido';
            $containerTxt.classList.remove('opacity-0'); 
            restartCards(); //reiniciamos cards, y jugador pasamos su score a 0
            return;
        }
        else{
            //obtenemos la posicion de la tarjeta en la que estamos
            const cardNumber=Number($card.getAttribute('data-card')),
                    arrayAux=$cardsObj.positionCard,
                    arrauAux1=$cardsObj.cardsViewing;
            console.log($card)
            console.log(arrauAux1,arrayAux);
            console.log(cardNumber);
            // replace the third and fourth elements with "a" and "b"
            let aux=arrayAux[cardNumber-1];
            arrayAux[cardNumber-1]=arrayAux[$cardsObj.cardsUsed];
            arrayAux[$cardsObj.cardsUsed]=aux
            arrauAux1.splice(0,arrauAux1.length);
            for (let j = 0; j < 9; j++) {
                arrauAux1.push(arrayAux[j]);
            }
            $cardsObj.positionCard=arrayAux;
            $cardsObj.cardsViewing=arrauAux1;
            //PONEMOS LA NUEVA TARJETA
            const positionQuestion=arrayAux[cardNumber-1]
            $card.setAttribute('data-num-card',positionQuestion);
            const $svgContainer=$card.querySelector('.img-container-card'),
                $txtContainer=$card.querySelector('.text-container');
            $svgContainer.innerHTML=questions[positionQuestion].svgIcon;
            $txtContainer.textContent=questions[positionQuestion].nameTarget;
            console.log(`la pregunta que se visualizara es ${positionQuestion}`);
            console.log(questions[positionQuestion]);
        }
        cardSelected($card,"flip-effect-active");
    }
    //almacenamos los intentos de cada tarjeta
    $card.setAttribute('data-tries',tries);
    const cardNumber=Number($card.getAttribute('data-card'))
    $cardsObj.cardsTries[cardNumber-1]=tries;
    $options.forEach(element => {
        element.classList.remove("answer-verifying");
    });
    await timeout(500)
    $container.classList.remove('pointer-events-none');
    $modalButton.classList.remove('pointer-events-none');
    //actualizamos local storage
    console.log($player)
    localStorage.removeItem("cards")
    localStorage.setItem("cards",JSON.stringify($cardsObj));
}
const optionSelected=function($container){
    const $options=document.querySelectorAll('.li-container')
    $options.forEach(element => {
        if($container!=element){
            if(element.classList.contains('option-selected')){
                element.classList.remove('option-selected')
            }
        }
    });
    if(!$container.classList.contains('option-selected')){
        $container.classList.add('option-selected')
    }
    else{
        $container.classList.remove('option-selected')
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const numerosAleatorios=function(inicio,final){ //arreglo[n]
	let size=final-inicio;
	let aleat;
    const ref=[]
	for(let i=0;i<size;i++){
		aleat=inicio+getRandomInt(size);
		let posiciones=0;
		while(true){
			for(let j=0;j<=i;j++){
				if(ref[j]==aleat){
					posiciones++;
					aleat=inicio+getRandomInt(size);
                }
			}
			if(posiciones==0)break;
			else if(posiciones>0){
				posiciones=0;
			}
		}
		ref.push(aleat);
	}
    return ref
}
const warningMesages=async function(status){
    const $container=document.querySelector(".warning-container");
            $TextC=$container.firstElementChild;
    $TextC.textContent=status;
    $container.style.setProperty("transform","translateY(0%)");
    await timeout(4000);
    $container.style.setProperty("transform","translateY(100%)");
}
//CONNECTION FUNCTIONS
//NETWORK FUNCTION
const connectionOffline=function(){
    warningMesages('Conexión wifi recuperada');
}
const connectionOnline=async function(){
    warningMesages('Conexión wifi pérdida');
}
//WEBSOCKET FUNCTIONS

//WEBSOCKET CONNECTIONS
// Declaramos la variable global de la conexión
// Inicializamos la variable con  readyState = WebSocket.CLOSED para evitar reescribir código
let connection = {
    readyState: WebSocket.CLOSED
}
// Todos los listener es mejor ponerlos en funciones por separado (buena práctica)
// por si necesitas usarlas en otros lados
const handleOnMessage=function(event) {
    let data=JSON.parse(event.data);
    console.log(event); //tengo que ver que velga tiene este evento
    if(data.issue==="ROL_COMMUNICATION"){ //mandamos que somos un ESCLAVO
        //si nos pide que ROL DESEMPENIAMOS ESTMAMOS CONECTADOS.
        const callBackData={
                issue:'SLAVE',
        }
        //Le mando los datos al ESP32 con el usunto;
        connection.send(JSON.stringify(callBackData));
    }
    else if(data.issue==="MASTER_DONT_HAVE_CONNECTION_YET"){// el maestro todavia no se conecta
        warningMesages('Presentacion todavia no se ha conctado, espere a que se conecte.');
    }
    else if(data.issue==="PORT_COMMUNICATION"){ //nos manda el puerto de comunicacion;
        $player.numPlayerESP=data.port;
    }
    else if(data.issue==="SLAVE_ACTUAL_VIEW"){ //nos manda en que 
        $cardsObj.actualViewing=data.actualView;
    }
    else if(data.issue==="LOST_MASTER_CONNECTION"){ //se perdio comunicacion con el principal
        warningMesages('Conexión pérdida con la presentación');
    }

}
let firstConnection=true;//estara en true solo una vez
const handleOnOpen=function(event) {
    console.clear(); //limpiamos la pantalla en la conexion
    const callBackData={
        issue:'HELLO_WORLD',
    }
    console.log(JSON.stringify(callBackData));
    connection.send(JSON.stringify(callBackData));
    let txtMessage;
    if(firstConnection===true){
        txtMessage='Conexión exitosa'
    }
    else{
        txtMessage='Conexión recuperada';
    }
    firstConnection=false;
    warningMesages('Conexión exitosa');
}
const handleOnClose=function(event) {
    warningMesages('Conexión pérdida con el servidor');
    // Tratamos de conectar nuevamente el websocket
    connectWebSocket();
}
const handleOnError=function(event) {
    console.log("WebSocket error: ", event);
    warningMesages('Error en comunicación');
}

// Función que inicializa el WebSocket
const connectWebSocket=function(){
    // no se hace nada si se esta conectado o ya esta conectado
    if(connection.readyState === WebSocket.CONNECTING || connection.readyState === WebSocket.OPEN) return;
    connection=new WebSocket(`ws://${location.hostname}:81/`);
    connection.debug = true;
    // creo que esta propiedad no sirve 
    connection.addEventListener("message", handleOnMessage);
    connection.addEventListener("open", handleOnOpen);
    connection.addEventListener('close', handleOnClose);  
    connection.addEventListener("error", handleOnError);
}
// Hacemos conexión al webSocket
 

document.addEventListener("DOMContentLoaded",()=>{
    darkLightModeStart();
    //restartGame();
    startPlayer();
    startCards();
    animationPage(null,0);
    setTimeout(()=>{
        $body.addEventListener("click",(e)=>{
            if((e.target.matches(".lg-dk-mode"))||(e.target.matches(".lg-dk-mode *"))){
                darkLightMode(e.target);
            }
            if(e.target.matches(".card[data-action='click']")||e.target.matches(".card[data-action='click'] *")){ //lista de jugadores de reglas de juego
                cardSelected(e.target.closest(".card"),"flip-effect-active");
            }
            if(e.target.matches(".close-modal-card")||e.target.matches(".close-modal-card *")){ //lista de jugadores de reglas de juego
                const numCard=Number(e.target.closest(".cortain").getAttribute('data-card'));
                cardSelected(document.querySelector(`.cards [data-card='${numCard}']`),"flip-effect-active");
            }
            if((e.target.matches(".li-container"))||(e.target.matches(".li-container *"))){
                optionSelected(e.target.closest(".li-container"));
            }
            if(e.target.matches(".questions-card > button")){
                verifyCard(e);
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
    connectWebSocket();
    
})