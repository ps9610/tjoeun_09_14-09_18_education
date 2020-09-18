$(function(){
	//슬라이드
	var s=[];
		s[0]=1;
		
		setInterval(nextSlideIf,4000);
		
		function nextSlideIf(){
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
			s[0]=0,s[1]=0,s[2]=0;
			s[0]=1;
			$('.slide').eq(2).stop().animate({opacity:1},0).animate({opacity:0},1000);
			$('.slide').eq(0).stop().animate({opacity:0},0).animate({opacity:1},1000);
			$('.slide').eq(1).stop().animate({opacity:0},0).animate({opacity:0},1000);
		}
	
		function slide1(){
			s[0]=0,s[1]=0,s[2]=0;
			s[1]=1;
			$('.slide').eq(0).stop().animate({opacity:1},0).animate({opacity:0},1000);
			$('.slide').eq(1).stop().animate({opacity:0},0).animate({opacity:1},1000);
			$('.slide').eq(2).stop().animate({opacity:0},0).animate({opacity:0},1000);
		}
		
		function slide2(){
			s[0]=0,s[1]=0,s[2]=0;
			s[2]=1;
			$('.slide').eq(1).stop().animate({opacity:1},0).animate({opacity:0},1000);
			$('.slide').eq(2).stop().animate({opacity:0},0).animate({opacity:1},1000);
			$('.slide').eq(0).stop().animate({opacity:0},0).animate({opacity:0},1000);
		}
	
	


});