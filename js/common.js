$(window).load(function(){

	$('.grayblue').fullpage({
		scrollBar: false,//화면 스크롤 바 표시
		keyboardScrolling: false,//스크롤 키보드 제어
		autoScrolling: true,//스크롤
		slidesNavigation: true,
		slidesToSections: true,
		loopHorizontal: false,//무한 스크롤
		anchors: ['index1', 'index2', 'index3'],

		//슬라이드시
		onLeave: function(anchorLink, index){
			$('.section').find('.h1-logo, .text-area, .quotation-box').stop().animate({'margin':'0 0 0 -130%', 'opacity':'0'}, 400);
			$('.section .title-box').stop().animate({'margin':'0 -130% 0 0', 'opacity':'0'}, 400);
			$('.section .slide .inner .center-text').stop().animate({'margin':'0 0 -150% 0', 'opacity':'0'}, 400, function(){
				$('.section').find('.h1-logo, .text-area, .quotation-box, .title-box').css({'margin':'-130% 0 0 0'});
				$('.section .slide .inner .center-text').css({'margin':'-150% 0 0 0'});
			});

			$('.fp-next').html('<p></p>');
		},
		//슬라이드 완료시
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

				$('.fp-next').html('<p>R</p>');
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

				$('.fp-next').html('<p>L</p>');
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

				$('.fp-next').html('<p>G</p>');
			}
		}
	});

	/* 네이게이션 */
	$('.nav-item a').click(function(){
		var iIdx = $(this).parents('.nav-item').index();
		var bIdx = $(this).parents('.nav-list').index();
		$('.section').eq(bIdx).find('.fp-slidesNav li').eq(iIdx).find('a').click();

		var prevTxt = $(this).parent('.nav-item').prev('.nav-item').find('a').html();
		var nextTxt = $(this).parent('.nav-item').next('.nav-item').find('a').html();
		$('.fp-prev p').html(prevTxt);
		$('.fp-next p').html(nextTxt);
	});
	/* 로드시 화면 구성 */
	$('.section').find('.h1-logo, .text-area, .quotation-box, .title-box').animate({'margin':'0', 'opacity':'1'}, 800);
	$('.section .slide .inner .center-text').delay(100).animate({'margin':'20px 0 0 0', 'opacity':'1'}, 800, function(){
		$(this).animate({'margin':'-20px 0 0 0'}, 200, function(){
			$(this).animate({'margin':'0'}, 200);
		});
	});

	/* 이전/다음 버튼 텍스트 추가 */
	$('.fp-prev').html('<p></p>');
	$('.fp-next').html('<p>R</p>');

	/* 팝업 */
	$('.btn-portfolio').click(function(){
		$('.popup-wrap').show();
	});
});
