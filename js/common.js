var isScroll = false;
var sSpeed = 400;
var dSpeed = sSpeed + 100;

$(window).load(function(){
	// 컨텐츠 높이 조절
	function resizeSlide(){
		var winH = $(window).height();

		$('.slide-item').css('height',winH);
	}
	resizeSlide();
	$(window).resize(resizeSlide);

	$('.content1 .slide-list').bxSlider({
		//다음 이전 버튼 controls:false,
		infiniteLoop:false,
		auto:false,
		autoControls:true,
		speed:400// Slide Speed (default:500)
	});

	$('.content2 .slide-list').bxSlider({
		infiniteLoop:false,
		auto:false,
		autoControls:true,
		speed:400
	});

	$('.content3 .slide-list').bxSlider({
		infiniteLoop:false,
		auto:false,
		autoControls:true,
		speed:400
	});

	/* 네비게이션 클릭 */
	$('.navi-item').click(function(){
		var listIdx = $(this).parents('.navi-list').index();
		var itemIdx = $(this).index();
		$('.navi-list').removeClass('on');
		$(this).addClass('on').parent('.navi-list').addClass('on');
		$(this).siblings('.navi-item').removeClass('on')
		var onIdx = $('.navi-list.on').index();
		var conH = $('.content').outerHeight();
		var top = conH*onIdx;
		$('html,body').animate({scrollTop:top},sSpeed);
		$('.content').eq(listIdx).find('.bx-pager-item').eq(itemIdx).find('a').click();
	});

	/* 이전/다음 버튼 */
	$(document).on('click', '.bx-controls-direction a', function(){
		if($(this).hasClass('bx-next')){
			$('.navi-list.on .navi-item.on').next().click();
		}else{
			$('.navi-list.on .navi-item.on').prev().click();
		}
	});

	/* 스크롤 이벤트 */
	$('.container').bind('mousewheel DOMMouseScroll touchmove', function (event) {
		//console.log(event.originalEvent.wheelDelta);
		if (!isScroll) {
			isScroll = true; // Scroll 중에 Scroll 동작 방지

			setTimeout(function(){isScroll = false;},dSpeed);

			if (event.originalEvent.wheelDelta >= 0) {
				//console.log('Scroll up');
				$(this).parent().find('.navi-list.on').prev('.navi-list').find('.navi-item.on').click();
			}
			else {
				//console.log('Scroll down');
				$(this).parent().find('.navi-list.on').next('.navi-list').find('.navi-item.on').click();
			}
			return false;
		}
	});
});
