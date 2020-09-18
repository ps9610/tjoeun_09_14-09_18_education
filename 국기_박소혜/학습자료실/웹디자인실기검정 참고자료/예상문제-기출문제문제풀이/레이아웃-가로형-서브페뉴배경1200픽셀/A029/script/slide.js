$(function(){
	var s=[];	
		s[0]=1;
		
	setInterval(nextSlide,3000);
		
	function nextSlide(){
		if(s[0]==1){
			slide1();
		}
		else if(s[1]==1){
			slide2();
		}
		else if(s[2]==1){
			slide0();
		}
	}
	
	
	function slide0(){
		s[0]=1,s[1]=0,s[2]=0;		
		$('.slide').eq(2).stop().animate({left:  '0%'},0).animate({left:'-100%'},600);
		$('.slide').eq(0).stop().animate({left:'100%'},0).animate({left:   '0%'},600);
		$('.slide').eq(1).stop().animate({left:'200%'},0).animate({left: '100%'},600);
	}
	function slide1(){
		s[0]=0,s[1]=1,s[2]=0;		
		$('.slide').eq(0).stop().animate({left:  '0%'},0).animate({left:'-100%'},600);
		$('.slide').eq(1).stop().animate({left:'100%'},0).animate({left:   '0%'},600);
		$('.slide').eq(2).stop().animate({left:'200%'},0).animate({left: '100%'},600);
	}
	function slide2(){
		s[0]=0,s[1]=0,s[2]=1;		
		$('.slide').eq(1).stop().animate({left:  '0%'},0).animate({left:'-100%'},600);
		$('.slide').eq(2).stop().animate({left:'100%'},0).animate({left:   '0%'},600);
		$('.slide').eq(0).stop().animate({left:'200%'},0).animate({left: '100%'},600);
	}
	

});  //slide.js