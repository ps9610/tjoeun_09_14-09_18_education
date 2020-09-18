<?
$g5_path=".";
$g5[title]="hschool.co.kr";
include_once(G5_LIB_PATH.'/_common.php');
include_once(G5_LIB_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
?>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="/shortcut icon" href="favicon.ico">
<link rel="apple-touch-icon-precomposed" href="/icon57.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/icon114.png">
<link href="http://fonts.googleapis.com/css?family=Henny+Penny" rel="stylesheet" />
<title>펜션을 찾아 주셔서 감사합니다.</title>
<script src="http://ashram777.dothome.co.kr/project21/js/jquery-1.11.0.min.js"></script>
<script src="http://ashram777.dothome.co.kr/project21/js/responsiveslides.min.js"></script>
<script src="http://ashram777.dothome.co.kr/project21/js/slides.js"></script> 
<!--첫번째 IE9 이전 버전에 HTML5 로딩 방법-->
<!--두번째 IE9 이전 버전에 CSS3 로딩 방법-->
<!--Upgrade MSIE5.5-6 to be compatible with MSIE7-->
<!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/css3-mediaqueries.js"></script>
<![endif]-->
<!--[if lte IE 7.0]>
    <script src="js/imgSizer.js"></script>
<![endif]-->
	<script>
		function mkwin(){
			window.open('map.html','','toolbar=no, width=610, height=410');
		}
	</script>
    <link rel="stylesheet" href="http://ashram777.dothome.co.kr/project21/css/reset.css">
    <link rel="stylesheet" href="http://ashram777.dothome.co.kr/project21/css/base.css">
    <link rel="stylesheet" href="http://ashram777.dothome.co.kr/project21/css/index.css">
    <link rel="stylesheet" href="http://ashram777.dothome.co.kr/project21/css/slides.css">
    <style type="text/css">
        @import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
    </style>
</head>

<body>
	<div id="stage">
		<header id="header" class="cf">
			<ul id="s_nav" class="cf">
				<li class="menu"><a href="#" onFocus="blur()"><img src="http://ashram777.dothome.co.kr/project21/icon/icon1_on.png" alt="메인"></a></li>
				<li class="menu"><a href="http://ashram777.dothome.co.kr/project21/room/room.html" onFocus="blur()"><img src="http://ashram777.dothome.co.kr/project21/icon/icon2.png" alt="룸정보"></a></li>
				<li class="menu"><a href="http://ashram777.dothome.co.kr/project21/reserve/contact.html" onFocus="blur()"><img src="http://ashram777.dothome.co.kr/project21/icon/icon3.png" alt="예약/문의"></a></li>
				<li class="menu"><a href="tel:01055550288" onFocus="blur()"><img src="http://ashram777.dothome.co.kr/project21/icon/icon4.png" alt="전화예약"></a></li>
				<li class="menu"><a href="" target="_blank" id="map" onFocus="blur()"><img src="http://ashram777.dothome.co.kr/project21/icon/icon5.png" alt="구글맵"></a></li>
			</ul>
		</header>
		<header id="header_fake" class="cf">
			<ul id="s_nav_fake" class="cf">
				<li class="menu"><a href="#" onFocus="blur()"><img src="http://ashram777.dothome.co.kr/project21/icon/icon1_on.png" alt="메인"></a></li>
				<li class="menu"><a href="http://ashram777.dothome.co.kr/project21/room/room.html" onFocus="blur()"><img src="http://ashram777.dothome.co.kr/project21/icon/icon2.png" alt="룸정보"></a></li>
				<li class="menu"><a href="http://ashram777.dothome.co.kr/project21/reserve/contact.html" onFocus="blur()"><img src="http://ashram777.dothome.co.kr/project21/icon/icon3.png" alt="예약/문의"></a></li>
				<li class="menu"><a href="tel:01055550288" onFocus="blur()"><img src="http://ashram777.dothome.co.kr/project21/icon/icon4.png" alt="전화예약"></a></li>
				<li class="menu"><a href="" target="_blank" onFocus="blur()"><img src="/icon/icon5.png" alt="구글맵"></a></li>
				<label for="lat">위도: <input type="text" id="lat" name="lat"></label>
				<label for="lng">경도: <input type="text" id="lng" name="lng"></label>
			</ul>
		</header>
<script>
if(navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(showPosition,errorPosition); 
}
else {
    //return false;
    //alert("지오로케이션 서비스는 모바일에서만 사용가능합니다.");
}
    
function showPosition(position)  {
    //35.863839, 129.257270
    //var lat = 35.863789;
    //var lng = 129.257278; 
  
    //document.getElementById('lat').value = lat;
    //document.getElementById('lng').value = lng;
  
    var mapAddr = "https://maps.google.com/maps?q="+35.863839+",+"+129.257270+"+(Pension)&iwloc=A&hl=ko"; 
    document.getElementById('map').href = mapAddr;	
}
  
function errorPosition(error){
    // alert(error.message);
} 
</script>
		<nav id="nav">
			<ul class="cf">
				<li class="logo odd">Lamp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pension
				</li>
				<li class="map"><a href="#" onclick="mkwin()">Load Map</a></li>
				<li class="game odd"><a href="/game/game.html">Game</a></li>
				<li class="reserve"><a href="/reserve/contact.html">Contact</a></li>
				<li class="room odd"><a href="/room/room.html">Room Info</a></li>
				<li class="home active"><a href="#">Home</a></li>
			</ul>
		</nav>
		<div id="contents" class="cf">
			<section id="work" class="cf">
				<ul class="rslides">
					<li><a href="/room/room.html"><img src="/images/001.jpg" alt="room1"></a></li>
					<li><a href="/room/room.html"><img src="/images/002.jpg" alt="room2"></a></li>
					<li><a href="/room/room.html"><img src="/images/003.jpg" alt="room3"></a></li>
					<li><a href="/room/room.html"><img src="/images/004.jpg" alt="room4"></a></li>
					<li><a href="/room/room.htm5"><img src="/images/005.jpg" alt="room1"></a></li>
					<li><a href="/room/room.htm6"><img src="/images/006.jpg" alt="room1"></a></li>
					<li><a href="/room/room.html"><img src="/images/007.jpg" alt="room7"></a></li>
				</ul>
			</section>

			
			<section id="news">




			