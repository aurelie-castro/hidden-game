import './style.scss';
import $ from 'jquery';
// import axios from 'axios';



setInterval (function(){
    //premiere div
    var rand1 = Math.floor(Math.random() *2);
    var position1 = $(".square").position();
    var topNow1 = position1.top;
    var leftNow1 = position1.left;
    if (rand1 == "0"){
        $(".square").css({
            top: topNow1,
            left: leftNow1
        });
        console.log( rand1 + " purple n'avance pas");
    }else if (rand1 == "1"){
        $(".square").css({
            top: topNow1,
            left: leftNow1 + 100
        });
        console.log(rand1 + " purple avance");
    }
    
    //deuxieme div
    var rand2 = Math.floor(Math.random() *2);
    var position2 = $(".square2").position();
    var topNow2 = position2.top;
    var leftNow2 = position2.left;
    if (rand2 == "0"){
        $(".square2").css({
            top: topNow2,
            left: leftNow2
        });
        console.log( rand2 + " pink n'avance pas");
    }else if (rand2 == "1"){
        $(".square2").css({
            top: topNow2,
            left: leftNow2 + 100
        });
        console.log(rand2 + " pink avance");
    }

    //troisieme div
    var rand3 = Math.floor(Math.random() *2);
    var position3 = $(".square3").position();
    var topNow3 = position3.top;
    var leftNow3 = position3.left;
    if (rand3 == "0"){
        $(".square3").css({
            top: topNow3,
            left: leftNow3
        });
        console.log( rand3 + " blue n'avance pas");
    }else if (rand3 == "1"){
        $(".square3").css({
            top: topNow3,
            left: leftNow3 + 100
        });
        console.log(rand3 + " blue avance");
    }
}, 1000); 




