<!doctype html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>자유 게시판</title>
	<link rel="stylesheet" href="recent2.css">
	<link rel="stylesheet" href="js/font-awesome/css/font-awesome.min.css">
</head>
<body>
<?php
include_once("./_common.php"); 
// index.php 가 아닌 파일은 반드시 명기할것!
include_once("lib/latest.lib.php");
?>
<div id="container">
	<div class="lt_wr">
		<?php echo latest('theme/basic', "qa", 6, 25);?>
	</div>
</div>
</body>
</html>


