layui.use(['element','layer'], function() {
    var $ = layui.jquery;
    var layer=layui.layer;
    var element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
   	var hideBtn = $('#hideBtn');
	var mainLayout = $('#main-layout');
	var mainMask = $('.main-mask');
	var layflex=$('#LAY_app_flexible');
	var search=$('#search');
	var searchBtn=$('#search-btn');
	var searchMl=$('#search-ml');

    //触发事件
    var active = {
        //在这里给active绑定几项事件，后面可通过active调用这些事件
        tabAdd: function(url,id,name) {
            //新增一个Tab项 传入三个参数，分别对应其标题，tab页面的地址，还有一个规定的id，是标签中data-id的属性值
            //关于tabAdd的方法所传入的参数可看layui的开发文档中基础方法部分
            element.tabAdd('tab', {
                title: name,
                content: '<iframe data-frameid="'+id+'" scrolling="auto" frameborder="0" src="'+url+'" style="width:100%;height:100%;"></iframe>',
                id: id //规定好的id
            })
        },
        tabChange: function(id) {
            //切换到指定Tab项
            element.tabChange('tab', id); //根据传入的id传入到指定的tab项
        }, 
        tabDelete: function (id) {
        element.tabDelete("tab", id);//删除
        }
        , tabDeleteAll: function (ids) {//删除所有
            $.each(ids, function (i,item) {
                element.tabDelete("tab", item); //ids是一个数组，里面存放了多个id，调用tabDelete方法分别删除
            })
        }
    };

    //当点击有site-demo-active属性的标签时，即左侧菜单栏中内容 ，触发点击事件
    $('.site-demo-active').on('click', function() {
        var dataid = $(this);

        //这时会判断右侧.layui-tab-title属性下的有lay-id属性的li的数目，即已经打开的tab项数目
        if ($(".layui-tab-title li[lay-id]").length <= 0) {
            //如果比零小，则直接打开新的tab项
            active.tabAdd(dataid.attr("data-url"), dataid.attr("data-id"),dataid.attr("data-title"));
        } else {
            //否则判断该tab项是否以及存在

            var isData = false; //初始化一个标志，为false说明未打开该tab项 为true则说明已有
            $.each($(".layui-tab-title li[lay-id]"), function () {
                //如果点击左侧菜单栏所传入的id 在右侧tab项中的lay-id属性可以找到，则说明该tab项已经打开
                if ($(this).attr("lay-id") == dataid.attr("data-id")) {
                    isData = true;
                }
            })
            if (isData == false) {
                //标志为false 新增一个tab项
                active.tabAdd(dataid.attr("data-url"), dataid.attr("data-id"),dataid.attr("data-title"));
            }
        }
        //最后不管是否新增tab，最后都转到要打开的选项页面上
        active.tabChange(dataid.attr("data-id"));
    });
    
    //刷新当前iframe页面
	$(".refresh").on("click",function(){  //此处添加禁止连续点击刷新一是为了降低服务器压力，另外一个就是为了防止超快点击造成chrome本身的一些js文件的报错(不过貌似这个问题还是存在，不过概率小了很多)
		if($(this).hasClass("refreshThis")){
			$(this).removeClass("refresh");
			$(".clildFrame .layui-show").find("iframe")[0].contentWindow.location.reload(true);
			setTimeout(function(){
				$(".refresh").addClass("refreshThis");
			},2000)
		}
		else{
			layer.msg("您点击的速度超过了服务器的响应速度，还是等两秒再刷新吧！");
		}
	});
//	//菜单收缩
//  hideBtn.on('click', function() {
//		if(!mainLayout.hasClass('hide-side')) {
//			mainLayout.addClass('hide-side');
//			layflex.removeClass('layui-icon-shrink-right')
//			layflex.addClass('layui-icon-spread-left');
//		} else {
//			mainLayout.removeClass('hide-side');
//			layflex.removeClass('layui-icon-spread-left');
//			layflex.addClass('layui-icon-shrink-right');
//		}
//	});
	searchBtn.on('click',function(){
		search.css("color","#40a9ff");
	});
	searchMl.mouseleave(function(){
		search.css("color","#333333")
	})
	//遮罩点击隐藏
	mainMask.on('click', function() {
		mainLayout.removeClass('hide-side');
	});

});