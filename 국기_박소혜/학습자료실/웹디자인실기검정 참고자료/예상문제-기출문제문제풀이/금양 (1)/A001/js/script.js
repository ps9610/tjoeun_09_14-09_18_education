$(function(){
	/* 가이드 텍스트 설정 */
	$('.guideText').each(function(){
		var guide=$(this).attr('title');
		$('.guideText').css('color','gray');
		$(this).val(guide)
		
		$('.guideText').focus(function(){
			$(this).val('');
			$(this).css('color','black');
		})
		$('.guideText').blur(function(){	
			var guide=$(this).attr('title');
			$(this).val(guide)
			$(this).css('color','gray');
		})
	});
	
	/* 메인 이미지 설정 */
	
	var slider=function(){
		$('#imgs').animate({'bottom': '-390px'},500,function(){
			$('#imgs div:last').prependTo($(this));
			$(this).css('bottom',0);
		});
	};
	var timer=setInterval(slider,3000);
	
	/* 모달창 제작 설정 */
	$('.modal').click(function(){
		$('#pop').addClass('open');
	});
	$('#pop input').click(function(){
		$('#pop').removeClass('open');
	});
});