$(function() {
	$(document).on('focusin', '.field, textarea', function() {
		if(this.title==this.value) {
			this.value = '';
		}
	}).on('focusout', '.field, textarea', function(){
		if(this.value=='') {
			this.value = this.title;
		}
	});

	scroll_func();

    $(window).scroll( function() {
      scroll_func()
    });

    $('#navigation').localScroll({
        offset: { top: -150 },
        duration: 3000
    });

    $('#logo').localScroll({
        offset: { top: -150 },
        duration: 3000
    });

   $('.col').hover( function(){
       $(this).addClass('hovered')
   }, function() {
       $(this).removeClass('hovered');
   });

   $('.flexslider').flexslider({
        controlNav: false
   });

    $('.thumbs img').click( function() {
        $_ind = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $(this).parent().parent().find('.img-area img.current').removeClass('current');
        $(this).parent().parent().find('.img-area img:eq(' + $_ind + ')').addClass('current');
    });

    $('.look').each( function(){
        $(this).find('.tab-nav li:first').addClass('active');
        $(this).find('.tab-entry:first').show();
    });

    $('.tab-nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $_index = $(this).index();
        $(this).closest('.tabbed-content').find('.tab-entry').hide().eq($_index).fadeIn();
        return false;
    });    
});

function scroll_func(){
    var _scroll = $('#header').outerHeight();
    var min_scroll = $(window).scrollTop();
    if( _scroll < min_scroll ) {
        $('#header').css('position', 'fixed').css('top', 0).css('left', 0);
    }
    else {
        $('#header').css('position', '').css('top', 0);
   }
};

$(window).load( function(){
    determine_positions()
    determine_location();
});

$(window).scroll( function(){
    determine_location();
});

var pages = [];
var top_positions = [];

function determine_positions() {
    pages.push('top');
    top_positions.push(0);

    var i = 1;
    $('#wrap > .element').each(function() {
        var section_id = $(this).attr('id');
        var section_top = Math.round($(this).offset().top);

        pages.push(section_id);
        top_positions.push(section_top);
    });

    if($.browser.msie && $.browser.version <= 7) {
        top_positions[1] = 635;
    }
    determine_location();
}

function determine_location() {
    var win_top = $(window).scrollTop();

    for(i=0;i<top_positions.length;i++) {
        if(win_top >= top_positions[i] && win_top < top_positions[i+1]) {
            if($('#navigation .active').length) {
                $('#navigation .active').removeClass('active');
                $('span.logo-ac').hide();
                $('span.logo-ac-top').hide();

            }
            $('#navigation a').each(function() {
                if($(this).attr('href').indexOf(pages[i+1]) != -1) {
                    $(this).parent().addClass('active');
                    $('span.logo-ac').hide();
                    $('span.logo-ac-top').hide();
                }
            });
        }
        if(win_top + $(window).height() >= $('#wrap').height()-80) {
            $('#navigation .active').removeClass('active');
            $('#navigation li:last').addClass('active');
        }

        if(win_top == 0) {
            $('span.logo-ac').show();
            $('span.logo-ac-top').show();
        }
   }
}