$(function() {
	myajax = $.ajax({
		async: false,
		url: "work/work.json", //json文件位置
		success: function(res) { //请求成功完成后要执行的方法
			$.each(res.data, function(i, data) {
				var titleNum1 = data.ObjectName.indexOf('/');
				var titleNum2 = data.ObjectName.lastIndexOf('/');
				var title = data.ObjectName.substring(0, titleNum1);
				var nameNum = data.ObjectName.lastIndexOf('.');
				var name = data.ObjectName.substring(titleNum1 + 1, titleNum2);
				var content = data.ObjectName.substring(titleNum2 + 1, nameNum);
				var url = data.Url;
				var Id = data.id;
				$("#sortable").append(
					"<div data-tags='" + title + "'><a class='card'><img id='" +
					Id +
					"' class='card__picture' src='" +
					url +
					"'><div class='card-infos'><h2 class='card__title'>" +
					name +
					"</h2><p class='card__text'>" + content + "</p></div></a></div>"
				);
			});

		}

	});
	//	弹窗
	var cardPicture = $('.card__picture');
	var alertView = $('#alert-view');
	var alertImg = $('.alert-view-img ');
	var toogleImg = $('.cut a,.alert-view-img');
	var main=$('.main');
	cardPicture.click(function() {
		$('body').css('overflow', 'hidden');
		alertView.css('display', 'block');
		main.css('filter','blur(10px)');
		var viewImg = $(this).attr('src');
		alertImg.attr('src', viewImg);
	});
	var imgs = document.querySelectorAll(".card__picture");
	for(var i = 0; i < imgs.length; i++) {
		imgs[i].index = i;
		imgs[i].onclick = function() {
			var indexNum = this.index;;
			$('.cut-left').click(function() {
				if(indexNum<1){
					indexNum=imgs.length;
				};
				indexNum--;
				var leftImg=cardPicture.eq(indexNum).attr('src');
				alertImg.attr('src', leftImg);
			});
			$('.cut-right').click(function() {
				if(indexNum==imgs.length-1){
					indexNum=-1;
				};
				indexNum++;
				var leftImg=cardPicture.eq(indexNum).attr('src');
				alertImg.attr('src', leftImg);
			})
		}
	}

	$(document).mouseup(function(e) {
		if(!toogleImg.is(e.target) && toogleImg.has(e.target).length === 0) { // Mark 1
			$('body').css('overflow', 'auto');
			alertView.css('display', 'none');
			main.css('filter','blur(0)');
		}
	});

	$.when(myajax).done(function() {
		var $imgs = $('#sortable div'); // Store all images
		var $buttons = $('.sortable__nav'); // Store buttons element
		var tagged = {}; // Create tagged object

		$imgs.each(function() { // Loop through images and
			var img = this; // Store img in variable
			var tags = $(this).data('tags'); // Get this element's tags

			if(tags) { // If the element had tags
				tags.split(',').forEach(function(tagName) { // Split at comma and

					if(tagged[tagName] == null) { // If object doesn't have tag
						tagged[tagName] = []; // Add empty array to object
					}
					tagged[tagName].push(img); // Add the image to the array
				});
			}
		});

		$('<li>' + "<a data-sjslink='all' class='nav__link'>全部</a>'", {}).appendTo($buttons);

		$.each(tagged, function(tagName) { // For each tag name
			$('<li>' + "<a data-sjslink='" + tagName + "' class='nav__link'>" + tagName + "</a>'", {}).appendTo($buttons); // Add to the buttons
		});
		document.querySelector('#sortable').sortablejs();
	});
});
