$(window).load(function(){
	$('.nav').localScroll(500);

	$('#cont01 .slide-box').parallax("50%", 0.3);
	$('#cont02 .slide-box').parallax("50%", 0.3);
	$('#cont03 .slide-box').parallax("50%", 0.3);
	$('#cont04 .slide-box').parallax("50%", 0.3);
	$('#cont05 .slide-box').parallax("50%", 0.3);
	$('#cont06 .slide-box').parallax("50%", 0.3);
	$('#cont07 .slide-box').parallax("50%", 0.3);
	$('#cont08 .slide-box').parallax("50%", 0.3);
	$('#cont09 .slide-box').parallax("50%", 0.3);
	$('#cont10 .slide-box').parallax("50%", 0.3);
	$('#cont11 .slide-box').parallax("50%", 0.3);
	$('#cont12 .slide-box').parallax("50%", 0.3);
	$('#cont13 .slide-box').parallax("50%", 0.3);


	$(window).scroll(function(){
		var winScroll = $(window).scrollTop();
		var $direct=$('.parallax-box');
		$direct.each(function(index){
			$directOffset=$direct.eq(index).offset().top - 300;
			if (winScroll >= $directOffset) {
				$('.nav li').eq(index).addClass('on').siblings().removeClass('on');
			}
		});

		//마지막 컨텐츠
		if(winScroll == $(document).height()-$(window).height()){
			$('.nav li:last-child').addClass('on').siblings().removeClass('on');
		}
	});
	$(window).scroll();// 윈도우 로딩 시 스크롤 호출



	$('.slide-area').each(function(){
		var boxLen = $(this).find('.slide-box').length;
		if(boxLen >= 2){
			$(this).append('<button type="button" class="btn-prev" style="display:none;">이전</button><button type="button" class="btn-next">다음</button>');
		}
	});


	/* 슬라이드 영역 ====================================================================================================== */
	// 01
	var pgVar01 = 0;
	$('#cont01 button').click( function(){
		var boxLen = $(this).parents('#cont01').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar01 < boxLen - 1){
				pgVar01++;
				$(this).parents('#cont01').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont01').find('.btn-prev').show();
				if(pgVar01 == boxLen - 1){
					$(this).parents('#cont01').find('.btn-next').hide();
				}
				console.log(pgVar01);
			};
		} else {
			if(pgVar01 > 0){
				pgVar01--;
				$(this).parents('#cont01').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont01').find('.btn-next').show();
			if(pgVar01 == 0){
				$(this).parents('#cont01').find('.btn-prev').hide();
			}
		};
	});

	// 02
	var pgVar02 = 0;
	$('#cont02 button').click( function(){
		var boxLen = $(this).parents('#cont02').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar02 < boxLen - 1){
				pgVar02++;
				$(this).parents('#cont02').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont02').find('.btn-prev').show();
				if(pgVar02 == boxLen - 1){
					$(this).parents('#cont02').find('.btn-next').hide();
				}
				console.log(pgVar02);
			};
		} else {
			if(pgVar02 > 0){
				pgVar02--;
				$(this).parents('#cont02').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont02').find('.btn-next').show();
			if(pgVar02 == 0){
				$(this).parents('#cont02').find('.btn-prev').hide();
			}
		};
	});

	// 03
	var pgVar03 = 0;
	$('#cont03 button').click( function(){
		var boxLen = $(this).parents('#cont03').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar03 < boxLen - 1){
				pgVar03++;
				$(this).parents('#cont03').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont03').find('.btn-prev').show();
				if(pgVar03 == boxLen - 1){
					$(this).parents('#cont03').find('.btn-next').hide();
				}
				console.log(pgVar03);
			};
		} else {
			if(pgVar03 > 0){
				pgVar03--;
				$(this).parents('#cont03').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont03').find('.btn-next').show();
			if(pgVar03 == 0){
				$(this).parents('#cont03').find('.btn-prev').hide();
			}
		};
	});

	// 04
	var pgVar04 = 0;
	$('#cont04 button').click( function(){
		var boxLen = $(this).parents('#cont04').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar04 < boxLen - 1){
				pgVar04++;
				$(this).parents('#cont04').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont04').find('.btn-prev').show();
				if(pgVar04 == boxLen - 1){
					$(this).parents('#cont04').find('.btn-next').hide();
				}
				console.log(pgVar04);
			};
		} else {
			if(pgVar04 > 0){
				pgVar04--;
				$(this).parents('#cont04').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont04').find('.btn-next').show();
			if(pgVar04 == 0){
				$(this).parents('#cont04').find('.btn-prev').hide();
			}
		};
	});

	// 05
	var pgVar05 = 0;
	$('#cont05 button').click( function(){
		var boxLen = $(this).parents('#cont05').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar05 < boxLen - 1){
				pgVar05++;
				$(this).parents('#cont05').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont05').find('.btn-prev').show();
				if(pgVar05 == boxLen - 1){
					$(this).parents('#cont05').find('.btn-next').hide();
				}
				console.log(pgVar05);
			};
		} else {
			if(pgVar05 > 0){
				pgVar05--;
				$(this).parents('#cont05').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont05').find('.btn-next').show();
			if(pgVar05 == 0){
				$(this).parents('#cont05').find('.btn-prev').hide();
			}
		};
	});

	// 06
	var pgVar06 = 0;
	$('#cont06 button').click( function(){
		var boxLen = $(this).parents('#cont06').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar06 < boxLen - 1){
				pgVar06++;
				$(this).parents('#cont06').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont06').find('.btn-prev').show();
				if(pgVar06 == boxLen - 1){
					$(this).parents('#cont06').find('.btn-next').hide();
				}
				console.log(pgVar06);
			};
		} else {
			if(pgVar06 > 0){
				pgVar06--;
				$(this).parents('#cont06').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont06').find('.btn-next').show();
			if(pgVar06 == 0){
				$(this).parents('#cont06').find('.btn-prev').hide();
			}
		};
	});

	// 07
	var pgVar07 = 0;
	$('#cont07 button').click( function(){
		var boxLen = $(this).parents('#cont07').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar07 < boxLen - 1){
				pgVar07++;
				$(this).parents('#cont07').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont07').find('.btn-prev').show();
				if(pgVar07 == boxLen - 1){
					$(this).parents('#cont07').find('.btn-next').hide();
				}
				console.log(pgVar07);
			};
		} else {
			if(pgVar07 > 0){
				pgVar07--;
				$(this).parents('#cont07').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont07').find('.btn-next').show();
			if(pgVar07 == 0){
				$(this).parents('#cont07').find('.btn-prev').hide();
			}
		};
	});

	// 08
	var pgVar08 = 0;
	$('#cont08 button').click( function(){
		var boxLen = $(this).parents('#cont08').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar08 < boxLen - 1){
				pgVar08++;
				$(this).parents('#cont08').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont08').find('.btn-prev').show();
				if(pgVar08 == boxLen - 1){
					$(this).parents('#cont08').find('.btn-next').hide();
				}
				console.log(pgVar08);
			};
		} else {
			if(pgVar08 > 0){
				pgVar08--;
				$(this).parents('#cont08').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont08').find('.btn-next').show();
			if(pgVar08 == 0){
				$(this).parents('#cont08').find('.btn-prev').hide();
			}
		};
	});

	// 09
	var pgVar09 = 0;
	$('#cont09 button').click( function(){
		var boxLen = $(this).parents('#cont09').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar09 < boxLen - 1){
				pgVar09++;
				$(this).parents('#cont09').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont09').find('.btn-prev').show();
				if(pgVar09 == boxLen - 1){
					$(this).parents('#cont09').find('.btn-next').hide();
				}
				console.log(pgVar09);
			};
		} else {
			if(pgVar09 > 0){
				pgVar09--;
				$(this).parents('#cont09').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont09').find('.btn-next').show();
			if(pgVar09 == 0){
				$(this).parents('#cont09').find('.btn-prev').hide();
			}
		};
	});

	// 10
	var pgVar10 = 0;
	$('#cont10 button').click( function(){
		var boxLen = $(this).parents('#cont10').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar10 < boxLen - 1){
				pgVar10++;
				$(this).parents('#cont10').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont10').find('.btn-prev').show();
				if(pgVar10 == boxLen - 1){
					$(this).parents('#cont10').find('.btn-next').hide();
				}
				console.log(pgVar10);
			};
		} else {
			if(pgVar10 > 0){
				pgVar10--;
				$(this).parents('#cont10').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont10').find('.btn-next').show();
			if(pgVar10 == 0){
				$(this).parents('#cont10').find('.btn-prev').hide();
			}
		};
	});

	// 11
	var pgVar11 = 0;
	$('#cont11 button').click( function(){
		var boxLen = $(this).parents('#cont11').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar11 < boxLen - 1){
				pgVar11++;
				$(this).parents('#cont11').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont11').find('.btn-prev').show();
				if(pgVar11 == boxLen - 1){
					$(this).parents('#cont11').find('.btn-next').hide();
				}
				console.log(pgVar11);
			};
		} else {
			if(pgVar11 > 0){
				pgVar11--;
				$(this).parents('#cont11').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont11').find('.btn-next').show();
			if(pgVar11 == 0){
				$(this).parents('#cont11').find('.btn-prev').hide();
			}
		};
	});

	// 12
	var pgVar12 = 0;
	$('#cont12 button').click( function(){
		var boxLen = $(this).parents('#cont12').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar12 < boxLen - 1){
				pgVar12++;
				$(this).parents('#cont12').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont12').find('.btn-prev').show();
				if(pgVar12 == boxLen - 1){
					$(this).parents('#cont12').find('.btn-next').hide();
				}
				console.log(pgVar12);
			};
		} else {
			if(pgVar12 > 0){
				pgVar12--;
				$(this).parents('#cont12').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont12').find('.btn-next').show();
			if(pgVar12 == 0){
				$(this).parents('#cont12').find('.btn-prev').hide();
			}
		};
	});

	// 13
	var pgVar13 = 0;
	$('#cont13 button').click( function(){
		var boxLen = $(this).parents('#cont13').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar13 < boxLen - 1){
				pgVar13++;
				$(this).parents('#cont13').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont13').find('.btn-prev').show();
				if(pgVar13 == boxLen - 1){
					$(this).parents('#cont13').find('.btn-next').hide();
				}
				console.log(pgVar13);
			};
		} else {
			if(pgVar13 > 0){
				pgVar13--;
				$(this).parents('#cont13').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont13').find('.btn-next').show();
			if(pgVar13 == 0){
				$(this).parents('#cont13').find('.btn-prev').hide();
			}
		};
	});
	/* ====================================================================================================== 슬라이드 영역 */

	resizeSlide();
	$(window).resize(resizeSlide);
	function resizeSlide(){
		$('.slide-box').each(function(){
			var idx = $(this).index();
			var boxW = $(this).outerWidth();
			$(this).css({'left':boxW*idx});
		});
	}
});