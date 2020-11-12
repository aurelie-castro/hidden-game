import './style.scss';
import $ from 'jquery';
// import axios from 'axios';



setInterval (function(){
    var rand = Math.floor(Math.random() *2);
    console.log(rand);
    var position = $(".square").position();
    var topNow = position.top;
    var leftNow = position.left;
    console.log(topNow);
    if (rand == "0"){
        $(".square").css({
            top: topNow,
            left: leftNow
        });
        console.log( rand + " purple n'avance pas");
    }else if (rand == "1"){
        $(".square").css({
            top: topNow,
            left: leftNow + 100
        });
        console.log(rand + " purple avance");
    }
}, 1000); 

setInterval (function(){
    var rand = Math.floor(Math.random() *2);
    console.log(rand);
    var position = $(".square2").position();
    var topNow = position.top;
    var leftNow = position.left;
    console.log(topNow);
    if (rand == "0"){
        $(".square2").css({
            top: topNow,
            left: leftNow
        });
        console.log(rand + " pink n'avance pas");
    }else if (rand == "1"){
        $(".square2").css({
            top: topNow,
            left: leftNow + 100
        });
        console.log( rand + " pink avance");
    }
}, 1000); 

setInterval (function(){
    var rand = Math.floor(Math.random() *2);
    console.log(rand);
    var position = $(".square3").position();
    var topNow = position.top;
    var leftNow = position.left;
    console.log(topNow);
    if (rand == "0"){
        $(".square3").css({
            top: topNow,
            left: leftNow
        });
        console.log(rand + " blue n'avance pas");
    }else if (rand == "1"){
        $(".square3").css({
            top: topNow,
            left: leftNow + 100
        });
        console.log(rand + " blue avance");
    }
}, 1000); 


