import "json";

var uri = 'ws://192.168.10.10:9999/';
var connection = new WebSocket(uri);

function onOpen(event) {
    myp.appendChild(document.createTextNode("Connect successful!"));
    statusDiv.appendChild(myp);
}

function onMessage(event) {
    if (event && event.data) {
        myp.appendChild(document.createTextNode(event.data));
        statusDiv.appendChild(myp);
    }
}

function websocketSend(data) {
    if (connection == null) {
        connection = new WebSocket(uri);

        connection.onopen = onOpen;
        connection.onmessage = onMessage;

        // console.log("Will send message :", data, JSON.stringify(data));
        myp.appendChild(document.createTextNode("Will send message"));
        statusDiv.appendChild(myp);

        connection.send(data);
    } else {
        myp.appendChild(document.createTextNode("Connection difesed"));
        statusDiv.appendChild(myp);
    }
}