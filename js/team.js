$(function() {
	// 标签切换
	$(".tabitem>a").click(function(event) {
		/* Act on the event */
		if ($(this).index() == 0 ) {
			$(".tabMy").css("display", "block");
			$(".tabJoin").css("display", "none");
			$(this).addClass('active').siblings().removeClass('active');
		} else  {
			$(".tabJoin").css("display", "block");
			$(".tabMy").css("display", "none");
			$(this).addClass('active').siblings().removeClass('active');
		} 
	});

})