var dadJokesScore = 0; 

var Dad1 = "https://i0.wp.com/mediachomp.com/wp-content/uploads/2021/07/dad-jokes-puns-08.jpg?resize=650%2C488&ssl=1";
var Dad2 = "https://www.liveabout.com/thmb/tM9msf8Kk7Ibc0mk2Nb46DaXlWY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dadjoke-5928d4313df78cbe7e2f80c5.png";
var Dad3 = "https://www.care.com/c/wp-content/uploads/sites/2/2021/06/Screen-Shot-2021-05-28-at-8.41.51-AM.png";
var Dad4 = "https://www.liveabout.com/thmb/IYJB7W9ny9HqGM63Jgwy1EEmpNo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/screencapture-imgur-gallery-VfNqW-1495849088498-5928d8eb3df78cbe7e2f940f.png";
var Dad5 = "https://www.rd.com/wp-content/uploads/2021/03/DadMeme17.jpg";
var Dad6 = "https://global.discourse-cdn.com/pocketgems/uploads/episodeinteractive/original/4X/9/7/7/977362f94c36642e5851bb0a47a29883231929ef.jpeg";
var Dad7 = "https://i.chzbgr.com/full/9570475776/h818998F8/person-cheese-factory-exploded-france-s-awful-rikers-beard-is-da-brie-is-everywhere";
var Dad8 = "https://thechive.com/wp-content/uploads/2022/05/glasses-do-call-group-baby-soldiers-an-infantry.jpg?attachment_cache_bust=4085560&quality=85&strip=info&w=400";
var Dad9 = "https://global.discourse-cdn.com/pocketgems/uploads/episodeinteractive/original/4X/5/1/c/51c8bae72fc72339e910d572f60af0fb7337147a.jpeg";
var Dad10 = "https://images7.memedroid.com/images/UPLOADED254/64d3369dd3544.jpeg";
var Dad11 = "https://i.imgflip.com/4s92he.jpg";
var Dad12 = "https://i.chzbgr.com/full/9342013184/h21F2656E/man-first-day-as-car-salesman-customer-cargo-space-car-no-do-car-no-fly-manager-can-see-my-office";
var Dad13 = "https://i0.wp.com/mediachomp.com/wp-content/uploads/2021/07/dad-jokes-puns-01.jpg?resize=650%2C488&ssl=1";
var Dad14 = "https://preview.redd.it/tsha9hvjzl161.jpg?width=640&crop=smart&auto=webp&s=7b7662a31c5d5c431aad90871ebe61cb8832f841";
var Dad15 = "https://media.tenor.com/21MCjz6q4IkAAAAM/memes.gif";

function randomNumber(n) {
    return Math.floor(Math.random() * n );
}
var variableD = [Dad1, Dad2, Dad3, Dad4, Dad5, Dad6, Dad7, Dad8, Dad9, Dad10, Dad11, Dad12, Dad13, Dad14, Dad15];
num = randomNumber(variableD.length);
document.getElementById("DadRand").src = variableD[num];
function dad_RandomNewNumber()
{   
    variableD.splice(num, 1);
    
    dadJokesScore++;;
    num = randomNumber(variableD.length)
    document.getElementById("DadRand").src = variableD[num];


    // return variableD[ randomNumber(num)];

} 
window.addEventListener('load', function ()) {


    
    var num = randomNumber(variableD.length);
    var random = variableD[ randomNumber( num ) ];
    document.getElementById("DadRand").src = random;
    // document.getElementById("DadRand").addEventListener("click", function(){dadJokesScore++});
    // document.getElementById("nums").src = num;
   
    

    random = dad_RandomNewNumber();
    // document.getElementById("DadRand").src = random;
    function changeImage(){
        document.getElementsById("img").src = random;
    }
function ChangeDad()
{
    dad_RandomNewNumber();

}
  }

