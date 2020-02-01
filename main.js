var img = {
  discord: '<img src="images/discord.png"/>',
  cloud: '<img src="images/cloud.png"/>',
  colis: '<img src="images/colis.png"/>',
  AK47: '<img src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWZU7Mxkh9bN9J7yjRrhrUFuazjzJteVJlQ6NVHTrFe3wObs15G06picwHFnvid25C3bnhSzn1gSOQz0szG-/360fx360f"/>',
  Pass_De_Combat: '<img src="images/battle_pass.png"/>'
}

function reset(){
  $('.card').remove();
  for (var i = 0; i < 210; i++){
    var element = '<div class="card" style="background-color: lightblue;" data-rarity="discord" id=itemNumber'+i+'>'+img.discord+'</div>';
    var rand = random(1,10000)/100;
    if (rand < 25){
      element = '<div class="card" style="background-color: purple;" data-rarity="cloud" id=itemNumber'+i+'>'+img.cloud+'</div>';
    }
    if (rand < 10){
      element = '<div class="card" style="background-color: hotpink;" data-rarity="colis" id=itemNumber'+i+'>'+img.colis+'</div>';
    }
    if (rand < 5){
      element = '<div class="card" style="background-color: red;" data-rarity="AK47" id=itemNumber'+i+'>'+img.AK47+'</div>';
    }
    if (rand < 1){
      element = '<div class="card" style="background-color: gold;" data-rarity="Pass_De_Combat" id=itemNumber'+i+'>'+img.Pass_De_Combat+'</div>';
    }
console.log(`element : ${element}`)
    $('#cardList').append(element);
  }
  $('.card').first().css('margin-left',-1000);
}

function openCase(){
  reset();
  var rand = 5250;
  var childNumber = Math.floor(rand/100)+4;
  var timings = ["easeInOutBack","easeOutExpo","easeInOutBounce","easeOutQuad","swing","easeOutElastic","easeInOutElastic"];
  var timing = timings[random(0,timings.length)];
  console.log(timing)
  var reward = $('#itemNumber'+childNumber).attr('data-rarity');
  
  $('.card').first().animate({
    marginLeft: -rand
  }, 3000, 'swing', function(){ //Temps de l'animation, type d'animation
    
    var src = $('#itemNumber'+childNumber+' img').attr('src');
    $('#itemNumber'+childNumber).css({background: "linear-gradient(#00bf09, #246b27)"});
    
    $('#dialog-msg').html("Vous recevez "+reward+" !"+"<br><img src="+src+">");
    
    $('#dialog').dialog({
      modal: true,
      title: "Nouvel Objet !",
      resizeable: false,
      draggable: false,
      width: 400,
      buttons: {
        "Retirer l'objet":function(){
          $(this).dialog("close");
          // add resources
        }
      }
    });
  });
  
  
  //$('.card').css({backgroundColor: 'red'})
  //$('.card:nth-child('+(childNumber+1)+')').css({backgroundColor: 'green'})
}

function random(min, max){
  return Math.floor((Math.random()*(max - min))+min);
}
