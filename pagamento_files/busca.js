	function escreveBusca (ref) {
	
		if (typeof ref == "undefined") {
			var ref = "";
		}
	
		var c = '';
	
		c += '<div id="barra-estacao-busca" class="ativa-busca-web">';
			c += '<form name="busca-uol" id="busca-uol" action="http://busca.uol.com.br/www/index.html" method="get" target="_blank" onsubmit="if(typeof omnitureSearchTerm != \'undefined\'){omnitureSearchTerm(this.q.value)}">';
				c += '<div id="busca-divisoes">';
					c += '<p>';
						c += '<label for="q"><a href="http://busca.uol.com.br/" title="UOL Busca" target="_blank">UOL Busca</a></label>';
					c += '</p>';
					c += '<ul>';
						c += '<li class="busca-web"><a href="javascript:defineAbaBusca(\'ativa-busca-web\', \'indica-web\');">Web</a></li>';
						c += '<li class="busca-noticias"><a href="javascript:defineAbaBusca(\'ativa-busca-noticias\', \'indica-noticias\');">Not&iacute;cias</a></li>';
						c += '<li class="busca-imagens"><a href="javascript:defineAbaBusca(\'ativa-busca-imagens\', \'indica-imagens\');">Imagens</a></li>';
						c += '<li class="busca-videos"><a href="javascript:defineAbaBusca(\'ativa-busca-videos\', \'indica-videos\');">V&iacute;deos</a></li>';
						c += '<li class="busca-shopping ultimo"><a href="javascript:defineAbaBusca(\'ativa-busca-shopping\', \'indica-shopping\');">Shopping</a></li>';
					c += '</ul>';
				c += '</div>';
				c += '<div id="busca-indicador" class="indica-web"></div>';
				c += '<input type="hidden" name="skin" id="skin" value="news" disabled="disabled" />';
				c += '<input type="hidden" name="id" id="bid" value="1" disabled="disabled" />';
				c += '<input type="hidden" name="rd" id="rd" value="1" disabled="disabled" />';
				c += '<input type="hidden" name="ad" id="ad" value="on" />';
				c += '<input type="hidden" name="ref" id="ref" value="' + ref + '" />';
				c += '<p id="caixa-busca">';
					c += '<input type="text" name="q" id="multi-q" class="caixa-busca" /> ';
		    	c += '<input value="Buscar" type="submit" class="busca-enviar" />';
				c += '</p>';
			c += '</form>';
		c += '</div>';
		
		document.write (c);
	
	}
	
	function defineAbaBusca (aba, marcador) {
		document.getElementById("barra-estacao-busca").className = aba;
		document.getElementById("busca-indicador").className = marcador;
		document.getElementById("multi-q").focus();
		switch (aba) {
			case 'ativa-busca-web' :
				document.getElementById("busca-uol").action = "http://busca.uol.com.br/www/index.html";
				document.getElementById("multi-q").className = "caixa-busca";
				document.getElementById("skin").disabled = "disabled";
				document.getElementById("bid").disabled = "disabled";
				document.getElementById("rd").disabled = "disabled";
				break;
			case 'ativa-busca-noticias' :
				document.getElementById("busca-uol").action = "http://noticias.busca.uol.com.br/uol/index.html";
				document.getElementById("multi-q").className = "caixa-busca";
				document.getElementById("skin").disabled = "";
				document.getElementById("bid").disabled = "";
				document.getElementById("rd").disabled = "";
				break;
			case 'ativa-busca-imagens' :
				document.getElementById("busca-uol").action = "http://busca.uol.com.br/imagem/index.html";
				document.getElementById("multi-q").className = "caixa-busca";
				document.getElementById("skin").disabled = "disabled";
				document.getElementById("bid").disabled = "disabled";
				document.getElementById("rd").disabled = "disabled";
				break;
			case 'ativa-busca-videos' :
				document.getElementById("busca-uol").action = "http://busca.uol.com.br/video/index.html";
				document.getElementById("multi-q").className = "caixa-busca";
				document.getElementById("skin").disabled = "disabled";
				document.getElementById("bid").disabled = "disabled";
				document.getElementById("rd").disabled = "disabled";
				break;
			case 'ativa-busca-shopping' :
				document.getElementById("busca-uol").action = "http://shopping.busca.uol.com.br/busca.html";
				document.getElementById("multi-q").className = "caixa-busca";
				document.getElementById("skin").disabled = "disabled";
				document.getElementById("bid").disabled = "disabled";
				document.getElementById("rd").disabled = "disabled";
				break;
		}
	}









