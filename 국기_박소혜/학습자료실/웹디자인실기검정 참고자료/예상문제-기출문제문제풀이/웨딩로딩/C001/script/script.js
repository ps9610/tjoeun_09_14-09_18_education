$(function(){
	$('.menu>li').hover(function(){
		$(this).find('.sub').stop().slideDown()
	},
	function(){
				$(this).find('.sub').stop().slideUp()

	}
	);
	var n=0;
	var img=$('#main ul li');
	setInterval(function(){
		var first=img.eq(n);
		slide(first,'0','100%');
		n++;
		if(n==img.size()){n=0}
		var lase=img.eq(n);
		slide(lase,'-100%','0');
		function  slide(tg,start,end){
			tg.css('left',start).animate({left:end},500)
		}
	},2000)
$('.ad1').click(function(e){
e.preventDefault;
$('#pop1').show();
$('.x').click(function(){
$('#pop1').hide();
	});	
});

$('.ad2').click(function(e){
e.preventDefault;
$('#pop2').show();
$('.x').click(function(){
$('#pop2').hide();
	});	
});
});

