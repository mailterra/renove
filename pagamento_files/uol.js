function uolbarCombo()
{
var uolEst = new Array('fotos.uol.com.br/','&Aacute;lbum de Fotos',
'seguranca.uol.com.br/','Antiv&iacute;rus e Firewall',
'ferramentas.uol.com.br/','Aplicativos',
'assistenciatecnica.uol.com.br/','Assist&ecirc;ncia T&eacute;cnica',
'diversao.uol.com.br/bandalarga/','Banda Larga',
'batepapo.uol.com.br/','Bate-papo UOL',
'estilo.uol.com.br/beleza/','Beleza',
'biblioteca.uol.com.br/','Biblioteca',
'bichos.uol.com.br/','Bichos',
'blog.uol.com.br/','Blogosfera',
'busca.uol.com.br/','Busca',
'carros.uol.com.br/','Carros',
	'carros.uol.com.br/fipe/','&nbsp;&nbsp;- Tabela Fipe',
	'compare.carros.uol.com.br/','&nbsp;&nbsp;- Comparar Carros',
'cartoes.uol.com.br/','Cart&otilde;es',
'casaeimoveis.uol.com.br/','Casa e Im&oacute;veis',
'celebridades.uol.com.br/','Celebridades',
'celular.uol.com.br/','Celular',
'cienciaesaude.uol.com.br/','Ci&ecirc;ncia e Sa&uacute;de',
'cinema.uol.com.br/','Cinema e Filmes',
'clube.uol.com.br/','Clube UOL',
'shopping.uol.com.br/?&rtrk=src:13;size:18;chn:0;creative:link_fixo;thm:shopping_menu;','Comparar Pre&ccedil;os',
'copadomundo.uol.com.br/','Copa do Mundo',
'criancas.uol.com.br/','Crian&ccedil;as',
'downloads.uol.com.br/','Downloads',
'economia.uol.com.br/','Economia',
	'economia.uol.com.br/cotacoes/','&nbsp;&nbsp;- Cota&ccedil;&otilde;es',
	'uolinvest.economia.uol.com.br/','&nbsp;&nbsp;- UOL Invest',
'educacao.uol.com.br/','Educa&ccedil;&atilde;o',
	'educacao.uol.com.br/dicionarios/','&nbsp;&nbsp;- Dicion&aacute;rios',
	'vestibular.uol.com.br/','&nbsp;&nbsp;- Vestibular',
'eleicoes.uol.com.br/','Elei&ccedil;&otilde;es 2010',
'email.uol.com.br/','E-Mail',
'noticias.uol.com.br/empregos/','Empregos',
	'empregocerto.uol.com.br/','&nbsp;&nbsp;- Enviar curr&iacute;culo',
'entretenimento.uol.com.br/','Entretenimento',
	'guia.uol.com.br/','&nbsp;&nbsp;- Guia Cultural SP',
'esporte.uol.com.br/','Esporte',
	'bolao.esporte.uol.com.br/','&nbsp;&nbsp;- Bol&atilde;o',
	'esporte.uol.com.br/futebol/campeonatos/brasileiro/2010/serie-a/','&nbsp;&nbsp;- Brasileir&atilde;o',
	'esporte.uol.com.br/f1/','&nbsp;&nbsp;- F&oacute;rmula 1',
	'esporte.uol.com.br/futebol/','&nbsp;&nbsp;- Futebol',
	'esporte.uol.com.br/futebol/campeonatos/libertadores/2010/','&nbsp;&nbsp;- Libertadores',
'estilo.uol.com.br/','Estilo',
	'estilo.uol.com.br/moda/','&nbsp;&nbsp;- Moda',
'www.folha.uol.com.br/','Folha.com', 
'fotoblog.uol.com.br/','Fotoblog',
'gay.uol.com.br/','Gay',
	'clicklogger.rm.uol.com.br/?prd=29&grp=src:28;chn:0;creative:menu-home-gay&msr=Cliques%20de%20Origem:1&oper=11&redir=http://mig.uol.com.br/?skin=mig','&nbsp;&nbsp;- Namoro gay',
'horoscopo.uol.com.br/','Hor&oacute;scopo',
'humor.uol.com.br/','Humor',
'indice.uol.com.br/','&Iacute;ndice',
'jogos.uol.com.br','Jogos',
	'jogos.uol.com.br/jogosonline/','&nbsp;&nbsp;- Jogos Online',
	'jogos.uol.com.br/loja/','&nbsp;&nbsp;- Loja de jogos',
'noticias.uol.com.br/jornais/','Jornais',
	'noticias.uol.com.br/internacional/','&nbsp;&nbsp;- Internacionais',
'jovem.uol.com.br','Jovem',
'mapas.uol.com.br/','Mapas',
'musica.uol.com.br/','M&uacute;sica',
	'musica.uol.com.br/artistas/','&nbsp;&nbsp;- Artistas',
'namoro.uol.com.br/','Namoro',
'noticias.uol.com.br/','Not&iacute;cias',
	'noticias.uol.com.br/cotidiano/','&nbsp;&nbsp;- Cotidiano',
	'noticias.uol.com.br/internacional/','&nbsp;&nbsp;- Internacional',
	'noticias.uol.com.br/jornais/','&nbsp;&nbsp;- Jornais',
	'noticias.uol.com.br/politica/','&nbsp;&nbsp;- Pol&iacute;tica',
	'noticias.uol.com.br/ultnot/noticias.jhtm','&nbsp;&nbsp;- &Uacute;ltimas Not&iacute;cias',
'www.radio.uol.com.br/','R&aacute;dio UOL',
'receitas.uol.com.br/','Receitas',
'noticias.uol.com.br/revistas/','Revistas',
'sac.uol.com.br/','SAC',
'servicos.uol.com.br/','Servi&ccedil;os',
'sexo.uol.com.br/','Sexo',
'sites.uol.com.br/','Sites Pessoais',
'tecnologia.uol.com.br/','Tecnologia',
'televisao.uol.com.br/','Televis&atilde;o',
	'televisao.uol.com.br/novelas.jhtm','&nbsp;&nbsp;- Novelas',
	'televisao.uol.com.br/programacao/','&nbsp;&nbsp;- Programa&ccedil;&atilde;o',
'www3.uol.com.br/tempo/','Tempo e Tr&acirc;nsito',
'tvuol.uol.com.br/','TV UOL',
'uolk.uol.com.br/','UOL K',
'mais.uol.com.br/','UOL Mais',
'viagem.uol.com.br/','Viagem',
'tvuol.uol.com.br/','V&iacute;deos',
'voip.uol.com.br/','Voip',
'wifi.uol.com.br/','Wi-Fi');

var printer='<option value=0>&Iacute;NDICE PRINCIPAL</option>';
for(var i=0;i<uolEst.length;i+=2) {
if (uolEst[i] == "shopping.uol.com.br/") uolEst[i] += '?&rtrk=src:13;sze:18;chn:103;creative:link_fixo;thm:barra_navegacao' + form_name_seed;
printer+='<option value='+uolEst[i]+'>'+uolEst[(i+1)]+'</option>';
}
return printer;
}

