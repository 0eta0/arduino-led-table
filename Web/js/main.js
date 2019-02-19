var colors = ["#FF9999", "#FFCC99", "#FFFF99", "#CCFF99", "#99FF99", "#99FFCC", "#99FFFF", "#99CCFF", "#9999FF", "#CC99FF", "#FF99FF", "#FF99CC",
    "#FF6666", "#FF9966", "#FFCC66", "#FFFF66", "#66FF66", "#66FFFF", "#66CCFF", "#6699FF", "#6666FF", "#9966FF", "#FF66FF", "#FF6699",
    "#CC6666", "#CC9966", "#CCCC66", "#99CC66", "#66CC66", "#66CC99", "#66CCCC", "#6699CC", "#6666CC", "#9966CC", "#CC66CC", "#CC6699"
];

window.onload = function () {
    // Data of Table
    var data = [];
    for (var i = 0; i < 11; i++) {
        data[i] = [];
        for (var j = 0; j < 11; j++) {
            data[i][j] = (i * 11) + j + 1;
        }
    }
    // Create Table dynamicly
    createTable(data, "matrix");

    // Create ColorTable dynamicly
    createColorPicker("picker");

    setColor();
};

function createTable(data, tableId) {
    var rows = [];
    var table = document.createElement("table");
    table.setAttribute("border", "1");

    for (i = 0; i < data.length; i++) {
        rows.push(table.insertRow(-1));

        for (j = 0; j < data[0].length; j++) {
            cell = rows[i].insertCell(-1);

            cell.setAttribute("class", "matrixCell");
            cell.setAttribute("id", data[i][j].toString());

            cell.setAttribute("onmousedown", "tableDown(this)");
            cell.setAttribute("ontouchstart", "tableTouch(this)");

            cell.setAttribute("onmouseover", "tableOver(this)");
            cell.setAttribute("ontouchmove", "tableTouch(this)");

            cell.setAttribute("onmouseup", "tableUp(this)");
            cell.setAttribute("ontouchend", "tableTouch(this)");
        }
    }
    // Add Table to target div
    document.getElementById(tableId).appendChild(table);
}

function createColorPicker(pickerId) {

    var rows = [];
    var table = document.createElement("table");
    table.setAttribute("border", "1");

    for (i = 0; i < 3; i++) {
        rows.push(table.insertRow(-1));

        for (j = 0; j < 12; j++) {
            cell = rows[i].insertCell(-1);

            cell.setAttribute("class", "colorPickerCell");
            cell.setAttribute("id", (i * 12 + j).toString());

            cell.setAttribute("onmousedown", "colorPicker(this)");
            cell.setAttribute("ontouchend", "colorPicker(this)");

            cell.setAttribute("style", "background-color : " + colors[i * 12 + j]);
        }
    }
    // Add Table to target div
    document.getElementById(pickerId).appendChild(table);
}

function pen() {
    if (penMode) {
        penMode = false;
        document.getElementById("pen").style.backgroundColor = "white";
    } else {
        penMode = true;
        document.getElementById("pen").style.backgroundColor = "gray";
        eraserMode = true;
        eraser();
    }
}

function eraser() {
    if (eraserMode) {
        eraserMode = false;
        document.getElementById("eraser").style.backgroundColor = "white";
    } else {
        eraserMode = true;
        document.getElementById("eraser").style.backgroundColor = "gray";
        penMode = true;
        pen();
    }
}

var mouseFlag = 0;
var colorId = 0;
var penMode = false;
var eraserMode = false;

function tableDown(obj) {
    console.log("tableDown", obj.id);
    changeColor(obj.id);
    mouseFlag = 1;
}

function tableOver(obj) {
    if (obj.id) {
        if (mouseFlag === 1) {
            console.log("tableOver", obj.id);
            changeColor(obj.id);
        }
    }
}

function tableUp() {
    console.log("tableUp");
    mouseFlag = 0;
}

function tableTouch(obj) {
    console.log("tableTouch", obj.id);
    changeColor(obj.id);
}

function setColor() {
    document.getElementById("colorIndicator").style.backgroundColor = colors[colorId];
}

function colorPicker(obj) {
    console.log("picker", obj.id);
    colorId = obj.id;
    setColor();
}

function changeColor(id) {
    if (document.getElementById) {
        if (eraserMode) {
            document.getElementById(id).style.backgroundColor = "white";
        } else if(penMode) {
            document.getElementById(id).style.backgroundColor = colors[colorId];
        }
    }
}

function modeChanger(){

}