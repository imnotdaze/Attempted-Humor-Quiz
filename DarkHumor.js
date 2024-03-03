
  // global var
  let darkHumorScore = 0; 

window.addEventListener('load', function () {
  var Dark1 = "https://images-cdn.9gag.com/photo/aerV5dB_700b.jpg";
  var Dark2 = "https://i.pinimg.com/736x/22/a3/ea/22a3eaec935a8b6661dc4e205bdac365.jpg";
  var Dark3 = "https://img.wattpad.com/fd03471457ebda20f868554281a901a0ce1a3381/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f664d57414568436451696b7946413d3d2d313130303338363632312e313639316566363230616436646434363433313337333835313733362e6a7067";
  var Dark4 = "https://filmdaily.co/wp-content/uploads/2020/05/darkhumor-01.jpg";
  var Dark5 = "https://memefuny.com/cdn/upload/images/hieu-hanh/2023-09/dark-humor-memes-111111zon.webp";
  var Dark6 = "https://img-9gag-fun.9cache.com/photo/a3ZRrev_460s.jpg";
  var Dark7 = "https://64.media.tumblr.com/6049fac0cfbe1a7282225a883ddb9409/bdf6f4c8f26b09fb-c6/s540x810/1e16a1f4f2bdb45e14ca5978534072dc8568ea4e.jpg";
  var Dark8 = "https://img.wattpad.com/5b6624adf9a431eb8586d58fc517295ee152d501/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a327362675734715a53753846413d3d2d313130303338363632312e313639316566356432303661353234303836353034313934333436322e6a7067?s=fit&w=720&h=720";
  var Dark9 = "https://thunderdungeon.com/wp-content/uploads/2023/10/dark-humor-memes-24-600x661.jpg";
  var Dark10 = "https://image.pixstory.com/optimized/Pixstory-image-168182688661146.png";
  var Dark11 = "https://cdn.ponly.com/wp-content/uploads/Dark-Humor-jokes-4-1024x759.png";
  var Dark12 = "https://i.imgflip.com/89p835.jpg";
  var Dark13 = "https://sadanduseless.b-cdn.net/wp-content/uploads/2023/04/dark-humor-memes16.jpg";
  var Dark14 = "https://i.pinimg.com/736x/0d/90/e9/0d90e93aede39bd533e11d6c7167d555.jpg";
  var Dark15 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDsxLJUtB6Tn6LE0JdUccx5uWwdSqBMhJDEA&usqp=CAU";
  const variableC = [Dark1, Dark2, Dark3, Dark4, Dark5, Dark6, Dark7, Dark8, Dark9, Dark10, Dark11, Dark12, Dark13, Dark14, Dark15];


    function randomNumber(n) {
        return Math.floor(Math.random() * n );
    }
    var num = randomNumber(variableC.length);
    var random = variableC[ randomNumber( num ) ];
    document.getElementById("DarkRand").src = random;
    function dark_RandomNewNumber()
    {
        variableC.splice(num, num+1);
        num = randomNumber(variableC.length);
        darkHumorScore++;
        random = variableC[ randomNumber(num)];
    }
 
  })

