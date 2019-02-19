function JSONMaker(X, Y, R, G, B){

    let JSON_DATA = '{' +
        '"location": {' +
            '"x":' + X.toString() +
            ',"y":' + Y.toString() +
        '},' +
        '"color": {' +
            '"r":' + R.toString() +
            ',"g":' + G.toString() +
            ',"b":' + B.toString() +
        '}' +
    '}';
    
    return JSON_DATA
}

function JSONPerser(JSON_DATA)
{
    json = JSON.parse(JSON_DATA);
    let datas = [json.location.x, json.location.y, json.color.r, json.color.g, json.color.b];
    return datas;

}

