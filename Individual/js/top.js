window.onload =function(){
	$('.t-right-bar').hide();
}

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".t-right-bar").fadeIn(500);
        }
        else {
            $(".t-right-bar").fadeOut(500);
        }
    });

    $("#back-to-top").click(function () {
        $('body,html').animate({scrollTop: 0}, 100);
        return false;
    });
    
//  添加标签
    var add=$('#add');
    var tag=$('.admin-pages-tags>span').eq(-2);
    var inputAdd=$('.admin-pages-tags input');
    inputAdd.hide();
	add.click(function(){
		add.hide();
		inputAdd.show();
	});
	inputAdd.blur(function(){
		var inputValue=inputAdd.val();
    	var addSpan=('<span class="layui-badge">'+inputValue+'</span>');
    	if(inputAdd.val()!=''){
    		tag.after(addSpan);
			inputAdd.val('');
			inputAdd.hide();
			add.show();
    	}else{
			inputAdd.hide();
    		add.show();
    	};
		
	});
	inputAdd.bind('keypress', function(event) {
		if(event.keyCode == "13") {
			inputAdd.blur();
		}
	});
});
