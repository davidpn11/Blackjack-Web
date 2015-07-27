

var playerName = document.getElementById("player-name");
var saldoPlayer = document.getElementById("saldo-player");
//var botaoInicia = document.querySelector('#iniciar-jogo');
var janelaInicial = document.getElementById('game-begin');
var fundo = document.getElementById('fundo');
var fazerAposta = document.getElementById('fazerAposta');
var aposta = document.getElementById('aposta');
var continuaAposta = document.getElementById('continua-aposta');

botaoInicia.addEventListener('click', function (event) {
	
	startBaralho();
    playerName.innerHTML = "<strong>"+document.getElementById('getPlayer-name').value+"</strong>";        
    setSaldo(1000);
    janelaInicial.style.visibility = "hidden";
    fundo.style.visibility = "hidden";
    

});

var valorAposta;

fazerAposta.addEventListener('click',function(event){
    valorAposta = document.getElementById('valorAposta').value;
    aposta.style.display = 'none';
    continuaAposta.style.display = 'inherit';
    
});




var nipe = ['copa','paus','ouros','espadas'];
var tipo = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var baralho = [];
var count=0;


function carta(nipe, tipo, valor){
	this.nipe = nipe;
	this.tipo = tipo;
	this.valor = valor;
}

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

function setSaldo(valueSaldo){
	saldoPlayer.innerHTML = "<strong>Saldo:</strong> "+ valueSaldo;
}

setCarta('paus', 'K',0);
	





