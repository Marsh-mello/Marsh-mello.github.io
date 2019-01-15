$('#tianqi').bind('keypress', function(event) {
	if(event.keyCode == "13") {
		$("#btn").click();
	}
});
$('.layui-table').hide();
$('#clear').click(function() {
	$('#tianqi').val('');
});
$('#btn').click(function() {
	$('.layui-table').show();
	$('.tq-add,.tq-heat,.tq-weather,.tq-air,.tq-tips,.tq-tbody td').empty();
	$('#hours li').remove();
	var value = $('#tianqi').val();
	var myChart = echarts.init(document.getElementById('mountNode'));
	// 显示标题，图例和空的坐标轴
	myChart.setOption({
		title: {},
		color:'#1E9FFF',
		tooltip: {
			trigger: 'axis',
//			formatter:'{b}:<br/>{c} °C'
		},
		grid: {
	        left: '1%',
	        right: '1%',
	        bottom: '3%',
	        containLabel: true
   		},
		xAxis: {
			data: [],
//			boundaryGap : false,
		},
		yAxis: {},
		series: [{
			name: '温度',
			type: 'line',
			data: [],
			label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            axisLabel:{
            	formatter:'{value} °C'
            },
            areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(30,159,255, 0.3)'
	                }, {
	                    offset: 0.8,
	                    color: 'rgba(30,159,255, 0)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: 'rgb(30,159,255)'
	            }
	        },
		}]
	});

	myChart.showLoading(); //数据加载完之前先显示一段简单的loading动画

	var names = []; //类别数组（实际用来盛放X轴坐标值）
	var nums = []; //销量数组（实际用来盛放Y坐标值）

	$.ajax({
		type: "GET",
		async: true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
		url: "https://www.tianqiapi.com/api/", //请求发送到TestServlet处
		data: 'version=v1&city=' + value,
		dataType: "JSON", //返回数据形式为json
		success: function(res) {
			$('.tq-add').append( res.city);//地址
			$('.tq-heat').append(res.data[0].tem1);//最高温
			$('.tq-weather').append(res.data[0].wea);//天气
			$('.tq-air').append('空气污染-'+res.data[0].air_level+'  '+res.data[0].air);//空气污染
			$('.tq-tips').append('Tips: ' + res.data[0].air_tips);
			
			//one0
			$('.tq-one0 td').eq(0).append(res.data[0].day);//时间
			$('.tq-one0 td').eq(1).append(res.data[0].wea);//天气
			$('.tq-one0 td').eq(2).append(res.data[0].tem2+' / '+res.data[0].tem1);//温度
			//one1
			$('.tq-one1 td').eq(0).append(res.data[1].day);//时间
			$('.tq-one1 td').eq(1).append(res.data[1].wea);//天气
			$('.tq-one1 td').eq(2).append(res.data[1].tem2+' / '+res.data[1].tem1);//温度
			//one2
			$('.tq-one2 td').eq(0).append(res.data[2].day);//时间
			$('.tq-one2 td').eq(1).append(res.data[2].wea);//天气
			$('.tq-one2 td').eq(2).append(res.data[2].tem2+' / '+res.data[2].tem1);//温度
			//one3
			$('.tq-one3 td').eq(0).append(res.data[3].day);//时间
			$('.tq-one3 td').eq(1).append(res.data[3].wea);//天气
			$('.tq-one3 td').eq(2).append(res.data[3].tem2+' / '+res.data[3].tem1);//温度
			//one4
			$('.tq-one4 td').eq(0).append(res.data[4].day);//时间
			$('.tq-one4 td').eq(1).append(res.data[4].wea);//天气
			$('.tq-one4 td').eq(2).append(res.data[4].tem2+' / '+res.data[4].tem1);//温度
			//one5
			$('.tq-one5 td').eq(0).append(res.data[5].day);//时间
			$('.tq-one5 td').eq(1).append(res.data[5].wea);//天气
			$('.tq-one5 td').eq(2).append(res.data[5].tem2+' / '+res.data[5].tem1);//温度
			//one6
			$('.tq-one6 td').eq(0).append(res.data[6].day);//时间
			$('.tq-one6 td').eq(1).append(res.data[6].wea);//天气
			$('.tq-one6 td').eq(2).append(res.data[6].tem2+' / '+res.data[6].tem1);//温度
			
			
			if(res) {
				for(var i = 0; i < res.data[0].hours.length; i++) {
//					$('#hours').append('<li>' + (i + 1) + ': 时间: ' + res.data[0].hours[i].day + ' 气温: ' + res.data[0].hours[i].tem + ' </li >');
					names.push(res.data[0].hours[i].day); //挨个取出类别并填入类别数组
					nums.push(res.data[0].hours[i].tem.split('℃', 1)[0]);
				}
				myChart.hideLoading(); //隐藏加载动画
				myChart.setOption({ //加载数据图表
					xAxis: {
						data: names,
					},
					series: [{
						// 根据名字对应到相应的系列
						name: '温度',
						data: nums
					}]
				});

			}

		},
		error: function(errorMsg) {
			//请求失败时执行该函数
			alert("图表请求数据失败!");
			myChart.hideLoading();
		}
	})

});