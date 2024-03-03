// let audio = new Audio ('sound-effects-library-cash-register-sound.mp3');
/* function loadAudio() {      
    audio.play();                    // scrap audio idea...too many bugs
    audio.pause();
    audio.load();
} */



//---------- below is meant for results page ---------------------------


// score is expressed as a percentage, called in results.html
//function calcScore () {
    let total = 10; 
    let dark_pct = darkHumorScore + ": " + ( (darkHumorScore / total) * 100 ) + "% ";
    let lit_pct = literalScore + ": " + ( (literalScore / total) * 100) + "% ";
    let whole_pct = wholesomeScore + ": " + ( (wholesomeScore / total) * 100) + "% ";
    let dad_pct = dadJokesScore + ": " + ( (dadJokesScore / total) * 100) + "% ";

    // use document.querySelector to select an HTML element
    document.querySelector("#stats").innerHTML  = dark_pct + "\n" + lit_pct + "\n" + whole_pct + "\n" + dad_pct ;                                      
//} 


/*    scrapped idea 
// need to reference body header id inside console.log() message  or  reference this function in index.html
function congratsMessage () {
    // alternative array syntax --> let myFavoriteFoods = new Array("pizza", "ice cream", "salad");
    const arr = [" WOW. ", 
                 "Congratulations! You've unlocked your funny bone with flying colors! ",
                 "You've did it! You've cracked the humor code! ",
                 "WOW. You've mastered the art of laughter! ",
                 "Congratulations! You've officially graduated from the School of Silliness with flying colors! ",
                 "Kudos! You've got a knack for humor that's bound to brighten anyone's day! ", 
                 "Bravo! Your humor game is strong! ",
                 "Well done! You've proven yourself a true humor connoisseur!  ", 
                 "Damn son. Keep being the life of the party! ",
];
    console.log(arr[Math.random*10]);
};
*/