/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var row = "";
var map = "";
var fantasma1 = [];
var fantasma2 = [];
var fantasma3 = [];
var player = [1,28,"s"];

creaMapa();
creaFantasmes();
carregaFantasmes();
window.setInterval(function(){  
    document.body.innerHTML = "";
    fantasma1 = move(fantasma1);
    fantasma2 = move(fantasma2);
    fantasma3 = move(fantasma3);
    carregaFantasmes();
}, 1000);
clearInterval();

function creaFantasmes(){
    fantasma1 = inicialitzaFantasma(fantasma1);
    fantasma2 = inicialitzaFantasma(fantasma2);
    fantasma3 = inicialitzaFantasma(fantasma3);
}
function creaMapa(){
    map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
}
function carregaFantasmes(){
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if ( i == fantasma1[0] && j == fantasma1[1]) {
                map[i][j] = "F";
            }
            if ( i == fantasma2[0] && j == fantasma2[1]) {
                map[i][j] = "F";
            }
            if ( i == fantasma3[0] && j == fantasma3[1]) {
                map[i][j] = "F";
            }
            row += map[i][j] + " ";
        }
        document.write(row);
        document.write("</br>");
        row="";
    }
}
function inicialitzaFantasma(fantasma){
    var bool = false;
    var posi = false;
    var values = ['a','w','d','s'];
    while(!bool){
        //variables que indiquen la posició del fantasma en el mapa X, Y
        var positionx = Math.floor(Math.random() * 30);
        var positiony = Math.floor(Math.random() * 30);     // returns a random integer from 0 to 9

        //comprovació que el punt obtingut pels nombres random sigui un punt on
        //els fantasmes i jugador puguin circular.

        if (map[positionx][positiony] == 1) {
            while(!posi){
                //vaiable que utilitzarem per chekejar cap on començarà a moure's el fantasma
                var look = Math.floor(Math.random() * 4);
                if (values[look] == 'a' && map[positionx][positiony-1] == 1) {
                    fantasma = [positionx,positiony,'a'];
                    posi = true;
                }else
                if(values[look] == 'w' && map[positionx-1][positiony] == 1){
                    fantasma = [positionx,positiony,'w'];
                    posi = true;
                }else
                if(values[look] == 'd' && map[positionx][positiony+1] == 1){
                    fantasma = [positionx,positiony,'d'];
                    posi = true;
                }else
                if(values[look] == 's' && map[positionx+1][positiony] == 1){
                    fantasma = [positionx,positiony,'s'];
                    posi = true;
                }
            }
            bool = true;
        }
    }
    return fantasma;
}
function move(fantasma){
    if (fantasma[2] == 'a') {
        if(map[fantasma[0]][fantasma[1]-1] == 1){
            map[fantasma[0]][fantasma[1]] = 1;
            fantasma = [fantasma[0], fantasma[1]-1, 'a'];
        }else{
            map[fantasma[0]][fantasma[1]] = 1;
            var look = Math.floor(Math.random() * 2);
            //el valor 0 pujarà, el 1 baixarà
            switch(look){
                case 0: fantasma = [fantasma[0]-1, fantasma[1], 'w']; break;
                case 1: fantasma = [fantasma[0]+1, fantasma[1], 's']; break;
            }
        }
    }else if(fantasma[2] == 'w'){
        if(map[fantasma[0]-1][fantasma[1]] == 1){
            map[fantasma[0]][fantasma[1]] = 1;
            fantasma = [fantasma[0]-1, fantasma[1], 'w'];
        }else{
            map[fantasma[0]][fantasma[1]] = 1;
            //0 dreta, 1 esquerre
            var look = Math.floor(Math.random() * 2);
            switch(look){
                case 0: fantasma = [fantasma[0], fantasma[1]+1, 'd']; break;
                case 1: fantasma = [fantasma[0], fantasma[1]-1, 'a']; break;
            }
        }
    }
    else if(fantasma[2] == 'd'){
        if(map[fantasma[0]][fantasma[1]+1] == 1){
            map[fantasma[0]][fantasma[1]] = 1;
            fantasma = [fantasma[0], fantasma[1]+1, 'd'];
        }else{
            
            map[fantasma[0]][fantasma[1]] = 1;
            var look = Math.floor(Math.random() * 2);
            //el valor 0 pujarà, el 1 baixarà
            switch(look){
                case 0: fantasma = [fantasma[0]-1, fantasma[1], 'w']; break;
                case 1: fantasma = [fantasma[0]+1, fantasma[1], 's']; break;
            }
        }
    }
    else if(fantasma[2] == 's'){
        if(map[fantasma[0]+1][fantasma[1]] == 1){
            map[fantasma[0]][fantasma[1]] = 1;
            fantasma = [fantasma[0]+1, fantasma[1], 's'];
        }else{
            map[fantasma[0]][fantasma[1]] = 1;
            var look = Math.floor(Math.random() * 2);
            //0 dreta, 1 esquerre
            var look = Math.floor(Math.random() * 2);
            switch(look){
                case 0: fantasma = [fantasma[0], fantasma[1]+1, 'd']; break;
                case 1: fantasma = [fantasma[0], fantasma[1]-1, 'a']; break;
            }
        }
    }
    return fantasma;
}
