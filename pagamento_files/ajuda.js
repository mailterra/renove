
$(function()
{
	$jumpformduvida = $('#outer #main #listaduvidas #jumpform #url');
	$jumpformduvida.val('');

	$('#outer #main #listaduvidas #jumpform #go').click(function() {
		var val = $($jumpformduvida).val();
		if (val != '') window.open (val, '_blank');
	});
	
	var maxquestions = 20;
	var opened = '';
	
	for (i=1; i<maxquestions; i++) 
	{
		$('#question'+i).click(function() 
		{
			var prevquestion = '#'+opened;
			var prevanswer = '#'+opened.replace('question', 'answer');
			var thisquestion = '#'+$(this).attr('id');
			var thisanswer = '#'+$(this).attr('id').replace('question', 'answer');
			$(thisanswer).show(); 
			$(this).addClass('questionover');
			if (opened != '') { $(prevanswer).hide(); $(prevquestion).removeClass('questionover'); }
			opened = $(this).attr('id');
			if (prevanswer == thisanswer) { $(thisanswer).hide(); opened = ''; $(this).removeClass('questionover'); } //$(this).log(prevanswer); $(this).log(thisanswer);
			return false; 
		});
	};
	
	$('#showall').click(function(){
		for (i=1; i<maxquestions; i++) { $('#answer'+i).show(); $('#question'+i).addClass('questionover'); }
		return false;
	});
	
	$('#closeall').click(function(){
		for (i=1; i<maxquestions; i++) { $('#answer'+i).hide(); $('#question'+i).removeClass('questionover'); }
		$('#outer #main div.question').removeHighlight();
		return false;
	});
	
	var defmsg = 'Digite o que está procurando';
	$('#outer #main #toolbar #searchfield').val(defmsg);
	
	$('#outer #main #toolbar #searchfield').focus(function(){ $(this).val(''); });
	
	$('#outer #main #toolbar #formsearch').submit(function()
	{
		$('#outer #main div.question').removeHighlight();

		var searchstr = $('#outer #main #toolbar #searchfield').val();
		searchstr = searchstr.toLowerCase();
		if (searchstr != '') {
			var allanswers = $('#outer #main div.question').text();
			allanswers = allanswers.toLowerCase();
			var founded = allanswers.match(searchstr);
			var thisquestion = '';
			var titlematches = '';
			var foundedontitle = '';
			var thisanswer = '';
			var contentmatches = '';
			var foundedoncontent = '';
			
			for (i=1; i<maxquestions; i++) { $('#answer'+i).hide(); $('#question'+i).removeClass('questionover'); }
			$('#outer #main #faqalert').hide();
	
			if (searchstr != '' && searchstr != defmsg) 
			{ 
				if (founded) {
					for (i=1; i<maxquestions; i++) { 
						thisquestion = '#question' + i;
						titlematches = $(thisquestion).text(); titlematches = titlematches.toLowerCase();
						foundedontitle = titlematches.match(searchstr);

						thisanswer = '#answer' + i;
						contentmatches = $(thisanswer).text(); contentmatches = contentmatches.toLowerCase();
						foundedoncontent = contentmatches.match(searchstr);

						if (foundedoncontent || foundedontitle) { $(thisanswer).show(); $(thisanswer).addClass('questionover'); /*$(this).log(foundedhere);*/ }
						foundedoncontent = ''; foundedontitle = '';
					} 
					$('#outer #main div.question').highlight(searchstr); /*$(this).log(searchstr);*/ 
				} else { 
					$('#outer #main #faqalert').show();
				} 
			} 
		}
		return false;
	});
});










