$(document).ready(function(){
    $(".btn-cartagena").click(function(){
        $(".informacion-cartagena").toggle(150);
        $(".informacion-medellin").hide(150);
    });


    $(".btn-medellin").click(function(){
        $(".informacion-medellin").toggle(150);
        $(".informacion-cartagena").hide(150);
    });
});

