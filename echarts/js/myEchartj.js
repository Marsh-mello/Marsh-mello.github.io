//标题色块
			function abcd()
						{
						var diva=10;
			//          var divb=document.getElementById("left1a").offsetWidth;
			//          document.getElementById("left1b").style.width=divb-diva+'px';
//			            var divc=document.getElementsByClassName("b").neighbourNode.previousSibing.offsetWidth;
			            
			            var cs=document.getElementsByClassName("b");
			            for(var i=0; i<cs.length;i++){
			            	cs[i].style.width=cs[i].previousElementSibling.offsetWidth-diva+'px';
			            }
			            
//			            document.getElementsByClassName("b").style.width=divc-diva+'px';
			            
			            
//			            var divd=document.getElementById("left2a").offsetWidth;
//			            document.getElementById("left2b").style.width=divd-diva+'px';
//			            var dive=document.getElementById("center1a").offsetWidth;
//			            document.getElementById("center1b").style.width=dive-diva+'px';
//			            var divf=document.getElementById("right2a").offsetWidth;
//			            document.getElementById("right2b").style.width=divf-diva+'px';
			        }
//当月治超量
	    	var myLeft_01 = echarts.init(document.getElementById('left01'));
	    	var option = {
    		title: {
    			top:"20",
                text: '治超站当月超量',
                textStyle:{
                	color:'#fff',
                	fontSize:'14',
                	fontWeight:'lighter',
                	align:'center',
                },
            },
            legend: {
            	top: "80%",
				data: ['涉恐', '涉稳', '涉毒', '在逃', '刑事', '肇事', '重点'],
				textStyle: {
					color: '#fff',
				},
//				formatter: "{a0}:{c0}",
			},
		    yAxis: {
//		        data: ['涉恐', '涉稳', '涉毒', '在逃', '刑事', '肇事' ,'重点'],
//		        axisLine: {
//		            lineStyle: {
//		                color: '#0177d4'
//		            }
//		        },
				type: 'category',
				axisTick:{
	                show:false,
	            },
		        axisLabel: {
		        	show: true,
		            color: '#fff',
		            fontSize: 12,
		            fontWeight:'lighter',
		        },
		        data: ['']
		    },
		    xAxis: {
		        boundaryGap: [0, 0.1],
		        axisTick:{
	                show:true,
	            },
		        nameTextStyle: {
		            color: '#fff',
		            fontSize: 12,
		        },
		        axisLabel: {
		            color: '#fff',
		            fontSize: 12,
		            fontWeight:'lighter',
		        },
		        splitLine: {
		            show:false,
		        },
		        interval:500,
		        max:5000
		
		    },
		    "tooltip": {
		      "trigger": "item",
		      "textStyle": {
		        "fontSize": 12
		      },
		      "formatter": "{a0}:{c0}"
		    },
	        grid: {
		        left: '1%',
		        right:'4%',
		        bottom: '20%',
		        containLabel: true
		    },
		    series: [
		    {	name:'涉恐',
		        type: 'bar',
		        barWidth: 12,
//		        label: {
//					normal: {
//						show: true,
//						position: 'inside'
//					}
//				},//内部显示信息
		        itemStyle:{
		            normal:{
		                color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: '#00b0ff'
		                }, {
		                    offset: 0.8,
		                    color: '#7052f4'
		                }],),
		                barBorderRadius: [0,15,15,0],
		            }
		        },
		        data: [2211]
		    },
		    {	name:'涉稳',
		        type: 'bar',
		        barWidth: 12,
		        itemStyle:{
		            normal:{
		                color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [
		                	{offset: 0,color: '#00b0ff'}, 
		                	{offset: 0.8,color: '#7052f4'}
		                	]),
		                barBorderRadius: [0,15,15,0],
		            }
		        },
		        data: [2454]
		    },
		    {	name:'涉毒',
		        type: 'bar',
		        barWidth: 12,
		        itemStyle:{
		            normal:{
		                color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: '#00b0ff'
		                }, {
		                    offset: 0.8,
		                    color: '#7052f4'
		                }]),
		                barBorderRadius: [0,15,15,0],
		            }
		        },
		        data: [3254]
		    },
		    {	name: '在逃', 
		        type: 'bar',
		        barWidth: 12,
		        itemStyle:{
		            normal:{
		                color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: '#00b0ff'
		                }, {
		                    offset: 0.8,
		                    color: '#7052f4'
		                }],),
		                barBorderRadius: [0,15,15,0],
		            }
		        },
		        data: [1654]
		    },
		    {	name:'刑事', 
		        type: 'bar',
		        barWidth: 12,
		        itemStyle:{
		            normal:{
		                color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: '#00b0ff'
		                }, {
		                    offset: 0.8,
		                    color: '#7052f4'
		                }],),
		                barBorderRadius: [0,15,15,0],
		            }
		        },
		        data: [2454]
		    },
		    {	name:'肇事',
		        type: 'bar',
		        barWidth: 12,
		        itemStyle:{
		            normal:{
		                color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: '#00b0ff'
		                }, {
		                    offset: 0.8,
		                    color: '#7052f4'
		                }],),
		                barBorderRadius: [0,15,15,0],
		            }
		        },
		        data: [3757]
		    },
		    {	name:'重点',
		        type: 'bar',
		        barWidth: 12,
		        itemStyle:{
		            normal:{
		                color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: '#00b0ff'
		                }, {
		                    offset: 0.8,
		                    color: '#7052f4'
		                }],),
		                barBorderRadius: [0,15,15,0],
		            }
		        },
		        data: [2011]
		    },
		    ]
		};
		myLeft_01.setOption(option);
