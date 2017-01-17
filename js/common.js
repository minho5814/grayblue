$(window).load(function(){
	$('.nav').localScroll(500);

	$('#cont01 .slide-box').parallax('50%', 0.3);
	$('#cont02 .slide-box').parallax('50%', 0.3);
	$('#cont03 .slide-box').parallax('50%', 0.3);
	$('#cont04 .slide-box').parallax('50%', 0.3);
	$('#cont05 .slide-box').parallax('50%', 0.3);
	$('#cont06 .slide-box').parallax('50%', 0.3);
	$('#cont07 .slide-box').parallax('50%', 0.3);
	$('#cont08 .slide-box').parallax('50%', 0.3);
	$('#cont09 .slide-box').parallax('50%', 0.3);
	$('#cont10 .slide-box').parallax('50%', 0.3);
	$('#cont11 .slide-box').parallax('50%', 0.3);
	$('#cont12 .slide-box').parallax('50%', 0.3);
	$('#cont13 .slide-box').parallax('50%', 0.3);

	$('#cont14 .slide-box').parallax('50%', 0.3);
	$('#cont15 .slide-box').parallax('50%', 0.3);
	$('#cont16 .slide-box').parallax('50%', 0.3);
	$('#cont17 .slide-box').parallax('50%', 0.3);


	$(window).scroll(function(){
		var winScroll = $(window).scrollTop();
		var $direct=$('.parallax-box');
		$direct.each(function(index){
			$directOffset=$direct.eq(index).offset().top - 300;
			// 네비게이션 블릿
			if(winScroll >= $directOffset) {
				$('.nav li').eq(index).addClass('on').siblings().removeClass('on');
			}
			// 이전, 다음 버튼 해당영역에서 노출
			if(winScroll >= $directOffset + 200) {
				$direct.eq(index).find('.btn-area').show();
			}
			// 이전, 다음 버튼 해당영역에서 벗어나면 히든
			if(winScroll >= $directOffset + 400) {
				$('.slide-area .btn-area').hide();
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
			$(this).append('<div class="btn-area"><button type="button" class="btn-prev" style="display:none;">이전</button><button type="button" class="btn-next">다음</button></div>');
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

	// 14
	var pgVar14 = 0;
	$('#cont14 button').click( function(){
		var boxLen = $(this).parents('#cont14').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar14 < boxLen - 1){
				pgVar14++;
				$(this).parents('#cont14').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont14').find('.btn-prev').show();
				if(pgVar14 == boxLen - 1){
					$(this).parents('#cont14').find('.btn-next').hide();
				}
			};
		} else {
			if(pgVar14 > 0){
				pgVar14--;
				$(this).parents('#cont14').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont14').find('.btn-next').show();
			if(pgVar14 == 0){
				$(this).parents('#cont14').find('.btn-prev').hide();
			}
		};
	});

	// 15
	var pgVar15 = 0;
	$('#cont15 button').click( function(){
		var boxLen = $(this).parents('#cont15').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar15 < boxLen - 1){
				pgVar15++;
				$(this).parents('#cont15').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont15').find('.btn-prev').show();
				if(pgVar15 == boxLen - 1){
					$(this).parents('#cont15').find('.btn-next').hide();
				}
			};
		} else {
			if(pgVar15 > 0){
				pgVar15--;
				$(this).parents('#cont15').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont15').find('.btn-next').show();
			if(pgVar15 == 0){
				$(this).parents('#cont15').find('.btn-prev').hide();
			}
		};
	});

	// 16
	var pgVar16 = 0;
	$('#cont16 button').click( function(){
		var boxLen = $(this).parents('#cont16').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar16 < boxLen - 1){
				pgVar16++;
				$(this).parents('#cont16').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont16').find('.btn-prev').show();
				if(pgVar16 == boxLen - 1){
					$(this).parents('#cont16').find('.btn-next').hide();
				}
			};
		} else {
			if(pgVar16 > 0){
				pgVar16--;
				$(this).parents('#cont16').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont16').find('.btn-next').show();
			if(pgVar16 == 0){
				$(this).parents('#cont16').find('.btn-prev').hide();
			}
		};
	});

	// 17
	var pgVar17 = 0;
	$('#cont17 button').click( function(){
		var boxLen = $(this).parents('#cont17').find('.slide-box').length;
		if($(this).hasClass('btn-next')){
			if(pgVar17 < boxLen - 1){
				pgVar17++;
				$(this).parents('#cont17').find('.slide-box').animate({'left':'-=100%'},300);
				$(this).parents('#cont17').find('.btn-prev').show();
				if(pgVar17 == boxLen - 1){
					$(this).parents('#cont17').find('.btn-next').hide();
				}
			};
		} else {
			if(pgVar17 > 0){
				pgVar17--;
				$(this).parents('#cont17').find('.slide-box').animate({'left':'+=100%'},300);
			};
			$(this).parents('#cont17').find('.btn-next').show();
			if(pgVar17 == 0){
				$(this).parents('#cont17').find('.btn-prev').hide();
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
