$(document).ready(function(){
    
    //Slick Slider
    $('.single-item').slick({
       dots: true,
    });
    
    //Initialize Hidden Sections
    $('#portfolio').hide();
    $('#services').hide();
    $('#about').hide();
    
    //Navbar 
    var selected = 1;
    
    $("#btn-1").click(function(){
        if (selected === 2){
            $("#btn-1").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-2").toggleClass("navbar-btn-selected navbar-btn");
            $('#one, #two, #two-a').toggle();
            $('#portfolio').toggle();
            selected = 1;
        }
        else if (selected === 3){
            $("#btn-1").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-3").toggleClass("navbar-btn-selected navbar-btn");
            $('#one, #two, #two-a').toggle();
            $('#services').toggle();
            selected = 1;
        }
        else if (selected === 4){
            $("#btn-1").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-4").toggleClass("navbar-btn-selected navbar-btn");
            $('#one, #two, #two-a').toggle();
            $('#about').toggle();
            selected = 1;
        }
        else{
            selected = 1;
        }
    });
    
    $("#btn-2").click(function(){
        if (selected === 1){
            $("#btn-2").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-1").toggleClass("navbar-btn-selected navbar-btn");
            $('#one, #two, #two-a').toggle();
            $('#portfolio').toggle();
            selected = 2;
        }
        else if (selected === 3){
            $("#btn-2").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-3 ").toggleClass("navbar-btn-selected navbar-btn");
            $('#services').toggle();
            $('#portfolio').toggle();
            selected = 2;
        }
        else if (selected === 4){
            $("#btn-2").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-4").toggleClass("navbar-btn-selected navbar-btn");
            $('#about').toggle();
            $('#portfolio').toggle();
            selected = 2;
        }
        else{
            selected = 2;
        }
    });
    
    $("#btn-3").click(function(){
        if (selected === 1){
            $("#btn-3").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-1").toggleClass("navbar-btn-selected navbar-btn");
            $('#one, #two, #two-a').toggle();
            $('#services').toggle();
            selected = 3;
        }
        else if (selected === 2){
            $("#btn-3").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-2").toggleClass("navbar-btn-selected navbar-btn");
            $('#portfolio').toggle();
            $('#services').toggle();
            selected = 3;
        }
        else if (selected === 4){
            $("#btn-3").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-4").toggleClass("navbar-btn-selected navbar-btn");
            $('#about').toggle();
            $('#services').toggle();
            selected = 3;
        }
        else{
            selected = 3;
        }
    });
    
    $("#btn-4").click(function(){
        if (selected === 1){
            $("#btn-4").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-1").toggleClass("navbar-btn-selected navbar-btn");
            $('#one, #two, #two-a').toggle();
            $('#about').toggle();
            selected = 4;
        }
        else if (selected === 2){
            $("#btn-4").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-2").toggleClass("navbar-btn-selected navbar-btn");
            $('#portfolio').toggle();
            $('#about').toggle();
            selected = 4;
        }
        else if (selected === 3){
            $("#btn-4").toggleClass("navbar-btn navbar-btn-selected");
            $("#btn-3").toggleClass("navbar-btn-selected navbar-btn");
            $('#services').toggle();
            $('#about').toggle();
            selected = 4;
        }
        else{
            selected = 4;
        }
    });
    
    //Button to full portfolio in section 2
    $('#portfolio-btn').click(function(){
        $("#btn-2").toggleClass("navbar-btn navbar-btn-selected");
        $("#btn-1").toggleClass("navbar-btn-selected navbar-btn");
        $('#one, #two, #two-a').toggle();
        $('#portfolio').toggle();
        selected = 2;
    });
    
    //Chrome anchor bug fix
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (window.location.hash && isChrome) {
            setTimeout(function () {
                var hash = window.location.hash;
                window.location.hash = "";
                window.location.hash = hash;
        }, 300);
    }
    
    
    
    /*
        var home = 0;
        
        //Button 1
        $("#btn-1").click(function(){
            if (home === 0){
                $("#btn-1 i").toggleClass("fa-camera-retro fa-home");
                home = 1;
            }
            else if (home === 1){
                $("#btn-1 i").toggleClass("fa-camera-retro fa-home");
                home = 0;
            }
            else if (home === 2){
                $("#btn-1 i").toggleClass("fa-camera-retro fa-home");
                $("#btn-2 i").toggleClass("fa-pagelines fa-home");
                home = 1;
            }
            else if (home === 3){
                $("#btn-1 i").toggleClass("fa-camera-retro fa-home");
                $("#btn-3 i").toggleClass("fa-comment-o fa-home");
                home = 1;
            }
            else{
                $("#btn-1 i").toggleClass("fa-camera-retro fa-home");
                $("#btn-4 i").toggleClass("fa-user fa-home");
                home = 1;
            }
        });
        
        //Button 2
        $("#btn-2").click(function(){
            if (home === 0){
                $("#btn-2 i").toggleClass("fa-pagelines fa-home");
                home = 2;
            }
            else if (home === 1){
                $("#btn-2 i").toggleClass("fa-pagelines fa-home");
                $("#btn-1 i").toggleClass("fa-camera-retro fa-home");
                home = 2;
            }
            else if (home === 2){
                $("#btn-2 i").toggleClass("fa-pagelines fa-home");
                home = 0;
            }
            else if (home === 3){
                $("#btn-2 i").toggleClass("fa-pagelines fa-home");
                $("#btn-3 i").toggleClass("fa-comment-o fa-home");
                home = 2;
            }
            else{
                $("#btn-2 i").toggleClass("fa-pagelines fa-home");
                $("#btn-4 i").toggleClass("fa-user fa-home");
                home = 2;
            }
        });
            
        //Button 3
        $("#btn-3").click(function(){
            if (home === 0){
                $("#btn-3 i").toggleClass("fa-comment-o fa-home");
                home = 3;
            }
            else if (home === 1){
                $("#btn-3 i").toggleClass("fa-comment-o fa-home");
                $("#btn-1 i").toggleClass("fa-camera-retro fa-home");
                home = 3;
            }
            else if (home === 2){
                $("#btn-3 i").toggleClass("fa-comment-o fa-home");
                $("#btn-2 i").toggleClass("fa-pagelines fa-home");
                home = 3;
            }
            else if (home === 3){
                $("#btn-3 i").toggleClass("fa-comment-o fa-home");
                home = 0;
            }
            else{
                $("#btn-3 i").toggleClass("fa-comment-o fa-home");
                $("#btn-4 i").toggleClass("fa-user fa-home");
                home = 3;
            }
        });
            
        //Button 4
        $("#btn-4").click(function(){
            if (home === 0){
                $("#btn-4 i").toggleClass("fa-user fa-home");
                home = 4;
            }
            else if (home === 1){
                $("#btn-4 i").toggleClass("fa-user fa-home");
                $("#btn-1 i").toggleClass("fa-camera-retro fa-home");
                home = 4;
            }
            else if (home === 2){
                $("#btn-4 i").toggleClass("fa-user fa-home");
                $("#btn-2 i").toggleClass("fa-pagelines fa-home");
                home = 4;
            }
            else if (home === 3){
                $("#btn-4 i").toggleClass("fa-user fa-home");
                $("#btn-3 i").toggleClass("fa-comment-o fa-home");
                home = 4;
            }
            else{
                $("#btn-4 i").toggleClass("fa-user fa-home");
                home = 0;
            }
        });
        
        */
    });