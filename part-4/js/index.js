$(document).ready(function(){
    
    // $('h1').mouseleave(function(){
    //     $(this).hide();
    // });

    $('input').focus(function(){
            $(this).css("background","#ccc")
    });

    $('input').mouseleave(function(){
        $(this).css("background","red")
    });

    $("#btnHide").click(function(){
        $('h1').hide('5000');
    });

    $("#btnShow").click(function(){
        $('h1').show('fast');
    });
});