//治超站超限占比
	    	var myRight1 = echarts.init(document.getElementById('right1'));
	    	var option = {
			    title : {
			        text: '安防设备报警',
			        x:'center',
			        textStyle:{
	                	color:'#fff',
	                	fontSize:'14',
	                	fontWeight:'lighter',
	                	align:'center',
	                },
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			    	textStyle:{
	                	color:'#fff',
	                },
			        orient: 'vertical',
			        left: 'left',
			        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:1548, name:'搜索引擎'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			};
			myRight1.setOption(option);
//治超站超限趋势
	    	var myCenter = echarts.init(document.getElementById('center1'));
	    	var option = {
		    title: {
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {//设置选择图标
        	textStyle:{
        		color:"#f5f5f5",
        	},
		        data:['意向','预购','成交']
		    },
//		    toolbox: {
//		        show: true,
//		        right:'20px',
//		        feature: {
//		            magicType: {show: true, type: ['stack', 'tiled']},
//		            saveAsImage: {show: true}
//		        }
//		    },//下载
		    grid: {
			        left: '1%',
			        right:'4%',
			        bottom: '25%',
			        containLabel: true
			    },// 调边离
		    xAxis: {
		        type: 'category',
		        axisLabel: {
			            textStyle: {
			                color: '#fff',
			                fontSize: 12,
			                fontWeight:'lighter',
			            }
			        },
		        boundaryGap: false,
		        data: ['01','02','03','04','05','06','07','08','09','10','11','12']
		    },
		    yAxis: {
		        splitLine:{
		          	show:false, //y轴虚线隐藏 
					lineStyle:{
						type:'dashed',
					},
		        },
		        axisLabel: {
			            textStyle: {
			                color: '#fff',
			                fontSize: 12,
			                fontWeight:'lighter',
			            }
			        },
		        type: 'value'
		    },
		    series: [{
		        name: '成交',
		        type: 'line',
		        smooth: true,
		        showSymbol: false,
		        lineStyle: {
	            normal: {
	                width: 1,
	                color: {
	                    type: 'linear',
	                    x: 0,
	                    y: 0,
	                    x2: 1,
	                    y2: 0,
	                    colorStops: [{
	                        offset: 0, color: '#0e56cd' // 0% 处的颜色
	                    }, {
	                        offset: 1, color: '#00ffdd' // 100% 处的颜色
	                    }],
	                    globalCoord: false // 缺省为 false
	                },
	                opacity: 0.9
	            }
	        },//渐变色线条
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(14, 86, 205, 0.8)'
	                }, {
	                    offset: 1,
	                    color: 'rgba(0, 255,221, 0.1)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },//渐变色阴影
		        data: [120, 132, 101, 134, 90, 230, 210,457,341,264,104,410]
		    },
		    {
		        name: '预购',
		        type: 'line',
		        smooth: true,
		        showSymbol: false,
		        lineStyle: {
	            normal: {
	                width: 1,
	                color: {
	                    type: 'linear',
	                    x: 0,
	                    y: 0,
	                    x2: 1,
	                    y2: 0,
	                    colorStops: [{
	                        offset: 0, color: '#4936ff' // 0% 处的颜色
	                    }, {
	                        offset: 1, color: '#3c8fff' // 100% 处的颜色
	                    }],
	                    globalCoord: false // 缺省为 false
	                },
	                opacity: 0.9
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(7, 54, 255, 0.8)'
	                }, {
	                    offset: 0.8,
	                    color: 'rgba(60, 143, 255, 0.1)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
//	        itemStyle: {
//              normal: {
//                  color: '#4936ff',
//                  borderColor: 'rgba(137,189,2,0.27)',
//                  borderWidth: 12
//
//              }
//          },
		        data: [220, 582, 191, 234, 290, 330, 310,848,348,145,484,141]
		    },
		    {
		        name: '意向',
		        type: 'line',
		        smooth: true,
		        showSymbol: false,
		        lineStyle: {
	            normal: {
	                width: 1,
	                color: {
	                    type: 'linear',
	                    x: 0,
	                    y: 0,
	                    x2: 1,
	                    y2: 0,
	                    colorStops: [{
	                        offset: 0, color: '#21d4fd' // 0% 处的颜色
	                    }, {
	                        offset: 1, color: '#b721ff' // 100% 处的颜色
	                    }],
	                    globalCoord: false // 缺省为 false
	                },
	                opacity: 0.9
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(33, 212, 253, 0.8)'
	                }, {
	                    offset: 0.8,
	                    color: 'rgba(183, 33, 255, 0.1)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
		        data: [450, 632, 401, 154, 190, 650, 410,974,415,187,564,315]
		    }]
		};
		myCenter.setOption(option);
		
//车流量
			var myRight2 = echarts.init(document.getElementById('right2'));
			var XData=["甘肃", "青海", "内蒙古", "重庆", "山西", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "江西", "山东", "河南", "湖南", "湖北", "广东", "海南", "四川", "贵州", "云南"];
			var yData=[];
			XData.map(function(){
			    yData.push((Math.random()*1000+100).toFixed(0))
			})
			var dataMin=parseInt(Math.min.apply(null, yData)/2);
			for(var i=0;i<XData.length;i++){
			    
			}
			var option = {
				    xAxis: {
			        axisTick: {
			            show: false
			        },
			        splitLine: {
			            show: false
			        },
			        splitArea: {
			            show: false
			        },
			        data: XData,
			        axisLabel: {
			            formatter: function(value) {
			                var ret = ""; //拼接加\n返回的类目项
			                var maxLength = 1; //每项显示文字个数
			                var valLength = value.length; //X轴类目项的文字个数
			                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
			                if (rowN > 1) //如果类目项的文字大于3,
			                {
			                    for (var i = 0; i < rowN; i++) {
			                        var temp = ""; //每次截取的字符串
			                        var start = i * maxLength; //开始截取的位置
			                        var end = start + maxLength; //结束截取的位置
			                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
			                        temp = value.substring(start, end) + "\n";
			                        ret += temp; //凭借最终的字符串
			                    }
			                    return ret;
			                } else {
			                    return value;
			                }
			            },
			            interval: 0,
			            fontSize: 12,
			            textStyle: {
			                color: '#fff',
			                fontWeight:'lighter',
			
			            }
			        },
			        axisLine: {
			            lineStyle: {
			                color: '#4d4d4d'
			            }
			        }
			    },
			    yAxis: {
			        axisTick: {
			            show: false
			        },
			        splitLine: {
			            show: false
			        },
			        splitArea: {
			            show: false
			        },
			        min: dataMin,
			        axisLabel: {
			            textStyle: {
			                color: '#fff',
			                fontSize: 12,
			                fontWeight:'lighter',
			            }
			        },
			        axisLine: {
			            lineStyle: {
			                color: '#4d4d4d'
			            }
			        }
			    },
			    "tooltip": {
			      "trigger": "item",
			      "textStyle": {
			        "fontSize": 12
			      },
			      "formatter": "{b0}:{c0}"
			    },
			    grid: {
			        left: '1%',
			        right:'5%',
			        bottom: '10%',
			        containLabel: true
			    },
			    series: {
			        type:"bar",
			        itemStyle: {
			            normal: {
			                color: {
			                    type: 'linear',
			                    x: 0,
			                    y: 0,
			                    x2: 0,
			                    y2: 1,
			                    colorStops: [{
			                        offset: 0,
			                        color: '#00d386' // 0% 处的颜色
			                    }, {
			                        offset: 1,
			                        color: '#0076fc' // 100% 处的颜色
			                    }],
			                    globalCoord: false // 缺省为 false
			                },
			                barBorderRadius: [15,15,0,0],
			            }
			        },
			        // barWidth: 7,
			        data: yData
			    }
			};
			myRight2.setOption(option);

//地图
//			var div_center_1_Chart = echarts.init(document.getElementById(''));
//		    div_center_1_Chart.showLoading();
//			$.get('frame/cqs.json', function (geoJson) {
//	        echarts.registerMap('jinsha', geoJson);
//	        div_center_1_Chart.hideLoading();
//	        var geoCoordMap = {
//	            '治超站一': [106.97613,30.0836],
//	            '治超站二': [107.22257,29.84283],
//	            '治超站三': [106.91159,30.02455]
//	        };
//	        var data = [
//	            {name: '治超站一', value: 124},
//	            {name: '治超站二', value: 122},
//	            {name: '治超站三', value: 125}
//	        ];
//	        var max = 480, min = 9; // todo
//	        var maxSize4Pin = 100, minSize4Pin = 20;
//	
//	        var convertData = function (data) {
//	            var res = [];
//	            for (var i = 0; i < data.length; i++) {
//	                var geoCoord = geoCoordMap[data[i].name];
//	                if (geoCoord) {
//	                    res.push({
//	                        name: data[i].name,
//	                        value: geoCoord.concat(data[i].value),
//							textStr:data[i].textStr
//	                    });
//	                }
//	            }
//	            return res;
//	        };
//	        var option = {
//	            title: {
//	                text: '治超站分布情况',
//	                x: '20',
//	                textStyle: {
//	                    color: '#fff'
//	                }
//	            },
//	            tooltip: {
//	                trigger: 'item',
//					height:'50px',
//					color: "#fff",
//	                formatter: function (params) {
//	                    if (typeof(params.value)[2] == "undefined") {
//	                        return '';
//	                    } else {
//	                        return params.name + '<br/><span style="text-align:left;"> 今日车流量:400</span><br/><span style="text-align:left;"> 今日治超: 246</span><br/><span style="text-align:left;"> 累计治超: 200</span>';
//	                    }
//	                }
//	            },
//	            geo: {
//	                show: true,
//	                map: 'jinsha',
//	                label: {
//	                    normal: {
//	                        show: false
//	                    },
//	                    emphasis: {
//	                        show: false
//	                    }
//	                },
//	                roam: false,
//	                itemStyle: {
//	                    normal: {
//	                        areaColor: '#06305a',
//	                        borderColor: '#1073f0',
//	                        borderWidth:'1',
//	                    },
//	                    emphasis: {
//	                        areaColor: '#06305a',
//	                    }
//	                }
//	            },
//	            series: [
//	                {
//	                    type: 'map',
//	                    map: 'jinsha',
//	                    geoIndex: 0,
//	                    aspectScale: 0.75, //长宽比
//	                    showLegendSymbol: false, // 存在legend时显示
//	                    label: {
//	                        normal: {
//	                            show: false
//	                        },
//	                        emphasis: {
//	                            show: false,
//	                            textStyle: {
//	                                color: '#fff'
//	                            }
//	                        }
//	                    },
//	                    roam: true,
//	                    itemStyle: {
//	                        normal: {
//	                            areaColor: '#06305a',
//	                            borderColor: '#1073f0',
//	                        },
//	                        emphasis: {
//	                            areaColor: '#06305a'
//	                        }
//	                    },
//	                    animation: false,
//	                    data: data
//	                },
//	                {
//	                    type: 'effectScatter',
//	                    coordinateSystem: 'geo',
//	                    data: convertData(data.sort(function (a, b) {
//	                        return b.value - a.value;
//	                    })),
//	//                            .slice(0, 10)),
//	                    symbolSize: function (val) {
//	                        return val[2] / 10;
//	                    },
//	                    showEffectOn: 'render',
//	                    rippleEffect: {
//	                        brushType: 'stroke'
//	                    },
//	                    hoverAnimation: true,
//	                    label: {
//	                        normal: {
//	                            formatter: '{b}',
//	                            position: 'right',
//	                            show: false
//	                        }
//	                    },
//	                    itemStyle: {
//	                        normal: {
//	                            color: '#fff',
//	                            shadowBlur: 10,
//	                            shadowColor: '#abd825'
//	                        }
//	                    },
//	                    zlevel: 1
//	                },
//					{
//	                    type: 'effectScatter',
//	                    coordinateSystem: 'geo',
//	                    data: convertData(data.sort(function (a, b) {
//	                        return b.value - a.value;
//	                    })),
//	//                            .slice(0, 10)),
//	                    symbolSize: function (val) {
//	                        return val[2] / 10;
//	                    },
//	                    showEffectOn: 'render',
//	                    rippleEffect: {
//	                        brushType: 'stroke'
//	                    },
//	                    hoverAnimation: true,
//	                    label: {
//	                        normal: {
//	                            formatter: '{b}',
//	                            position: 'right',
//	                            show: false
//	                        }
//	                    },
//	                    itemStyle: {
//	                        normal: {
//	                            color: '#fff',
//	                            shadowBlur: 10,
//	                            shadowColor: '#abd825'
//	                        }
//	                    },
//	                    zlevel: 1
//	                }
//					
//	
//	            ]
//	        };
//	        div_center_1_Chart.setOption(option);
//	    });
	  
	  	var div_center_1_Chart = echarts.init(document.getElementById('main'));
	  	$.getJSON('frame/china.json', function (geoJson) {
	  		echarts.registerMap('china', geoJson);
		var geoCoordMap = {
		    '上海': [121.4648,31.2891],
		    '东莞': [113.8953,22.901],
		    '东营': [118.7073,37.5513],
		    '中山': [113.4229,22.478],
		    '临汾': [111.4783,36.1615],
		    '临沂': [118.3118,35.2936],
		    '丹东': [124.541,40.4242],
		    '丽水': [119.5642,28.1854],
		    '乌鲁木齐': [87.9236,43.5883],
		    '佛山': [112.8955,23.1097],
		    '保定': [115.0488,39.0948],
		    '兰州': [103.5901,36.3043],
		    '包头': [110.3467,41.4899],
		    '北京': [116.4551,40.2539],
		    '北海': [109.314,21.6211],
		    '南京': [118.8062,31.9208],
		    '南宁': [108.479,23.1152],
		    '南昌': [116.0046,28.6633],
		    '南通': [121.1023,32.1625],
		    '厦门': [118.1689,24.6478],
		    '台州': [121.1353,28.6688],
		    '合肥': [117.29,32.0581],
		    '呼和浩特': [111.4124,40.4901],
		    '咸阳': [108.4131,34.8706],
		    '哈尔滨': [127.9688,45.368],
		    '唐山': [118.4766,39.6826],
		    '嘉兴': [120.9155,30.6354],
		    '大同': [113.7854,39.8035],
		    '大连': [122.2229,39.4409],
		    '天津': [117.4219,39.4189],
		    '太原': [112.3352,37.9413],
		    '威海': [121.9482,37.1393],
		    '宁波': [121.5967,29.6466],
		    '宝鸡': [107.1826,34.3433],
		    '宿迁': [118.5535,33.7775],
		    '常州': [119.4543,31.5582],
		    '广州': [113.5107,23.2196],
		    '廊坊': [116.521,39.0509],
		    '延安': [109.1052,36.4252],
		    '张家口': [115.1477,40.8527],
		    '徐州': [117.5208,34.3268],
		    '德州': [116.6858,37.2107],
		    '惠州': [114.6204,23.1647],
		    '成都': [103.9526,30.7617],
		    '扬州': [119.4653,32.8162],
		    '承德': [117.5757,41.4075],
		    '拉萨': [91.1865,30.1465],
		    '无锡': [120.3442,31.5527],
		    '日照': [119.2786,35.5023],
		    '昆明': [102.9199,25.4663],
		    '杭州': [119.5313,29.8773],
		    '枣庄': [117.323,34.8926],
		    '柳州': [109.3799,24.9774],
		    '株洲': [113.5327,27.0319],
		    '武汉': [114.3896,30.6628],
		    '汕头': [117.1692,23.3405],
		    '江门': [112.6318,22.1484],
		    '沈阳': [123.1238,42.1216],
		    '沧州': [116.8286,38.2104],
		    '河源': [114.917,23.9722],
		    '泉州': [118.3228,25.1147],
		    '泰安': [117.0264,36.0516],
		    '泰州': [120.0586,32.5525],
		    '济南': [117.1582,36.8701],
		    '济宁': [116.8286,35.3375],
		    '海口': [110.3893,19.8516],
		    '淄博': [118.0371,36.6064],
		    '淮安': [118.927,33.4039],
		    '深圳': [114.5435,22.5439],
		    '清远': [112.9175,24.3292],
		    '温州': [120.498,27.8119],
		    '渭南': [109.7864,35.0299],
		    '湖州': [119.8608,30.7782],
		    '湘潭': [112.5439,27.7075],
		    '滨州': [117.8174,37.4963],
		    '潍坊': [119.0918,36.524],
		    '烟台': [120.7397,37.5128],
		    '玉溪': [101.9312,23.8898],
		    '珠海': [113.7305,22.1155],
		    '盐城': [120.2234,33.5577],
		    '盘锦': [121.9482,41.0449],
		    '石家庄': [114.4995,38.1006],
		    '福州': [119.4543,25.9222],
		    '秦皇岛': [119.2126,40.0232],
		    '绍兴': [120.564,29.7565],
		    '聊城': [115.9167,36.4032],
		    '肇庆': [112.1265,23.5822],
		    '舟山': [122.2559,30.2234],
		    '苏州': [120.6519,31.3989],
		    '莱芜': [117.6526,36.2714],
		    '菏泽': [115.6201,35.2057],
		    '营口': [122.4316,40.4297],
		    '葫芦岛': [120.1575,40.578],
		    '衡水': [115.8838,37.7161],
		    '衢州': [118.6853,28.8666],
		    '西宁': [101.4038,36.8207],
		    '西安': [109.1162,34.2004],
		    '贵阳': [106.6992,26.7682],
		    '连云港': [119.1248,34.552],
		    '邢台': [114.8071,37.2821],
		    '邯郸': [114.4775,36.535],
		    '郑州': [113.4668,34.6234],
		    '鄂尔多斯': [108.9734,39.2487],
		    '重庆': [107.7539,30.1904],
		    '金华': [120.0037,29.1028],
		    '铜川': [109.0393,35.1947],
		    '银川': [106.3586,38.1775],
		    '镇江': [119.4763,31.9702],
		    '长春': [125.8154,44.2584],
		    '长沙': [113.0823,28.2568],
		    '长治': [112.8625,36.4746],
		    '阳泉': [113.4778,38.0951],
		    '青岛': [120.4651,36.3373],
		    '韶关': [113.7964,24.7028]
		};
		
		var BJData = [
		    [{name:'北京'}, {name:'上海',value:95}],
		    [{name:'北京'}, {name:'广州',value:90}],
		    [{name:'北京'}, {name:'大连',value:80}],
		    [{name:'北京'}, {name:'南宁',value:70}],
		    [{name:'北京'}, {name:'南昌',value:60}],
		    [{name:'北京'}, {name:'拉萨',value:50}],
		    [{name:'北京'}, {name:'长春',value:40}],
		    [{name:'北京'}, {name:'包头',value:30}],
		    [{name:'北京'}, {name:'重庆',value:20}],
		    [{name:'北京'}, {name:'常州',value:10}]
		];
		
		var SHData = [
		    [{name:'上海'},{name:'包头',value:95}],
		    [{name:'上海'},{name:'昆明',value:90}],
		    [{name:'上海'},{name:'广州',value:80}],
		    [{name:'上海'},{name:'郑州',value:70}],
		    [{name:'上海'},{name:'长春',value:60}],
		    [{name:'上海'},{name:'重庆',value:50}],
		    [{name:'上海'},{name:'长沙',value:40}],
		    [{name:'上海'},{name:'北京',value:30}],
		    [{name:'上海'},{name:'丹东',value:20}],
		    [{name:'上海'},{name:'大连',value:10}]
		];
		
		var GZData = [
		    [{name:'广州'},{name:'福州',value:95}],
		    [{name:'广州'},{name:'太原',value:90}],
		    [{name:'广州'},{name:'长春',value:80}],
		    [{name:'广州'},{name:'重庆',value:70}],
		    [{name:'广州'},{name:'西安',value:60}],
		    [{name:'广州'},{name:'成都',value:50}],
		    [{name:'广州'},{name:'常州',value:40}],
		    [{name:'广州'},{name:'北京',value:30}],
		    [{name:'广州'},{name:'北海',value:20}],
		    [{name:'广州'},{name:'海口',value:10}]
		];
		
		var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
		
		var convertData = function (data) {
		    var res = [];
		    for (var i = 0; i < data.length; i++) {
		        var dataItem = data[i];
		        var fromCoord = geoCoordMap[dataItem[0].name];
		        var toCoord = geoCoordMap[dataItem[1].name];
		        if (fromCoord && toCoord) {
		            res.push({
		                fromName: dataItem[0].name,
		                toName: dataItem[1].name,
		                coords: [fromCoord, toCoord],
		                value: dataItem[1].value
		            });
		        }
		    }
		    return res;
		};
		
		var color = ['#a6c84c', '#ffa022', '#46bee9'];
		var series = [];
		[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
		    //console.log(item,i);
		    series.push({
		        name: item[0] + ' Top10',
		        type: 'lines',
		        zlevel: 1,
		        effect: {
		            show: true,
		            period: 6,
		            trailLength: 0.7,
		            color: '#fff',
		            symbolSize: 3
		        },
		        lineStyle: {
		            normal: {
		                color: color[i],
		                width: 0,
		                curveness: 0.2
		            }
		        },
		        data: convertData(item[1])
		    },
		    {
		        name: item[0] + ' Top10',
		        type: 'lines',
		        zlevel: 2,
		        symbol: ['none', 'arrow'],
		        symbolSize: 10,
		        effect: {
		            show: true,
		            period: 6,
		            trailLength: 0,
		            symbol: planePath,
		            symbolSize: 15
		        },
		        lineStyle: {
		            normal: {
		                color: color[i],
		                width: 1,
		                opacity: 0.6,
		                curveness: 0.2
		            }
		        },
		        data: convertData(item[1])
		    },
		    {
		        name: item[0] + ' Top10',
		        type: 'effectScatter',
		        coordinateSystem: 'geo',
		        zlevel: 2,
		        rippleEffect: {
		            brushType: 'stroke'
		        },
		        label: {
		            normal: {
		                show: true,
		                position: 'right',
		                formatter: '{b}'
		            }
		        },
		        symbolSize: function (val) {
		            return val[2] / 8;
		        },
		        itemStyle: {
		            normal: {
		                color: color[i]
		            }
		        },
		        data: item[1].map(function (dataItem) {
		            return {
		                name: dataItem[1].name,
		                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
		            };
		        })
		    });
		});
		console.log(series)
		
		option = {
		    title : {
		        text: '模拟迁徙',
		        subtext: '数据纯属虚构',
		        left: 'center',
		        textStyle : {
		            color: '#fff'
		        }
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter:function(params, ticket, callback){
		            console.log(params);
		            if(params.seriesType=="effectScatter") {
		                return "线路："+params.data.name+""+params.data.value[2];
		            }else if(params.seriesType=="lines"){
		                return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
		            }else{
		                return params.name;
		            }
		        }
		    },
		    legend: {
		        orient: 'vertical',
		        top: 'bottom',
		        left: 'right',
		        data:['北京 Top10', '上海 Top10', '广州 Top10'],
		        textStyle: {
		            color: '#fff'
		        },
		        selectedMode: 'multiple',
		    },
		    geo: {
		        map: 'china',
		        top:'30%',
		        label: {
		            emphasis: {
		                show: true,
		                color:'#fff'
		            }
		        },
		        zoom:'1.6',
		        roam: false,
		        itemStyle: {
		            normal: {
		                areaColor: 'rgba(50,60,72,0)',
		                borderColor: '#94e2ff'
		            },
		            emphasis: {
		                areaColor: '#0a93b1'
		            }
		        }
		    },
		    series: series
		};
		div_center_1_Chart.setOption(option);
	 });
	 
$('#bg').starfield();