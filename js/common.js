$(function () {
    $(".header .hamburger").click(function () {
        $(".header .hamburger").toggleClass('is-active');
        $(".header .nav").slideToggle("fast");

    });


    // scroll to the content start
    $("#nav ").on("click", "a", function (event) {

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        var window_width = $(window).width();
        if (window_width >= 992 - 17) {
            $('body,html').animate({scrollTop: top - 69}, 1500);

        }

        if (window_width < 992 - 17) {
            $(".header .nav").slideUp("fast");
            $('body,html').animate({scrollTop: top - 69}, 1500);

            if( $(".header .hamburger").hasClass('is-active')){
                $(".header .hamburger").removeClass('is-active');
            }

        }

    });

    $(window).resize(function () {
        var window_width = $(window).width();

        if (window_width > 1200 - 17) {
            $(".header .nav").css({"display":"block"});
        }
        else{
            $(".header .nav").css({"display":""});
            if( $(".header .hamburger").hasClass('is-active')){
                $(".header .hamburger").removeClass('is-active');
            }
        }

        });




// scroll to the content end

    // owl-carousel start
        $(".owl-carousel").owlCarousel({
            items: 1,
            nav: true,
            dots: false
        });
    // owl-carousel end




// ===============Accordion start==================

    var action = 'click';
    var speed = "500";

    // Question handler
    $('li.q').on(action, function () {
        // Get next element
        var desc = $(this);
        // $(desc).addClass('pink');
        $('li.q').not(desc).removeClass('pink');
        desc.toggleClass('pink');

        $(this).next()
            .slideToggle(speed)
            .siblings('li.a')
            .slideUp();
        // Get arrow for active question
        var arrow = $(this).children('.fa');
        // Remove the 'rotate' class for all images except the active.
        $('.fas').not(arrow).removeClass('rotate');
        // Toggle rotate class
        arrow.toggleClass('rotate');
    });
    // ===============Accordion end==================

//===============skills start====================

//draw the doughnut
    var doughnutArray = [document.getElementById('doughnut').getContext('2d'), document.getElementById('doughnut2').getContext('2d'), document.getElementById('doughnut3').getContext('2d'), document.getElementById('doughnut4').getContext('2d')];
    for (var i = 0; i < doughnutArray.length; i++) {
        doughnutArray[i].lineWidth = 5; //thickness of the line
        doughnutArray[i].fillStyle = '#eaeaea';
        doughnutArray[i].strokeStyle = "#eaeaea";
        doughnutArray[i].beginPath();
        doughnutArray[i].arc(60, 60, 55, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
        doughnutArray[i].stroke();
    }


    /*Load skills one function*/
    function loadSkills1() {
        var ctx = document.getElementById('skill1').getContext('2d');
        var al = 0;
        var start = 4.72;
        var cw = ctx.canvas.width;
        var ch = ctx.canvas.height;
        var diff;

        function progressSim() {
            diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
            ctx.clearRect(0, 0, cw, ch);
            ctx.lineWidth = 5; //thickness of the line
            ctx.fillStyle = '#ff536b';
            ctx.strokeStyle = "#ff536b";
            ctx.textAlign = 'center';
            ctx.font = "30px lato-regular";
            ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
            ctx.beginPath();
            ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
            ctx.stroke();
            if (al >= 90) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
                clearTimeout(sim);
                // Add scripting here that will run when progress completes
            }
            al++;
        }

        var sim = setInterval(progressSim, 20); //speed
    }

    /*loadSkills2 function*/
    function loadSkills2() {
        var ctx = document.getElementById('skill2').getContext('2d');
        var al = 0;
        var start = 4.72;
        var cw = ctx.canvas.width;
        var ch = ctx.canvas.height;
        var diff;

        function progressSim() {
            diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
            ctx.clearRect(0, 0, cw, ch);
            ctx.lineWidth = 5; //thickness of the line
            ctx.fillStyle = '#ff536b';
            ctx.strokeStyle = "#ff536b";
            ctx.textAlign = 'center';
            ctx.font = "30px lato-regular";
            ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
            ctx.beginPath();
            ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
            ctx.stroke();
            if (al >= 80) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
                clearTimeout(sim);
                // Add scripting here that will run when progress completes
            }
            al++;
        }

        var sim = setInterval(progressSim, 30); //speed
    }

    /* loadSkill3 function*/
    function loadSkills3() {
        var ctx = document.getElementById('skill3').getContext('2d');
        var al = 0;
        var start = 4.72;
        var cw = ctx.canvas.width;
        var ch = ctx.canvas.height;
        var diff;

        function progressSim() {
            diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
            ctx.clearRect(0, 0, cw, ch);
            ctx.lineWidth = 5; //thickness of the line
            ctx.fillStyle = '#ff536b';
            ctx.strokeStyle = "#ff536b";
            ctx.textAlign = 'center';
            ctx.font = "30px lato-regular";
            ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
            ctx.beginPath();
            ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
            ctx.stroke();
            if (al >= 70) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
                clearTimeout(sim);
                // Add scripting here that will run when progress completes
            }
            al++;
        }

        var sim = setInterval(progressSim, 40); //speed
    }

    /* loadSkill4 function*/
    function loadSkills4() {
        var ctx = document.getElementById('skill4').getContext('2d');
        var al = 0;
        var start = 4.72;
        var cw = ctx.canvas.width;
        var ch = ctx.canvas.height;
        var diff;

        function progressSim() {
            diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
            ctx.clearRect(0, 0, cw, ch);
            ctx.lineWidth = 5; //thickness of the line
            ctx.fillStyle = '#ff536b';
            ctx.strokeStyle = "#ff536b";
            ctx.textAlign = 'center';
            ctx.font = "30px lato-regular";
            ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
            ctx.beginPath();
            ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
            ctx.stroke();
            if (al >= 90) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
                clearTimeout(sim);
                // Add scripting here that will run when progress completes
            }
            al++;
        }

        var sim = setInterval(progressSim, 50); //speed
    }

//=================skills end===================


    /* fade in down animation start*/
    var $animation_elements_percent = $('.animation-element-percent');
    var $window = $(window);

    var check_play = true;

    function check_if_in_view_percent() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements_percent, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position  >= window_top_position) &&
                (element_top_position  <= window_bottom_position)) {
                $element.addClass('on-animation');

                if (check_play) {
                    loadSkills1();
                    loadSkills2();
                    loadSkills3();
                    loadSkills4();
                }
                check_play = false;
            }
            // if we need to toggle it
            // else {
            //     $element.removeClass('on-animation');
            // }
        });
    }

    $window.on('scroll resize', check_if_in_view_percent);
    $window.trigger('scroll');
    /* fade in down animation end */


    /* fade in down animation start*/
    var $animation_elements = $('.hr-left-hexagon, .hr-right-hexagon');
    var $window = $(window);


    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position  >= window_top_position) &&
                (element_top_position  <= window_bottom_position)) {
                $element.addClass('on-animation');
                $element.css({"opacity": "1"});
            }
            else {


            }
            // if we need to toggle it
            // else {
            //     $element.removeClass('on-animation');
            // }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    /* fade in down animation end */

});


