$(function(){
	

	//서브배경, 서브메뉴 초기화
	//$('.sub').stop().slideUp(0);
	$('.mainBt').on({
		click:	function(){
			$('.sub').stop().slideUp(300);
			$(this).next('.sub').stop().slideToggle(300);	
		}
	});
	
	//Familly site
	$('#idFamilly').on({
		change:	function(){
			//location.href=$(this).val();  
			window.open($(this).val());   //새창에 띄우기
		}
	});
		
	
	
});  //script.js