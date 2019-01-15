$.ajax({
	url : 'https://www.apiopen.top/satinGodApi?type=1&page=1',
	success : function(json) {
		
		$.each(json.data, function(i, data) {
			//循环获取数据    
			var up = data.up;
			var text = data.text;
			var image = data.header;
			var username = data.username;
			var content = data.top_commentsContent;
			var down = data.down;
			$("#list").append(
				"<li class='data-list'><div class='shade'><img src='"
				+ image 
				+" '/><div class='r-data-list'><div class='list-top'><span class='list-top-tab' >"
				+ username 
				+"</span><span class='list-top-title'>"
				+ text 
				+"</span></div><div class='list-center'>"
				+ content 
				+"</div><div class='list-bottom'><div><i class='layui-icon layui-icon-praise'>"
				+ up 
				+"</i><i class='layui-icon layui-icon-tread'>"
				+ down 
				+"</i></div></div></div></div></li>");
						});
	 
				}
});