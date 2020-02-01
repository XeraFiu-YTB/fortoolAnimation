var img = {
  discord: '<img src="images/discord.png"/>',
  cloud: '<img src="images/cloud.png"/>',
  colis: '<img src="images/colis.png"/>',
  AK47: '<img src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5gZKKkPLLMrfFqWZU7Mxkh9bN9J7yjRrhrUFuazjzJteVJlQ6NVHTrFe3wObs15G06picwHFnvid25C3bnhSzn1gSOQz0szG-/360fx360f"/>',
  Pass_De_Combat: '<img src="images/battle_pass.png"/>'
}
var money = 100;
var audio = new Audio('Sound_Spin_Wheel.mp3');

function reset(){
  $('.card').remove();
  for (var i = 0; i < 210; i++){
    var elemen
    var rand = random(1,10000)/100;
    //console.log(rand)
    if (rand < 20){//ecart de 20
    	element = '<div class="card" style="background-color: lightblue;" data-rarity="discord" id=itemNumber'+i+'>'+img.discord+'</div>';
    }
    if (rand < 45 && rand > 20){//ecart de 25
      element = '<div class="card" style="background-color: purple;" data-rarity="cloud" id=itemNumber'+i+'>'+img.cloud+'</div>';
    }
    if (rand < 70 && rand > 45){//ecart de 25
      element = '<div class="card" style="background-color: hotpink;" data-rarity="colis" id=itemNumber'+i+'>'+img.colis+'</div>';
    }
    if (rand < 95 && rand > 70){//ecart de 25
      element = '<div class="card" style="background-color: red;" data-rarity="AK47" id=itemNumber'+i+'>'+img.AK47+'</div>';
    }
    if (rand > 95){
      element = '<div class="card" style="background-color: gold;" data-rarity="Pass_De_Combat" id=itemNumber'+i+'>'+img.Pass_De_Combat+'</div>';
    }
    //console.log(`element : ${element}`)
    $('#cardList').append(element);
  }
  $('.card').first().css('margin-left',-1000);
}

function openCase(){
	audio.play();
	console.log(`Achat d'une caisse : -3€`)
	money -= 3
  reset();
  var rand = 5250; //random(1000,20000)
  var childNumber = Math.floor(rand/100)+4;
  var timings = ["easeInOutBack","easeOutExpo","easeInOutBounce","easeOutQuad","swing","easeOutElastic","easeInOutElastic"];
  var timing = timings[random(0,timings.length)];
  //console.log(timing)
  var reward = $('#itemNumber'+childNumber).attr('data-rarity');
  
  $('.card').first().animate({
    marginLeft: -rand
  }, 5000, 'swing', function(){ //Temps de l'animation, type d'animation
    
    switch(reward) {
    	case 'discord':
    		money += 4.5
    		console.log('Gagner 4.5€ -> 1.5€')
    	break;
    	case 'cloud':
    		money += 2.4
    		console.log('Gagner 2.4€ -> -0.6€')
    	break;
    	case 'AK47':
    		money += 0.6
    		console.log('Gagner 0.6€ -> -2.4€')
    	break;
    	case 'colis':
    		money += 1.5
    		console.log('Gagner 1.5€ -> -1.5€')
    	break;
    	case 'Pass_De_Combat':
    		money += 10
    		console.log('Gagner 10€ -> 7€')
    	break;
    }
    var src = $('#itemNumber'+childNumber+' img').attr('src');
    $('#itemNumber'+childNumber).css({background: "linear-gradient(#00bf09, #246b27)"});
    $('#dialog-msg').html("Vous recevez "+reward+" ! ("+money.toFixed(1)+")"+"<br><img src="+src+">");
    $('#dialog').dialog({
      modal: true,
      title: "Nouvel Objet !",
      resizeable: false,
      draggable: false,
      width: 400,
      buttons: {
        "Retirer l'objet":function(){
          $(this).dialog("close");
        },
	"Relancer":function(){
          $(this).dialog("close");
          openCase()
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
