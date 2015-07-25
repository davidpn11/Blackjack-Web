

var playerName;
var botaoInicia = document.querySelector('#iniciar-jogo');
var janelaInicial = document.getElementById('game-begin');
var fundo = document.getElementById('fundo');

botaoInicia.addEventListener('click', function (event) {
	
	startBaralho();
    playerName = document.getElementById('player-name').value;        
    janelaInicial.style.visibility = "hidden";
    fundo.style.visibility = "hidden";
    
    var elements = document.getElementsByClassName('hidden-class');
	for (var i in elements) {
  		if (elements.hasOwnProperty(i)) {
    		elements[i].className = 'show-class';
  		}  	
	}
});

x.setCarta();


var nipe = ['copa','paus','ouros','espadas'];
var tipo = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function carta(nipe, tipo, valor){
	this.nipe = nipe;
	this.tipo = tipo;
	this.valor = valor;
}


var baralho = [];
var count=0;


function startBaralho(){
	baralho = [];	
	var temp;
	for(var i = 0; i < nipe.length; i++){
		for(var j = 0; j < tipo.length; j++){
			
			if(j > 9 ){
				temp = new carta(nipe[i], tipo[j], 10);
			
			} else{
				temp = new carta(nipe[i], tipo[j], j + 1);
			}

			baralho.push(temp);
		}
	}
}

function setCarta(nipe,valor,posicao){


	var c = document.getElementsByClassName("carta")[posicao];

	c.getElementsByClassName("carta-tipo")[0].innerHTML = valor;
	var cartaImagem = c.getElementsByClassName("carta-imagem")[0];


	if(nipe == 'copa'){
		cartaImagem.src = "images/hearts.png";

	}else if(nipe == 'paus'){
		cartaImagem.src = "images/clubs.png";

	}else if(nipe == 'ouros'){
		cartaImagem.src = "images/diamonds.png";

	}else if(nipe == 'espadas'){
		cartaImagem.src = "images/espadas.png";
	}
}

setCarta('paus', 'K',0);
	





