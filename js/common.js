$(window).load(function(){

	$('.grayblue').fullpage({
		scrollBar: false,
		keyboardScrolling: false,
		autoScrolling: true,
		slidesNavigation: true,
		slidesToSections: true,
		loopHorizontal: false,
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],

		onLeave: function(anchorLink, index){
			$('.section').find('.h1-logo, .text-area, .quotation-box').stop().animate({'margin':'0 0 0 -130%', 'opacity':'0'}, 400);
			$('.section .title-box').stop().animate({'margin':'0 -130% 0 0', 'opacity':'0'}, 400);
			$('.section .slide .inner .center-text').stop().animate({'margin':'0 0 -150% 0', 'opacity':'0'}, 400, function(){
				$('.section').find('.h1-logo, .text-area, .quotation-box, .title-box').css({'margin':'-130% 0 0 0'});
				$('.section .slide .inner .center-text').css({'margin':'-150% 0 0 0'});
			});
		},
		afterLoad: function(anchorLink, index){
			//section 1
			if(index == 1){
				$('#section0').find('.h1-logo, .text-area, .quotation-box, .title-box').stop().animate({'margin':'0', 'opacity':'1'}, 800);
				$('#section0 .slide .inner .center-text').delay(100).stop().animate({'margin':'20px 0 0 0', 'opacity':'1'}, 800, function(){
					$(this).stop().animate({'margin':'-20px 0 0 0'}, 200, function(){
						$(this).stop().animate({'margin':'0'}, 200);
					});
				});
				$('.nav2 .nav-item:first-child a').click();
				$('.nav3 .nav-item:first-child a').click();
			}

			//section 2
			if(index == 2){
				$('#section1').find('.h1-logo, .text-area, .quotation-box, .title-box').stop().animate({'margin':'0', 'opacity':'1'}, 800);
				$('#section1 .slide .inner .center-text').delay(100).stop().animate({'margin':'20px 0 0 0', 'opacity':'1'}, 800, function(){
					$(this).stop().animate({'margin':'-20px 0 0 0'}, 200, function(){
						$(this).stop().animate({'margin':'0'}, 200);
					});
				});
				$('.nav1 .nav-item:first-child a').click();
				$('.nav3 .nav-item:first-child a').click();
			}

			//section 1
			if(index == 3){
				$('#section2').find('.h1-logo, .text-area, .quotation-box, .title-box').stop().animate({'margin':'0', 'opacity':'1'}, 800);
				$('#section2 .slide .inner .center-text').delay(100).stop().animate({'margin':'20px 0 0 0', 'opacity':'1'}, 800, function(){
					$(this).stop().animate({'margin':'-20px 0 0 0'}, 200, function(){
						$(this).stop().animate({'margin':'0'}, 200);
					});
				});
				$('.nav1 .nav-item:first-child a').click();
				$('.nav2 .nav-item:first-child a').click();
			}
		}
	});

	/* 추가 */
	$('.nav-item a').click(function(){
		var iIdx = $(this).parents('.nav-item').index();
		var bIdx = $(this).parents('.nav-list').index();
		$('.section').eq(bIdx).find('.fp-slidesNav li').eq(iIdx).find('a').click();
	});
	$('.section').find('.h1-logo, .text-area, .quotation-box, .title-box').animate({'margin':'0', 'opacity':'1'}, 800);
	$('.section .slide .inner .center-text').delay(100).animate({'margin':'20px 0 0 0', 'opacity':'1'}, 800, function(){
		$(this).animate({'margin':'-20px 0 0 0'}, 200, function(){
			$(this).animate({'margin':'0'}, 200);
		});
	});

	/* 팝업 */
	$('.btn-portfolio').click(function(){
		$('.popup-wrap').show();
	});
});
