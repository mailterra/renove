
function abre_fale() {
	window.open ("https://sac.uol.com.br/info/enviaemail.jhtm","envia","width=400,height=510");
}

function jumpTo(url) {
window.open('https://cadastro.uol.com.br/info/popup/'+url,'plano','toolbar=no,location=no,directories=no,status=no,scrollbars=yes,menubar=no,resizable=no,width=420,height=400,left=380')
}

function checkClass(c,o) {
	var re=new RegExp('\\b'+c+'\\b');
	return re.test(o.className);
}

function zebrarElementos(alvo, elementos) {

	var ultima_linha = "a", ultima_classe = "a", ultima_altura;
	
	if ( typeof alvo      == "undefined" ||
		   typeof elementos == "undefined" )
		return;
	
	if (!document.getElementById(alvo))
		return;
	
	alvo = document.getElementById(alvo);
	
	elementos = alvo.getElementsByTagName(elementos);
	total = elementos.length;
	
	for (var k = 0; k < total; k++) {
		if ( findPosY (elementos[k]) != ultima_altura) {
			ultima_linha = (ultima_linha == "b") ? "a" : "b";
			ultima_classe = (ultima_linha == "b") ? "a" : "b";
		}
		else {
			ultima_classe = (ultima_classe == "b") ? "a" : "b";
		}
		ultima_altura = findPosY (elementos[k]);
		var er = /\s[ab]\s/;
		
		if (elementos[k].className == "")
			elementos[k].className = "a";

		if ((" "+elementos[k].className+" ").match(/\s[ab]\s/) == null) elementos[k].className += " a ";
		
		elementos[k].className = (" " + elementos[k].className + " ").replace ( er , " " + ultima_classe + " " );
	}

}

function zebradora() {

	var alvos     = ['div'];
	var elementos = ['div'];

	for (var indice in alvos) {

		var itens = document.getElementsByTagName( alvos[indice] );
		var total = itens.length;

		for (var k = 0; k < total; k++) {;
			if ( (" " + itens[k].className + " ").indexOf (" zebrar ") == -1 )
				continue;
			zebrarElementos(itens[k], elementos[indice]);

		}

	}

}

function findPosY(obj) {
	var curtop = 0;
	if (obj.offsetParent) {
		while (obj.offsetParent) {
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	} else if (obj.y) {
		curtop += obj.y;
	}
	return curtop;
}

function checkCAUBR01() {
	if (document.cookie.match(/CAUBR01=[a-zA-Z0-9\+\/]{4,}/gi)) {
		return true;
	}
	return false;
}
