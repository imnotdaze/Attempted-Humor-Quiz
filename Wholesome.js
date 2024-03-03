// global var score 
let wholesomeScore = 0; 

window.addEventListener('load', function () {
  var Whol1 = "https://www.boredpanda.com/blog/wp-content/uploads/2022/06/Wholesome-Memes-facebook-group-62b0037fc1d38__700.jpg";
  var Whol2 = "https://static.demilked.com/wp-content/uploads/2023/07/cute-wholesome-memes-1.jpg";
  var Whol3 = "https://www.boredpanda.com/blog/wp-content/uploads/2022/12/wholesome-memes-pics-cover_800.png";
  var Whol4 = "https://thunderdungeon.com/wp-content/uploads/2023/12/wholesome-memes-banner-20231212.jpg";
  var Whol5 = "https://www.liveabout.com/thmb/oT_1902-w-FkCqSGBtPo7C6BT8k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wholesome-meme-southpark-58d3e7263df78c51627a4e27.jpg";
  var Whol6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WpBts5BQP4MHsW9Xx6ApWUyLRdqi8-7QJDIzU4edrRFIaeYo3fC0znnPARoxwdRS4ck&usqp=CAU";
  var Whol7 = "https://ruinmyweek.com/wp-content/uploads/2019/03/wholesome-memes-21-pics-6-3.jpg";
  var Whol8 = "https://thechive.com/wp-content/uploads/2017/01/wholesome-wednesdays-memes-that-feed-the-soul-51-photos-216.jpg?attachment_cache_bust=1975780&quality=85&strip=info&w=400";
  var Whol9 = "https://i.chzbgr.com/full/9592128256/h8F44BFBD/penguin-talking-my-dogs-my-dogs-having-no-idea-saying-but-still-listening";
  var Whol10 = "https://piximus.net/media2/70687/wholesome-memes-44-2.jpg";
  var Whol11 = "https://cdn.ebaumsworld.com/2023/11/30/113711/87481899/wholesome-memes1.png";
  var Whol12 = "https://thechive.com/wp-content/uploads/2023/03/43-641475985c3ed__700-641ac6d939fd6__700.jpg?attachment_cache_bust=4358885&quality=85&strip=info&w=400";
  var Whol13 = "https://cdn.ebaumsworld.com/2023/12/11/081017/87485167/wholesome-memes21.jpeg";
  var Whol14 = "https://i.pinimg.com/736x/d1/74/65/d17465113cd73c98923b96e4a18c8f5c.jpg";
  var Whol15 = "https://cleanmemes.files.wordpress.com/2020/11/img_3049-dsqz.jpg?w=840&h=840";
  const variableB = [Whol1, Whol2, Whol3, Whol4, Whol5, Whol6, Whol7, Whol8, Whol9, Whol10, Whol11, Whol12, Whol13, Whol14, Whol15];

  

  function randomNumber(n) {
      return Math.floor(Math.random() * n );
  }
  var num = randomNumber(variableB.length);
  var random = variableB[ randomNumber( num ) ];
  document.getElementById("WholRand").src = random;
  function whole_RandomNewNumber()
  {
      variableB.splice(num, num+1);
      num = randomNumber(variableB.length);
      wholesomeScore++;
      random = variableB[ randomNumber(num)];
  }
  })