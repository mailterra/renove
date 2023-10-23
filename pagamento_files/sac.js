
function writeFooterLinks() { document.write('<div id="rodape"><a target="_blank" href="http://sobreuol.noticias.uol.com.br/">Sobre o UOL</a> | <a target="_blank" href="http://assine.uol.com.br/">Planos de assinatura</a> | <a href="https://sac.uol.com.br/inscricao/solicitar_cancelamento.html">Cancelar produtos e serviços</a> | <a href="https://sac.uol.com.br/inscricao/cancela_email_adicional.html">Cancelar adicionais</a><br /><a href="https://sac.uol.com.br/info/cartilha/index.jhtm">Cartilha de segurança</a> | <a href="https://sac.uol.com.br/info/protecao_privacidade/normas_protecao_privacidade.jhtm">Normas de segurança e privacidade</a></div>'); }

function writeDisclaimer() { document.write('<div id="privac">Sua senha é secreta. Nenhum funcionário do UOL está autorizado a solicitá-la. <a href="http://regras.uol.com.br/" target="_blank" class="under">Regras de uso</a> | <a href="https://sac.uol.com.br/info/protecao_privacidade/politica_anti-spam.jhtm" class="under">Política anti-spam</a> | <a href="http://denuncia.uol.com.br/" target="_blank" class="under">Crimes virtuais: denuncie</a></div>'); }

function GET(getkey) {
	querystring = new Array();
	allkeys = location.search.replace(/\x3F/,"").replace(/\x2B/g," ").split("&");
	if (allkeys!="") {
	    for (i = 0; i < allkeys.length; i++) {
			nvar = allkeys[i].split("=");
			querystring[nvar[0]] = unescape(nvar[1]);
	} }
	return querystring[getkey];
}

$(function() {
	var promo = GET('promo'); if (promo == 'SACPRODUTOS') $('body').removeClass('adicionais');
	$('#auth #col-right #box-form form label.senha').show();
});
