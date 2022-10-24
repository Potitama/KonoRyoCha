var windowWidth = $(window).width();
var windowSm = 768;
if (windowWidth <= windowSm) {
	particlesJS("particles-js", {
		"particles":{
			"number":{
				"value":40,//この数値を変更すると桜の数が増減できる
				"density":{
					"enable":true,
					"value_area":1000
				}
			},
			"color":{
				"value":"#fff"
			},
			"shape":{
				"type":"image",//形状は画像を指定
				"stroke":{
					"width":0,
				},
				"image":{
					"src":"./png/star.png",//【重要】画像を指定！桜の画像を設定してください。
					"width":2200,
					"height":1600
				}
			},
			"opacity":{
				"value":0.06409588744762158,
				"random":true,
				"anim":{
					"enable":false,
					"speed":1,
					"opacity_min":0.1,
					"sync":false
				}
			},
			"size":{
				"value":80.011985930952697,
				"random":false,//サイズをランダムに
				"anim":{
					"enable":false,
					"speed":4,
					"size_min":5,
					"sync":false
				}
			},
			"line_linked":{
				"enable":false,
			},
			"move":{
				"enable":true,
				"speed":7,//この数値を小さくするとゆっくりな動きになる
				"direction":"bottom",//右下に向かって落ちる
				"random":false,//動きはランダムにしない
				"straight":false,//動きをとどめない
				"out_mode":"out",//画面の外に出るように描写
				"bounce":false,//跳ね返りなし
				"attract":{
					"enable":false,
					"rotateX":281.9177489524316,
					"rotateY":127.670995809726
				}
			}
		},
		"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":false,
				},
				"onclick":{
					"enable":false,
				},
				"resize":true
			}
		},
		"retina_detect":true,
		"resize":true
	});
} else {
	particlesJS("particles-js", {
		"particles":{
			"number":{
				"value":20,//この数値を変更すると桜の数が増減できる
				"density":{
					"enable":true,
					"value_area":1000
				}
			},
			"color":{
				"value":"#fff"
			},
			"shape":{
				"type":"image",//形状は画像を指定
				"stroke":{
					"width":0,
				},
				"image":{
					"src":"./png/star.png",//【重要】画像を指定！桜の画像を設定してください。
					"width":2200,
					"height":1600
				}
			},
			"opacity":{
				"value":0.06409588744762158,
				"random":true,
				"anim":{
					"enable":false,
					"speed":1,
					"opacity_min":0.1,
					"sync":false
				}
			},
			"size":{
				"value":80.011985930952697,
				"random":false,//サイズをランダムに
				"anim":{
					"enable":false,
					"speed":4,
					"size_min":5,
					"sync":false
				}
			},
			"line_linked":{
				"enable":false,
			},
			"move":{
				"enable":true,
				"speed":7,//この数値を小さくするとゆっくりな動きになる
				"direction":"bottom",//右下に向かって落ちる
				"random":false,//動きはランダムにしない
				"straight":false,//動きをとどめない
				"out_mode":"out",//画面の外に出るように描写
				"bounce":false,//跳ね返りなし
				"attract":{
					"enable":false,
					"rotateX":281.9177489524316,
					"rotateY":127.670995809726
				}
			}
		},
		"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":false,
				},
				"onclick":{
					"enable":false,
				},
				"resize":true
			}
		},
		"retina_detect":true,
		"resize":true
	});
}

$(window).scroll(function() {
    $('.fadeleft').each(function() {
        var mainHeight = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > mainHeight - windowHeight) {
            $(this).css('opacity', '1');
            $(this).css('transform', 'translateX(0)');
        }
    });
});

$(window).scroll(function() {
    $('.faderight').each(function() {
        var mainHeight = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > mainHeight - windowHeight) {
            $(this).css('opacity', '1');
            $(this).css('transform', 'translateX(0)');
        }
    });
});

$(window).scroll(function() {
    $('.fadein').each(function() {
        var mainHeight = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > mainHeight - windowHeight) {
            $(this).css('opacity', '1');
            $(this).css('transform', 'rotateY(0)');
        }
    });
});

$(window).on('load', function(){
    $('.fadeinTop').each(function() {
        var mainHeight = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > mainHeight - windowHeight) {
            $(this).css('opacity', '1');
            $(this).css('transform', 'rotateY(0)');
        }
    });
});




