$(function(){
	
	//Familly site(점프메뉴)
	$('#idFamilly').on({
		change:	function(){
			location.href=$(this).val();
			//window.open($(this).val());  //새창띄우기
		}
	});
	
	
	//서브배경, 서브메뉴 초기화
	$('.sub, .sub-bg-wrap').stop().slideUp(0);
	$('.mainBt').on({
		mouseenter:	function(){
			$('.sub, .sub-bg-wrap').stop().slideDown(300);
		}
	});
	
	$('#nav').on({
		mouseleave:	function(){
			$('.sub, .sub-bg-wrap').stop().slideUp(300);
		}
	});
	

});  //script.js