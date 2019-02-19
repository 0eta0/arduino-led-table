from websocket_server import WebsocketServer
import serial
import json

def new_client(client, server):
    server.send_message_to_all("New client has joined")

def send_msg_allclient(client, server, message):
    par = parse(message)
    print(par)
    # serial.send(par)
    # server.send_message_to_all("To all:" + message)

def parse(message):
    # json_read = json.dumps(message)
    print(message)
    json_dict = json.loads(message)
    print(json_dict)
    
    return json_dict['location']['x'] + " " \
            + json_dict['location']['y'] + " " \
            + json_dict['color']['r'] + " " \
            + json_dict['color']['g'] + " " \
            + json_dict['color']['b']

server = WebsocketServer(9999, host='192.168.10.10')
server.set_fn_new_client(new_client)
server.set_fn_message_received(send_msg_allclient)
server.run_forever()
