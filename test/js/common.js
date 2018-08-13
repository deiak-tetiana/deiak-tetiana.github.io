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
        y: "100%"
        }, {y: "-55%", ease: Linear.easeNone});

    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        duration: "300%",
        triggerHook: 'onLeave',

    })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
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


});
