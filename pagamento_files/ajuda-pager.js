
$(function()
{
	var $toptabback 	= $('div#box-pager #pager-top #top-tab-back');
	var $pagerbottom	= $('div#pager-bottom');
	var $btnleft 		= $('div#box-pager #btn-left');
	var $btnright 		= $('div#box-pager #btn-right');
	var topprefix 		= 'div#box-pager #pager-top #top-tab-back div.top-tab-front #top-tab-front-center';
	var topnumprefix 	= topprefix + ' #top-num-';
	var helpstepprefix 	= 'div#box-pager #help-content #help-content-txt div.step-';
	var previd 			= 'top-num-1';
	var thisid 			= 'top-num-1';
	var thispage 		= 1;
	var prevpage 		= 1;

	$(topnumprefix + (thispage)).css({ backgroundPosition: "0px -35px" });
	setbtn($btnright, 'right');

	$.each($(topprefix + ' *'), function(i, n){
		$(this).click(function(){
			thisid = $(this).attr('id');
			thispage = thisid.replace('top-num-', '');
			if (thispage != prevpage) 
			{
				showhidestep(thispage, prevpage, helpstepprefix, '');
				if (thispage > 1) setbtn($btnleft, 'left'); else resetbtn($btnleft, 'left');
				if (thispage < maxpages) setbtn($btnright, 'right'); else resetbtn($btnright, 'right'); 
				sinalizetop(thisid, previd, maxpages); 
				previd = thisid;
				prevpage = thispage;
			}
		});	
	});

	$btnright.click(function()
	{
		if (thispage < maxpages) 
		{
			thispage = showhidestep(thispage, prevpage, helpstepprefix, 'increase');
			if (thispage > 1) { setbtn($btnright, 'right'); setbtn($btnleft, 'left'); } 
			if (thispage == maxpages) resetbtn($btnright, 'right'); 
			previd = sinalizetop('top-num-' + thispage, previd, maxpages); 
			prevpage = thispage;
		}
	});

	$btnleft.click(function() 
	{
		if (thispage > 1) 
		{
			thispage = showhidestep(thispage, prevpage, helpstepprefix, 'decrease');
			if (thispage > 1) setbtn($btnleft, 'left'); setbtn($btnright, 'right'); 
			if (thispage == 1) resetbtn($btnleft, 'left'); 
			previd = sinalizetop('top-num-' + thispage, previd, maxpages); 
			prevpage = thispage;
		}
	});
});

function setbtn($btn, that) 
{
	var xyover = '';
	var xyout = '';
	$btn.css({ cursor: "pointer" });
	if (that == 'right') { xyover = "-31px -70px"; xyout = "-97px -70px"; } else { xyover = "0px -70px"; xyout = "-66px -70px"; } 
	$btn.mouseover(function(){ $btn.css({ backgroundPosition: xyover }); });
	$btn.mouseout(function(){ $btn.css({ backgroundPosition: xyout }); });
}

function resetbtn($btn, that) 
{
	var xy = '';
	$btn.css({ cursor: "default" });
	if (that == 'right') { xy = "-97px -70px"; } else { xy = "-66px -70px"; } 
	$btn.css({ backgroundPosition: xy });
	$btn.mouseover(function(){ $btn.css({ backgroundPosition: xy }); });
	$btn.mouseout(function(){ $btn.css({ backgroundPosition: xy }); });
}

function sinalizetop(thisid, previd, maxpages) 
{
	if (thisid == 'top-num-1') $('#'+thisid).css({ backgroundPosition: "0px -35px" });
	if (thisid != 'top-num-1' && thisid != 'top-num-' + maxpages) $('#'+thisid).css({backgroundPosition: "-34px -35px" });
	if (thisid == 'top-num-' + maxpages) $('#'+thisid).css({backgroundPosition: "-66px -35px" });
	if (previd != '' && previd != thisid) 
	{
		$('#' + previd).css({backgroundPosition: "-34px 0px" });
		if (previd == 'top-num-1') $('#'+previd).css({ backgroundPosition: "0px 0px" });
		if (previd == 'top-num-' + maxpages) $('#'+previd).css({ backgroundPosition: "-66px 0px" });
	}
	return thisid;
}

function showhidestep(thispage, prevpage, helpstepprefix, dir)
{
	if (dir == 'increase') thispage++; else if (dir == 'decrease') thispage--; 
	$(helpstepprefix + thispage).show();
	$(helpstepprefix + prevpage).hide();
	return thispage;
}

/* 
	$(this).log('xyover: ' + xyover + ' :: ' + xyout) 
	$(this).log('thisid: ' + thisid + ' :: previd: ' + previd + ' :: thispage: ' + helpstepprefix + thispage + ' :: prevpage: ' + helpstepprefix + prevpage);
*/
