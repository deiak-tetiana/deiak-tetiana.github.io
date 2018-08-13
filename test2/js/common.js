$(function () {

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


    if ($(window).width() >= 1024) {
// do some magic

        var controller = new ScrollMagic.Controller();

        // first

        var scene1 = new ScrollMagic.Scene({
            duration: "100%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-img-top", 1)).setPin(".header-wrapper").addIndicators("000").addTo(controller);

        var scene1 = new ScrollMagic.Scene({
            duration: "30%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-img-top", 1, {"left": "-100%"})).addIndicators("111").addTo(controller);

        var scene2 = new ScrollMagic.Scene({
            duration: "30%",
            offset: "110%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-learn-more", 5, {"opacity": "0"})).addIndicators("222").addTo(controller);

        var scene3 = new ScrollMagic.Scene({
            duration: "40%",
            offset: "350%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-img-bottom", 5, {"left": "-100%"})).addIndicators("333").addTo(controller);

        // second
        var scene4 = new ScrollMagic.Scene({
            duration: "50%",
            offset: "300%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".digital-new-img", 5, {"top": "-900%"})).addIndicators("444").addTo(controller);

        var scene6 = new ScrollMagic.Scene({
            duration: "70%",
            offset: "300%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".digital-right-text", 5, {
            "top": "-380%"
        })).addIndicators("444").addTo(controller);

        var scene7 = new ScrollMagic.Scene({
            duration: "50%",
            offset: "200%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-learn-text", 5, {
            "top": "-10%",
            "right": "0%",
            "opacity": "1"
        })).addIndicators("444").addTo(controller);


        var wipeAnimation = new TimelineMax()

            .fromTo(".stories", 1, {
                y: "100%"
            }, {y: "0%", ease: Linear.easeNone})

            .fromTo(".readers", 1, {
                y: "100%"
            }, {y: "0%", ease: Linear.easeNone})

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
            }, {y: "-55%", opacity: 1, ease: Linear.easeNone})

            .fromTo(".archive .h2", 1, {
                opacity: 0
            }, {opacity: 1, ease: Linear.easeNone})

            .fromTo(".archive p", 1, {
                opacity: 0
            }, {opacity: 1, ease: Linear.easeNone})

            // .fromTo(".archive", 1, {
            //     opacity: 1
            // }, {opacity: 1, background: "#ffffff url(../img/archive-bg.svg)", ease: Linear.easeNone})


            .fromTo(".archive .h2, .archive p", 1, {
                x: 0
            }, {x: "-40%", scale: "0.7", ease: Linear.easeNone})


            .fromTo(".more", 1, {
                y: "100%"
            }, {y: "-55%", ease: Linear.easeNone})


            // .from(".archive", 1, {y: "100%", opacity: 0, ease: Power4.easeInOut})
            // .to(".archive ", 0.5, {y: "-55%", opacity: 1});


            .fromTo(".firstDesc", 1, {
                y: "100%"
            }, {y: "-55%", ease: Linear.easeNone});


        new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            duration: "1700%",
            triggerHook: 'onLeave',

        })
            .setPin("#pinContainer")
            .setTween(wipeAnimation)
            .addIndicators()
            // .setClassToggle(".archive", "not-active")
            .addTo(controller)
            .on('enter', function (e) {
            });


        // var scene8 = new ScrollMagic.Scene({
        //     // duration: "50%",
        //     offset: "350%",
        //     triggerElement: ".blue",
        //     triggerHook: 'onLeave'
        // }).setTween(TweenMax.to(".blue", 5, {})).addIndicators("444").setPin(".blue").addTo(controller);
        //
        // var scene9 = new ScrollMagic.Scene({
        //     // duration: "50%",
        //     offset: "500%",
        //     triggerElement: ".turqoise",
        //     triggerHook: 'onLeave'
        // }).setTween(TweenMax.to(".turqoise", 5, {})).addIndicators("444").setPin(".turqoise").addTo(controller);


        // var controller = new ScrollMagic.Controller({
        //     globalSceneOptions: {
        //         triggerHook: 'onLeave'
        //     }
        // });
        // var slides = document.querySelectorAll(".panel");
        //
        // // create scene for every slide
        // for (var i = 0; i < slides.length; i++) {
        //     new ScrollMagic.Scene({
        //         triggerElement: slides[i]
        //     })
        //         .setPin(slides[i])
        //         .addIndicators() // add indicators (requires plugin)
        //         .addTo(controller);
        // }


    }


    // var membersList = $(".madeIn .members-inner");
    //
    // var win = $(window);
    // win.scroll(function (event) {
    //
    //     console.log(membersList)
    //
    //     for(let j = 0; j < membersList.length; j++  ){
    //
    //         if( !membersList[j].classList.contains("come-in")){
    //             for (let i = 0; i < membersList.length; i++) {
    //                 setTimeout(function () {
    //                     membersList[i].className += " come-in";
    //                 }, i * 200);
    //             }
    //         }
    //     }
    //
    //
    //
    //
    // });
});