getParseJSURL = function(src){
  window['_REQUEST'] = [];
  var obj=_REQUEST;
  src.replace(/([^=&?]+)=([^&]+)/g,function(match,key,value,a){obj[key]=unescape(value).replace(/\+/g,'%20').replace(/</g,'&lt;').replace(/>/g,'&gt;')});
}

getParseJSURL(document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1].src);
var refbusca = (typeof _REQUEST['refbusca'] == "undefined") ? "barrauol" : _REQUEST['refbusca'];

var form_name_seed;
var dC = document;
var style_inline = (!dC.getElementById&&!dC.all) ? '' : 'display:inline;'; // ns4

function writeUOLBar()
{
form_name_seed = (form_name_seed) ? 2 : 1 ;
barImage1 = (arguments.length>0) ? arguments[0] : 20 ;
barColor1 = (arguments.length>1) ? arguments[1] : "gray" ;
barColor2 = (arguments.length>2) ? arguments[2] : "black" ;

dC.write('<style>#uolbar .uolbarl {font:normal 10px arial;} #uolbar .uolbarl2 {font:bold 10px verdana,sans-serif} #uolbar .l, .uolbarl2 { color:white;text-decoration:none; } #uolbar .l:hover, .uolbarl2:hover { text-decoration:underline;color:white; }');
if (navigator.appName.indexOf('Netscape')==-1)	dC.write('#uolbar .uolbarl { height:24px;padding-top:6px; }');
else dC.write('#uolbar .uolbarl { height:19px;padding-top:5px;display:block; } #uolbar .uolbarl2 {height:19px;display:block;}');
dC.write('#uolbar { background-image:url(https://simg.uol.com.br/barra/b/uolbg.gif);background-color:#0A3B6C; }');
dC.write('#uolbar a { color:white; text-decoration:none; }');
dC.write('#uolbar .b1, .b2 { text-align:center;border-right:1px solid #02264B;vertical-align:middle; } ');
dC.write('#uolbar #b3 { text-align:center;vertical-align:middle; } ');
dC.write('#uolbar td.prod { background-image:none; background-color:#50728E; font:normal 13px arial;}');
dC.write('#uolbar a:visited { color:white; }');
dC.write('#uolbar form {display:inline;}');
dC.write('#uolbar .ico {cursor:default;left:130px;_left:-33px; padding:0;top:0;position:absolute; }');
dC.write('#uolbar form .it {font-size:10px;border:1px solid #50728E;float:left;margin:0 0 0 3px;height:16px;padding:0;width:122px;}');
dC.write('#uolbar #uols1, #uols2 { font-family:arial,sans-serif;font-size:10px;width:144px; } </style>');

dC.write('<table cellpadding=0 cellspacing=0 border=0 width=760 id=uolbar height=24><tr>'
+'<td class=b1 width=64><a href=http://click.uol.com.br/?rf=barrageral&u=http://www.uol.com.br/ style=width:64px; target=_top><img src=https://simg.uol.com.br/barra/b/uol.gif border=0 height=17></a></td>'
+'<td class=b1 width=126><a href=http://click.uol.com.br/?rf=barrageral&u=http://clicklogger.rm.uol.com.br/?prd=1&grp=src:10;creative:barrauol&msr=Cliques%20de%20Origem:1&oper=11&redir=http://assine.uol.com.br/index.htm?eos=yes&promo=117570810&sg=300016192&sa=UOL-barra-assine&promochild=PROMOCOMBIAVSS class=uolbarl style=width:126px; target=_top>ASSINE 0800 703 3000</a></td>'
+'<td class=b1 width=203><div style="position:relative;"><form name="formbbuol'+form_name_seed+'" target="_blank" method="get" action="http://busca.uol.com.br/www/index.html" onSubmit="buscaClick()"><input type="hidden" value="on" name="ad"/><input type="hidden" value="'+refbusca+'" name="ref"/><input type="hidden" value="barrauol" name="origem"/><input type="text" class="it" name="q"/><a class="ico" href="javascript:document.formbbuol'+form_name_seed+'.submit();"><img border="0" src="https://simg.uol.com.br/barra/b/bt_buscar.gif" /></a></form></div></td>'
+'<td class=b1 width=70><a href=http://click.uol.com.br/?rf=barrageral&u=http://batepapo.uol.com.br/ class=uolbarl style=width:70px; target=_top>BATE-PAPO</a></td>'
+'<td class=b1 width=45><a href=http://click.uol.com.br/?rf=barrageral&u=http://email.uol.com.br/ class=uolbarl style=width:45px; target=_top>E-MAIL</a></td>'
+'<td class=b1 width=35><a href=http://click.uol.com.br/?rf=barrageral&u=https://sac.uol.com.br/ class=uolbarl style=width:35px; target=_top>SAC</a></td>'
+'<td class=b1 width=60><a href=http://click.uol.com.br/?rf=barrageral&u=http://shopping.uol.com.br/?&rtrk=src:13;sze:18;chn:103;creative:link_fixo;thm:barra_navegacao'+form_name_seed+' class=uolbarl style=width:60px; target=_top>SHOPPING</a></td>'
+'<td id=b3 width=152><font face=arial size=1><form name=fm_uol'+form_name_seed+'><select style="background-color:#50728E; color:#fff; border:0.1em solid #7F9DB9" name=sel_uol0 id=uols'+form_name_seed+' onchange=openEs('+form_name_seed+')>'+ uolbarCombo() +'</select></font></td>'
+'</form></tr></table>');
}

function openEs(form_name_seed)
{
eval("var op = document.fm_uol"+form_name_seed+".sel_uol0[document.fm_uol"+form_name_seed+".sel_uol0.selectedIndex].value");
if(op!=0) parent.top.location = 'http://click.uol.com.br/?rf=barrageral-drop&u=http://'+op;
}

function writeCopyRight()
{
dC.write("<table width=760 cellspacing=0 cellpadding=6 border=0><tr><Td align=center id=copyright>&copy; 1996-2010 UOL - O melhor conte&uacute;do. Todos os direitos reservados.</TD></tr></table>");
}

function writeCSS(dir)
{
if(!dir) var dir='';
dC.write('<link rel=stylesheet href='+dir+'style-'+ ((navigator.appName.indexOf('Netscape')==-1)?'ie':'mz') +'.css>');
}

function buscaClick() {
	var busclick = document.createElement('img');
	document.getElementsByTagName('body')[0].appendChild(busclick);
	busclick.src = 'http://click.uol.com.br/?rf=buscaBarraUOL&u=http://home.img.uol.com.br/h3/x.gif';
}

// EOF
