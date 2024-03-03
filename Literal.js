// global var
let literalScore = 0;

window.addEventListener('load', function () {  
var Lit1 = "https://static.boredpanda.com/blog/wp-content/uploads/2021/05/funny-literal-memes-2-60927b867ccb0__700.jpg";
var Lit2 = "https://i.pinimg.com/736x/39/b1/e5/39b1e54201d4c78d655489484a1b8c12.jpg"
var Lit3 = "https://static.boredpanda.com/blog/wp-content/uploads/2021/05/funny-literal-memes-15-60927fc4c18c0__700.jpg"
var Lit4 = "https://preview.redd.it/censorship-v0-5c9gft642zdb1.jpg?auto=webp&s=a6848642ed7b39ab1108b01fa2afe9127db25abd"
var Lit5 = "https://static.boredpanda.com/blog/wp-content/uploads/2021/05/funny-literal-memes-1-147-609003a8b557b__700.jpg"
var Lit6 = "https://i.pinimg.com/736x/21/fb/f4/21fbf445490405daefb87af312e9becc.jpg"
var Lit7 = "https://i.pinimg.com/736x/60/37/7e/60377e0285e96f225cadc0147008c86c.jpg"
var Lit8 = "https://static.boredpanda.com/blog/wp-content/uploads/2021/05/funny-literal-memes-5-60927c621b7fd__700.jpg"
var Lit9 = "https://thechive.com/wp-content/uploads/2021/05/Literally-Literal-Memes-That-Will-Have-You-Figuratively-Laughing-Your-Butt-Off-Humor-Funny-Pictures-14.jpg?attachment_cache_bust=3661586&quality=85&strip=info&w=400"
var Lit10 = "https://i.chzbgr.com/full/9684197632/h89EB73B6"
var Lit11 = "https://i.redd.it/g5pf0b7j9ti61.png"
var Lit12 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_JPi8LKBrednnG9wsLFWT4IXeCvpLIU4oOg&usqp=CAU"
var Lit13 = "https://static.wikia.nocookie.net/nicos-nextbots-fanmade/images/c/cb/Butterflies.png/revision/latest/scale-to-width-down/250?cb=20230816083709"
var Lit14 = "https://img.buzzfeed.com/buzzfeed-static/static/2018-10/5/11/asset/buzzfeed-prod-web-06/sub-buzz-8889-1538752641-2.jpg?downsize=900:*&output-format=auto&output-quality=auto"
var Lit15 = "https://images7.memedroid.com/images/UPLOADED788/62cf89bb585a9.jpeg"
const variableA = [Lit1, Lit2, Lit3, Lit4, Lit5, Lit6, Lit7, Lit8, Lit9, Lit10, Lit11, Lit12, Lit13, Lit14, Lit15];



function randomNumber(n) {
    return Math.floor(Math.random() * n );
}
var num = randomNumber(variableA.length);
var random = variableA[ randomNumber( num ) ];
document.getElementById("LitRand").src = random;
function lit_RandomNewNumber()
{
    variableA.splice(num, num+1);
    num = randomNumber(variableA.length);
    literalScore++;
    random = variableA[ randomNumber(num)];
}
 })