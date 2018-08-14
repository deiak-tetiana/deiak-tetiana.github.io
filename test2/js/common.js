$(function () {

        $.fn.visible = function(partial) {

            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
        };

    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 120,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });

    // Custom JS


    if ($(window).width() >= 992 - 17) {
// do some magic
        var controller = new ScrollMagic.Controller();
        // first

        var scene1 = new ScrollMagic.Scene({
            duration: "100%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-img-top", 1)).setPin(".header-wrapper").addTo(controller);

        var scene1 = new ScrollMagic.Scene({
            duration: "30%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-img-top", 1, {"left": "-100%"})).addTo(controller);

        var scene2 = new ScrollMagic.Scene({
            duration: "30%",
            offset: "110%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-learn-more", 5, {"opacity": "0"})).addTo(controller);

        var scene3 = new ScrollMagic.Scene({
            duration: "40%",
            offset: "350%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-img-bottom", 5, {"left": "-100%"})).addTo(controller);

        // second
        var scene4 = new ScrollMagic.Scene({
            duration: "50%",
            offset: "300%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".digital-new-img", 5, {"top": "-900%"})).addTo(controller);

        var scene6 = new ScrollMagic.Scene({
            duration: "70%",
            offset: "300%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".digital-right-text", 5, {
            "top": "-380%"
        })).addTo(controller);

        var scene7 = new ScrollMagic.Scene({
            duration: "50%",
            offset: "200%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-learn-text", 5, {
            "top": "-10%",
            "right": "0%",
            "opacity": "1"
        })).addTo(controller);


        var wipeAnimation = new TimelineMax()

            .fromTo(".stories", 1, {
                y: "100%"
            }, {y: "0%", ease: Linear.easeNone})

            .fromTo(".readers", 1, {
                y: "100%"
            }, {y: "0%", deley: 1, ease: Linear.easeNone})

            .fromTo(".work", 1, {
                x: "-100%"
            }, {x: "0%", ease: Linear.easeNone})

            .fromTo(".sofa", 1, {
                y: "100%"
            }, {y: "0%", ease: Linear.easeNone})

            .fromTo(".h2-sofa", 1, {
                y: "-100%"
            }, {y: "0%", ease: Linear.easeNone})

            .fromTo(".newsfeed", 1, {
                y: "100%"
            }, {y: "-55%", ease: Linear.easeNone})


            .fromTo(".archive", 1, {
                y: "100%", opacity: 0
            }, {y: "-55%", opacity: 1, deley: 1, ease: Linear.easeNone})


            .fromTo(".archive .h2", 1, {
                opacity: 0
            }, {opacity: 1, ease: Linear.easeNone})


            .fromTo(".archive .archive-readers", 1, {
                opacity: 0
            }, {opacity: 1, ease: Linear.easeNone})

            .fromTo(".archive ", 1, {

            }, {background: "#ffffff", delay: 1, ease: Linear.easeNone})

            .fromTo(".archive .h2", 1, {
                x: 0, y: "0"
            }, {x: "-20%", y: "-10%", scale: "0.7", ease: Linear.easeNone})


            .fromTo(".archive .archive-readers", 1, {
                x: 0, y: "0%"
            }, {x: "-20%", y: "-200%", scale: "0.9", ease: Linear.easeNone})


            .fromTo(".archive .archive-description", 1, {
                opacity: 0, y: "100%",  x: "10%"
            }, {opacity: 1, y: "-80%",  x: "10%", display: "block", ease: Linear.easeNone })

            .fromTo(".archive .more-right", 1, {
                opacity: 0, y: "100%"
            }, {opacity: 1, y: "-80%", ease: Linear.easeNone})


            .fromTo(".firstDesc", 1, {
                y: "100%"
            }, {y: "-155%", ease: Linear.easeNone});


        new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            duration: "1700%",
            triggerHook: 'onLeave',

        })
            .setPin("#pinContainer")
            .setTween(wipeAnimation)

            // .setClassToggle(".archive", "not-active")
            .addTo(controller)
            .on('enter', function (e) {
            });


        /*===================== arrow start ===================================*/
        var header_height = $(".header-wrapper").height();
        $(window).scroll(function(){
            var wintop = $(window).scrollTop();
            if(wintop >= header_height - 500){
                $('.arrow').fadeOut()
            }
            else{
                $('.arrow').fadeIn()
            }
        });

        $('.arrow').click(function(){
            $('html,body').animate({scrollTop:header_height + 30 },2000)
        })
        /*===================== arrow end===================================*/
    }
    else{
        $('.arrow').css({"display":"none"});
    }


    var win = $(window);
    var membersList = $(".madeIn .members-inner");
    win.scroll(function (event) {
        membersList.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in");
                },i*200);
            }
        });

    });




});


