	//자바스크립트로 직접 html 태그에서 직접 클릭하고 함수를 호출해서 점프메뉴를 사용하는 방식
	function familyGoUrl(url){
		location.href=url; 
	}



$(function(){
	
	//패밀리사이트 GO버튼을 클릭해서 해당사이트로 이동 하는 방식 
	/*
	$('.familyGoBt').on({  //GO버튼
		click:	function(){
			goUrl=$('#idfamilysite').val();  //선택자 Select 아이디 선택된 내용(url)
			//location.href=goUrl;   //현재창에 사이트 열어준다
			window.open(goUrl);			//새창에 사이트 열어주기
		}
	});
	*/
	
	//패밀리사이트 점프메뉴 셀렉트 목록상자(List box) - 클릭 그리고 목록중에서 선택 - change
	/*
	$('#idfamilysite').on({  //Select 바로 선택하는경우는 반드시 change 이벤트를 사용한다.
		change:	function(){
			listUrl=$(this).val();
			if(listUrl==''){
				return false;
			}
			else{
				location.href=listUrl;
				//window.open(listUrl);				
			}
		}
	});
	*/
	
	/*
	$('#idfamilysite').on({  //목록에 값을 문자로 입력한경우
		change:	function(){
			listUrl=$(this).val();


			else if(listUrl=='네이버'){
				location.href='https://www.naver.com/';	
			}
			else if(listUrl=='링컨코리아'){
				location.href='https://www.lincoln-korea.com/';	
			}
		}
	});
	*/
	
	
	
	
	
	
	
	
	
	//메인메뉴 GNB 서브메뉴와 서브배경
	$('.nav-sub-bg,.sub').stop().slideUp(0);
	
	$('.mainBt').on({
		mouseenter:	function(){
			$('.nav-sub-bg,.sub').stop().slideDown(300);
		},
		focusin:	function(){
			$('.nav-sub-bg,.sub').stop().slideDown(300);
		}
	});
	
	$('#nav').on({
		mouseleave:	function(){
			$('.nav-sub-bg,.sub').stop().slideUp(300);
		}
	});

	//탭키 접근시(focusin) 접힌다.	
	$('.logoBt,.tabNoticeBt').on({
		focusin:	function(){
			$('.nav-sub-bg,.sub').stop().slideUp(300);
		}
	});
	
		
	
	//탭메뉴 (공지사항, 새소식)
	$('.tabNewsBt').on({
		click:	function(){
			$('.notice').addClass('addClassBoard');
			$('.news').addClass('addClassBoard');
			$('.tabNoticeBt').addClass('addClassBoard');
			$('.tabNewsBt').addClass('addClassBoard');
		}
	});
	$('.tabNoticeBt').on({
		click:	function(){
			$('.notice').removeClass('addClassBoard');
			$('.news').removeClass('addClassBoard');
			$('.tabNoticeBt').removeClass('addClassBoard');
			$('.tabNewsBt').removeClass('addClassBoard');
		}
	});
	


	
	
	//모달 갤러리
	//모달창 열기
	$('.galleryBt').on({
		click:	function(){
			$('.modal').show(0);
		    imgName=$(this).find('img').attr('src');
		    $('.modal-wrap>img').attr('src',imgName);
		},
		mouseenter:	function(){
			$('.galleryBt img').removeClass('addClassGray');
			$(this).children().addClass('addClassGray');
		},
		mouseleave:	function(){
			$(this).children().removeClass('addClassGray');
		},
		focusin:	function(){ //focus
			$('.galleryBt img').removeClass('addClassGray');
			$(this).children().addClass('addClassGray');
		},
		focusout:	function(){  //blur
			$(this).children().removeClass('addClassGray');
		}
	});
	
	//모달창 닫기
	$('.modalCloseBt').on({
		click:	function(){
			$('.modal').hide(0);
		}
	});
	
	
	
	
	
	
	
	
	
});