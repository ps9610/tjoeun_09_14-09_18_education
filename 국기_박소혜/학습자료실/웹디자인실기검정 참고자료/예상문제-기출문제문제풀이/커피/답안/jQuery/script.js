$(function(){
	$('#menu>ul>li').hover(function(){
		$(this).find('.sub').stop().slideDown();
	},function(){
		$(this).find('.sub').stop().slideUp();
	});
	
	var current=0;
	var banner=$('#slide img');
	setInterval(function(){
		var prev=banner.eq(current);
		move(prev,0,'-100%');
		current++;
		if(current==banner.length){current=0;}
		var next=banner.eq(current);
		move(next, '100%',0);
	},2000);
	function move(tg, start, end){
		tg.css('left',start).stop().animate({left:end},500);
	}
	
	$('.btn').click(function(){
		$('#pop').fadeIn();
	});
	$('button').click(function(){
		$('#pop').fadeOut();
	});
	
	
	
	
	
});