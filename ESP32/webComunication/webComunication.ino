#include <WiFi.h>
#include <ESPAsyncWebServer.h>//Libreria para crear un servidor HTTP
#include <WebSocketsServer.h> //Libreria para gestionar el servidor web socket
#include <SPIFFS.h>//libreria para guardar archivos en el ESP32
#include <ArduinoJson.h>//Libreria para enviar y decodificar JSON
#include <Ticker.h>
#define Led 4

void enviarDatosSensor();//funcion dedicada a enviar datos al cliente

Ticker timer; //libreria utilizada para ejecutar una funcion cada cierto tiempo

AsyncWebServer server(80); //puerte del servidor
WebSocketsServer websockets(81); //puerto de comunicacion web-socket
struct serverMasterSlave
{
    int masterPortComunication; //no cambiante, se define una vez, el maestro va a ser la web Principal
    int slavePortClient; //util cuando queramos mandarle un dato especifico a un cliente
    String issue;
    String jsonData;
};
serverMasterSlave webSocketData;

void notFound(AsyncWebServerRequest *request) //en caso de acceder a un lugar no planeado enviamos 404, estado de error
{
  request->send(404, "text/plain", "Página no encontrada");
}


void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t length) { //funcion par gestionar los web-sockets

  switch (type){
    case WStype_DISCONNECTED: //en caso de que un cliente se desconecte
      Serial.printf("[%u] ¡Desconectado!\n", num);
        //le mandamos al master que se ha desconectado el usuario de tal puerto
        if(webSocketData.masterPortComunication!=num){//si no es el master
            if(webSocketData.masterPortComunication!=-1){//el maestro ya esta registrado, le enviamos data
                String JSON_Data = "{\"issue\":";//creamos nuestro JSON
                JSON_Data +="\"LOST_SLAVE_CONNECTION\",";
                JSON_Data = "\"port\":";

                JSON_Data += "\"}";
                websockets.sendTXT(num, JSON_Data);
            }
        }
        else{//si es el masster
            String JSON_Data = "{\"issue\":";//creamos nuestro JSON
            JSON_Data +="\"LOST_MASTER_CONNECTION\",";
            JSON_Data = "\"port\":";
            JSON_Data += num;        
            JSON_Data += "\"}";
            websockets.broadcastTXT(JSON_Data);
        }
        


    break;
    case WStype_CONNECTED: { //en caso de que ingrese un nuevo cliente
        IPAddress ip = websockets.remoteIP(num);

        Serial.printf("[%u] Conectado en %d.%d.%d.%d url: %s\n", num, ip[0], ip[1], ip[2], ip[3], payload);
        //Imprimimos las caracteristicas de el numero de cliente conectado, su IP, LA URL DE VISITA
    }
    break;
    case WStype_TEXT: //en caso de que el cliente nos envie datos
        Serial.printf("[%u] Texto: %s\n", num, payload); //imprimimos que nos envios el cliente
        String mensaje = String((char*)( payload));//guardamos sus datos en un string
        //USE_SERIAL.printf("[%u] get Text: %s\n", num, payload);
        Serial.println(mensaje);//imprimimos el mensaje una vez mas
        DynamicJsonDocument doc(200); // instanciamos un documento(capacidad) que va a ser el que decodifique la respuesta
        DeserializationError error = deserializeJson(doc, mensaje);
        if (error) { //en caso de que no pude decodificar el JSON 
          Serial.print("deserializeJson() failed: ");
          Serial.println(error.c_str()); //IMPRIMIMOS EL ERROR
          return;
        }
        //vemos de quien es el mensaje y la cabecera de este
        sendData(doc);
        //analizamos aqui mismo
        String issue=doc["issue"];
        if(issue=="HELLO_WORLD"){ //primera conexion, le pedimos su rol 
            String JSON_Data = "{\"issue\":";//creamos nuestro JSON
            JSON_Data +="\"ROL_COMMUNICATION\",";
            JSON_Data += "\"}";
            websockets.sendTXT(num, JSON_Data);
        }
        else if(issue=="SLAVE_ROL"){//es un esclavo'
            String JSON_Data = "{\"issue\":";
            JSON_Data +="\"PORT_COMMUNICATION\",";
            JSON_Data = "\"port\":";
            JSON_Data += num;        
            JSON_Data += "\"}";
            websockets.sendTXT(num, JSON_Data);//le enviamos al esclavo su data, en que puerto se va a estar comunicando 
        }
        else if(issue=="MASTER_ROL"){//en caso de que sea un maestro;
            webSocketData.masterPortComunication=num;//asignamos numero al puerto del maestro
        }

        //int estadoLed = doc["Led"]; // vemos el valor que tiene la propiedad led,el estado será de 0 o 1 y se la asignamos a una variable
        //digitalWrite(Led,estadoLed);//Dependiendo de su valor ejecutamos
        
    break;
  }
}

void setup(void)
{
    Serial.begin(115200); //iniciamos monitor serial
    pinMode(Led, OUTPUT); //definimos al led como salida
    WiFi.softAP("Loteria","1111");//creamos nuestro access point
    Serial.println("softAP");
    Serial.println("");
    Serial.println(WiFi.softAPIP()); //imprimimos su IP
    if(!SPIFFS.begin(true)){ //inicializamos spiffs, si hay error reiniciamos el dispositivo
        Serial.println("A ocurrido un error al montar SPIFFS");
        return;
    }

    server.on("/Loteria", HTTP_GET, [](AsyncWebServerRequest * request) {//en caso de una peticion HTTP a la raiz
        request->send(SPIFFS, "/index1.html", "text/html"); //desplegamos nuestro sitio
    });
    server.on("/Presentacion", HTTP_GET, [](AsyncWebServerRequest * request){ //en caso de una peticion HTTP a la raiz
        request->send(SPIFFS, "/index0.html", "text/html"); //desplegamos nuestro sitio
    });
    server.onNotFound(notFound);
    server.begin();//iniciamos el servidor
    websockets.begin();//iniciamos el servidor web-socket
    websockets.onEvent(webSocketEvent);//en caso de algun evento web-socket irnos a esta funcion
    timer.attach(2,enviarDatosSensor); // Ticker timer (Llama funciones en un intervalo establecido), en este caso 2 seg
}

void loop(void) {
    websockets.loop(); //escuchamos eventos websockets
}

void sendData(DynamicJsonDocument doc) {
    
    int num;
    String JSON_Data ="";
    Serial.println(JSON_Data);
    websockets.broadcastTXT(JSON_Data);  // envia datos a todos los clientes conectados en formato JSON
    // send message to client
    websockets.sendTXT(num, "message here");

    
}