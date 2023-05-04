$(document).ready(function () {
	$('#banner').hide();
	$('#gallery').hide();

	$('.nextPage').on('click', function () {
		$('#intro').hide();
		$("link[title='title1']").attr('href', 'assets/css/main.css');
		$('#banner').fadeIn(600);
		return;
	});

	let CoChampionsKorea = {};
	CoChampionsKorea.image = ['./assets/img/CoChampionsKorea_Logo.jpg'];
	CoChampionsKorea.caption = ['hi'];

	let CWU = {};
	CWU.image = ['./assets/img/CWU_Logo.webp'];
	CWU.caption = ['hi'];
	let GGBZ = {};
	GGBZ.image = ['./assets/img/GGBZ_Logo.png'];
	GGBZ.caption = ['hi'];
	let SN = {};
	SN.image = ['./assets/img/SN_Logo.png'];
	SN.caption = ['hi'];
	let MKSI = {};
	MKSI.image = ['./assets/img/MKSI_Logo.jpg'];
	MKSI.caption = ['hi'];
	let YSU = {};
	YSU.image = ['./assets/img/YSU_Logo.webp'];
	YSU.caption = ['hi'];
	let Insta = {};
	Insta.image = ['./assets/img/yunhee1222.jpg'];
	Insta.caption = ['hi'];

	let galleryImageAndCaption = (thema) => {
		$('#banner').fadeOut(600, function () {
			$("link[title='title1']").attr('href', 'assets/css/magnific.css');
			$('.gallery').empty();
			for (let i = 0; i < thema.image.length; i++) {
				$('.gallery').append(`<a class='gallery-link' href='${thema['image'][i]}'><figure class='gallery-image'><img height='1600' src='${thema['image'][i]}' width='1600'><figcaption>${thema['caption'][i]}</figcaption></figure></a>`);
			}
			$('#gallery').fadeIn(600);
			active_gallery();
			return;
		});
	};

	$('.hex-cell').on('click', function () {
		let indexNo = $(this).index();
		switch (indexNo) {
			case 1:
				// 1_CoChampionsKorea
				galleryImageAndCaption(CoChampionsKorea);
				break;
			case 2:
				// 2_CWU
				galleryImageAndCaption(CWU);
				break;
			case 3:
				// 3_GGBZ
				galleryImageAndCaption(GGBZ);
				break;
			case 4:
				// 4_SN
				galleryImageAndCaption(SN);
				break;
			case 5:
				// 5_MKSI
				galleryImageAndCaption(MKSI);
				break;
			case 6:
				// 6_YSU
				galleryImageAndCaption(YSU);
				break;
			case 7:
				// 7_Insta
				galleryImageAndCaption(Insta);
				break;
		}
	});

	$('#btn_back').on('click', function () {
		$('#gallery').fadeOut(600, function () {
			$("link[title='title1']").attr('href', 'assets/css/main.css');
			$('#banner').fadeIn(600);
		});
	});

	$('.btn-flip').on('click', function () {
		if ($('.btn-flip').data('front') == 'gallery') {
			$('.btn-flip').data('front', 'youtube');
			$('.btn-flip').data('back', 'gallery');
		} else {
			$('.btn-flip').data('front', 'gallery');
			$('.btn-flip').data('back', 'youtube');
		}
	});

	let active_gallery = () => {
		$('.gallery-link').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true,
				titleSrc: function (item) {
					return item.el.find('figcaption').text() || item.el.attr('title');
				},
			},
			zoom: {
				enabled: true,
			},
			// duration: 300
			gallery: {
				enabled: true,
				navigateByImgClick: false,
				tCounter: '',
			},
			disableOn: function () {
				return $(window).width() > 640;
			},
		});
	};
});
